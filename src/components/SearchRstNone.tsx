import React from "react";
import "../css/rstPage.css";

import SearchRstTop from "./SearchRstTop";
import {useSearchParams} from "react-router-dom";
import Pagination from "./Pagination";

function SearchRstNone() {

    //const params = useParams();
    const [searchParams, setSearchParams] = useSearchParams();

    const currPage=searchParams.get("currPage")?searchParams.get("currPage"):"1";
    const queryText=searchParams.get("query")?searchParams.get("query"):"";

    const rstNum = 0

    const totalPage=Math.ceil(rstNum / 50)


    return (
        <>
            <SearchRstTop query={queryText}/>
            {/*<SearchRstMain rstNum={rstNum} data={data} />       여기에 추후 추천 데이터 뿌리기*/}
            <div id={"rstMain"}>
                <div id={"rstNum"}>티켓 ({rstNum})</div>
                <div className={""}> 검색하신 "{queryText}"에 대한 티켓이 존재하지 않습니다.</div>
                <div className={""}> 이런 공연은 어떠세요</div>
                <div id={"rstRoot"}>

                    {/*{*/}
                    {/*    partitionData.map((d, i) => {*/}
                    {/*        /*********************************/}
                    {/*         {*/}
                    {/*         "posterImg": "https://ticketimage.interpark.com/Play/image/large/24/24016997_p.gif",*/}
                    {/*         "showTitle": "MC스나이퍼 - Back To The Oldschool 3",*/}
                    {/*         "showLocation": "홍대 무신사 개러지",*/}
                    {/*         "showDate": "2024년 11월 22일(금) 오후 6시",*/}
                    {/*         "onSale": true,*/}
                    {/*         "isExclusive": true*/}
                    {/*         "id": 1*/}
                    {/*         }*/}
                    {/*         ************************************/}
                    {/*        return <RstEntity*/}
                    {/*            posterImg={d["posterImg"]}*/}
                    {/*            showTitle={d["showTitle"]}*/}
                    {/*            showLocation={d["showLocation"]}*/}
                    {/*            showDate={d["showDate"]}*/}
                    {/*            onSale={d["onSale"]}*/}
                    {/*            isExclusive={d["isExclusive"]}*/}
                    {/*            _link={d["id"]}*/}
                    {/*        />*/}
                    {/*    })*/}
                    {/*}*/}
                </div>
            </div>
            <div id={"pagination"}>
                <div></div>
                {totalPage > 1 ? <Pagination totalPage={totalPage} currentPage={currPage}/> : <></>}
                <div></div>
            </div>
        </>
    );
}

export default SearchRstNone;
