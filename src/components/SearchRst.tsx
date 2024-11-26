import React from "react";
import "../css/rstPage.css";

import SearchRstTop from "./SearchRstTop";
import SearchRstMain from "./SearchRstMain";
import {useSearchParams} from "react-router-dom";
import Pagination from "./Pagination";

function SearchRst() {

    //const params = useParams();
    const [searchParams, setSearchParams] = useSearchParams();

    const totalRst=1001
    const totalPage=Math.ceil(totalRst / 50)
    const data = [
        {
            "posterImg": "https://ticketimage.interpark.com/Play/image/large/24/24016997_p.gif",
            "showTitle": "MC스나이퍼 - Back To The Oldschool 3",
            "showLocation": "홍대 무신사 개러지",
            "showDate": "2024년 11월 22일(금) 오후 6시",
            "onSale": true,
            "isExclusive": true,
            "id":1
        },
        {
            "posterImg": "https://ticketimage.interpark.com/Play/image/large/24/24016997_p.gif",
            "showTitle": "MC스나이퍼 - Back To The Oldschool 3",
            "showLocation": "홍대 무신사 개러지",
            "showDate": "2024년 11월 22일(금) 오후 6시",
            "onSale": false,
            "isExclusive": true,
            "id":2
        },
        {
            "posterImg": "https://ticketimage.interpark.com/Play/image/large/24/24016997_p.gif",
            "showTitle": "MC스나이퍼 - Back To The Oldschool 3",
            "showLocation": "홍대 무신사 개러지",
            "showDate": "2024년 11월 22일(금) 오후 6시",
            "onSale": true,
            "isExclusive": false,
            "id":3
        },
        {
            "posterImg": "https://ticketimage.interpark.com/Play/image/large/24/24016997_p.gif",
            "showTitle": "MC스나이퍼 - Back To The Oldschool 3",
            "showLocation": "홍대 무신사 개러지",
            "showDate": "2024년 11월 22일(금) 오후 6시",
            "onSale": true,
            "isExclusive": true,
            "id":4
        },
        {
            "posterImg": "https://ticketimage.interpark.com/Play/image/large/24/24016997_p.gif",
            "showTitle": "MC스나이퍼 - Back To The Oldschool 3",
            "showLocation": "홍대 무신사 개러지",
            "showDate": "2024년 11월 22일(금) 오후 6시",
            "onSale": false,
            "isExclusive": false,
            "id":5
        },
        {
            "posterImg": "https://ticketimage.interpark.com/Play/image/large/24/24016997_p.gif",
            "showTitle": "MC스나이퍼 - Back To The Oldschool 3",
            "showLocation": "홍대 무신사 개러지",
            "showDate": "2024년 11월 22일(금) 오후 6시",
            "onSale": true,
            "isExclusive": true,
            "id":6
        },
        {
            "posterImg": "https://ticketimage.interpark.com/Play/image/large/24/24016997_p.gif",
            "showTitle": "MC스나이퍼 - Back To The Oldschool 3",
            "showLocation": "홍대 무신사 개러지",
            "showDate": "2024년 11월 22일(금) 오후 6시",
            "onSale": true,
            "isExclusive": true,
            "id":7
        },
        {
            "posterImg": "https://ticketimage.interpark.com/Play/image/large/24/24016997_p.gif",
            "showTitle": "MC스나이퍼 - Back To The Oldschool 3",
            "showLocation": "홍대 무신사 개러지",
            "showDate": "2024년 11월 22일(금) 오후 6시",
            "onSale": true,
            "isExclusive": true,
            "id":8
        },
        {
            "posterImg": "https://ticketimage.interpark.com/Play/image/large/24/24016997_p.gif",
            "showTitle": "MC스나이퍼 - Back To The Oldschool 3",
            "showLocation": "홍대 무신사 개러지",
            "showDate": "2024년 11월 22일(금) 오후 6시",
            "onSale": true,
            "isExclusive": true,
            "id":9
        },
    ]

    const currPage=searchParams.get("currPage")?searchParams.get("currPage"):"1";
    const queryText=searchParams.get("query")?searchParams.get("query"):"";

    return (
        <>
            <SearchRstTop query={queryText} />
            <SearchRstMain totalRst={totalRst} data={data} />
            <div id={"pagination"}>
                <div></div>
                {totalPage>1?<Pagination totalPage={totalPage} currentPage={currPage} />:<></>}
                <div></div>
            </div>
        </>
    );
}

export default SearchRst;
