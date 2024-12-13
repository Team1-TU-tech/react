import React, {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";

import SearchRstTop from "./SearchRstTop";
import SearchRstMain from "./SearchRstMain";
import Pagination from "./Pagination";
import WeeklyBest from "./WeeklyBest";
import Loading from "./Loading";

import {loadSession, testData, testFilter} from "../scripts/common";
import "../css/rstPage.css";

function SearchRst() {

    //const params = useParams();
    const [searchParams, setSearchParams] = useSearchParams();

    const currPage=searchParams.get("currPage")?searchParams.get("currPage"):"1";
    const queryText=searchParams.get("keyword")?searchParams.get("keyword"):"";

    const [data,setData]=useState([])
    const [rstNum,setRstNum]=useState(0)
    const [isLoading,setIsLoading]=useState(true)

    const totalPage=Math.ceil(rstNum / 50)

    const loadData=async ()=>{
        await fetch(`http://${process.env.REACT_APP_HOST}:7777/search?`+searchParams.toString(),{
            method:"GET",
            body:JSON.stringify({"token":loadSession("loginToken")})
        })
            .then(response => response.json())
            .then((json)=>{
                //console.log(json)
                console.log(testData(json))             /**** 나중에 지우기 ****/
                const fdata=testFilter(json)
                return fdata
            })
            .then((fdata)=>{
                setData(fdata)
                setRstNum(fdata.length)
                setIsLoading(false)
            })
            .catch(err => {
                console.log(err)
                alert("오류가 발생하였습니다.\n잠시 후 다시 시도해주세요.")
                window.history.back()
            })
    }

    //let data;
    useEffect(()=>{
        loadData()
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
