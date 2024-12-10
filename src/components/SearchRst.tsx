import React, {useEffect, useState} from "react";
import "../css/rstPage.css";

import SearchRstTop from "./SearchRstTop";
import SearchRstMain from "./SearchRstMain";
import {useSearchParams} from "react-router-dom";
import Pagination from "./Pagination";
import WeeklyBest from "./WeeklyBest";
import Loading from "./Loading";

function SearchRst() {

    //const params = useParams();
    const [searchParams, setSearchParams] = useSearchParams();

    const currPage=searchParams.get("currPage")?searchParams.get("currPage"):"1";
    const queryText=searchParams.get("query")?searchParams.get("query"):"";

    const [data,setData]=useState([])
    const [rstNum,setRstNum]=useState(0)
    const [isLoading,setIsLoading]=useState(true)

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

    const loadData=async ()=>{
        await fetch("http://localhost:7777/search?"+searchParams.toString(),{
            method:"GET",
        })
            .then(response => response.json())
            .then((json)=>{
                console.log(json)
                setData(json)
                setRstNum(json.length)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }

    //let data;
    useEffect(()=>{
        //mkLoadingPage()

        loadData()

        //fetch("http://127.0.0.1:8000/search?"+searchParams.toString(),{


    },[queryText, currPage, searchParams])


    return (
        isLoading?(<Loading />):(
        <>
            <SearchRstTop query={queryText}/>
            <div id={"rstNum"}>티켓 ({rstNum})</div>
            { rstNum>0?
                ( <SearchRstMain rstNum={rstNum} data={data}/> )
                :( <div id={"rstMain"}>
                        <div id={"noRst"}>
                            <h4> 검색하신 "{queryText}"에 대한 티켓이 존재하지 않습니다.</h4>
                            <div>다른 검색어를 입력해주세요</div>
                        </div>
                    <WeeklyBest />
                </div> )
            }
    <div id={"pagination"}>
                <div></div>
                {totalPage > 1 ? <Pagination totalPage={totalPage} currentPage={currPage}/> : <></>}
                <div></div>
            </div>
        </>)
    );
}

export default SearchRst;
