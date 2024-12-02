import React, {useEffect, useState} from "react";
import "../css/rstPage.css";

import SearchRstTop from "./SearchRstTop";
import SearchRstMain from "./SearchRstMain";
import {useSearchParams} from "react-router-dom";
import Pagination from "./Pagination";

function SearchRst() {

    //const params = useParams();
    const [searchParams, setSearchParams] = useSearchParams();

    const currPage=searchParams.get("currPage")?searchParams.get("currPage"):"1";
    const queryText=searchParams.get("query")?searchParams.get("query"):"";

    const [data,setData]=useState([])
    const [rstNum,setRstNum]=useState(0)

    //const totalRst=1001
    const totalPage=Math.ceil(rstNum / 50)
    // const data = [
    //     {
    //         "posterImg": "https://ticketimage.interpark.com/Play/image/large/24/24016997_p.gif",
    //         "showTitle": "MC스나이퍼 - Back To The Oldschool 3",
    //         "showLocation": "홍대 무신사 개러지",
    //         "showDate": "2024년 11월 22일(금) 오후 6시",
    //         "onSale": true,
    //         "isExclusive": true,
    //         "id":1
    //     },
    //     {
    //         "posterImg": "https://ticketimage.interpark.com/Play/image/large/24/24016997_p.gif",
    //         "showTitle": "MC스나이퍼 - Back To The Oldschool 3",
    //         "showLocation": "홍대 무신사 개러지",
    //         "showDate": "2024년 11월 22일(금) 오후 6시",
    //         "onSale": false,
    //         "isExclusive": true,
    //         "id":2
    //     },
    //     {
    //         "posterImg": "https://ticketimage.interpark.com/Play/image/large/24/24016997_p.gif",
    //         "showTitle": "MC스나이퍼 - Back To The Oldschool 3",
    //         "showLocation": "홍대 무신사 개러지",
    //         "showDate": "2024년 11월 22일(금) 오후 6시",
    //         "onSale": true,
    //         "isExclusive": false,
    //         "id":3
    //     },
    //     {
    //         "posterImg": "https://ticketimage.interpark.com/Play/image/large/24/24016997_p.gif",
    //         "showTitle": "MC스나이퍼 - Back To The Oldschool 3",
    //         "showLocation": "홍대 무신사 개러지",
    //         "showDate": "2024년 11월 22일(금) 오후 6시",
    //         "onSale": true,
    //         "isExclusive": true,
    //         "id":4
    //     },
    //     {
    //         "posterImg": "https://ticketimage.interpark.com/Play/image/large/24/24016997_p.gif",
    //         "showTitle": "MC스나이퍼 - Back To The Oldschool 3",
    //         "showLocation": "홍대 무신사 개러지",
    //         "showDate": "2024년 11월 22일(금) 오후 6시",
    //         "onSale": false,
    //         "isExclusive": false,
    //         "id":5
    //     },
    //     {
    //         "posterImg": "https://ticketimage.interpark.com/Play/image/large/24/24016997_p.gif",
    //         "showTitle": "MC스나이퍼 - Back To The Oldschool 3",
    //         "showLocation": "홍대 무신사 개러지",
    //         "showDate": "2024년 11월 22일(금) 오후 6시",
    //         "onSale": true,
    //         "isExclusive": true,
    //         "id":6
    //     },
    //     {
    //         "posterImg": "https://ticketimage.interpark.com/Play/image/large/24/24016997_p.gif",
    //         "showTitle": "MC스나이퍼 - Back To The Oldschool 3",
    //         "showLocation": "홍대 무신사 개러지",
    //         "showDate": "2024년 11월 22일(금) 오후 6시",
    //         "onSale": true,
    //         "isExclusive": true,
    //         "id":7
    //     },
    //     {
    //         "posterImg": "https://ticketimage.interpark.com/Play/image/large/24/24016997_p.gif",
    //         "showTitle": "MC스나이퍼 - Back To The Oldschool 3",
    //         "showLocation": "홍대 무신사 개러지",
    //         "showDate": "2024년 11월 22일(금) 오후 6시",
    //         "onSale": true,
    //         "isExclusive": true,
    //         "id":8
    //     },
    //     {
    //         "posterImg": "https://ticketimage.interpark.com/Play/image/large/24/24016997_p.gif",
    //         "showTitle": "MC스나이퍼 - Back To The Oldschool 3",
    //         "showLocation": "홍대 무신사 개러지",
    //         "showDate": "2024년 11월 22일(금) 오후 6시",
    //         "onSale": true,
    //         "isExclusive": true,
    //         "id":9
    //     },
    // ]


    //let data;
    useEffect(()=>{
        const xhr = new XMLHttpRequest();
        xhr.open("GET","http://127.0.0.1:8000/search?"+searchParams.toString());
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");

        xhr.onreadystatechange=function(){
            if(xhr.readyState===4){
                //alert(1)
                const rst=JSON.parse(xhr.response)
                setData(rst)
                setRstNum(rst.length)
                //console.log(data)
            }
        }
        xhr.send()
    },[queryText, currPage, searchParams])


    return (
        <>
            <SearchRstTop query={queryText} />
            <SearchRstMain rstNum={rstNum} data={data} />
            <div id={"pagination"}>
                <div></div>
                {totalPage>1?<Pagination totalPage={totalPage} currentPage={currPage} />:<></>}
                <div></div>
            </div>
        </>
    );
}

export default SearchRst;
