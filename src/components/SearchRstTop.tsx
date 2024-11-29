import React, {useEffect} from "react";
import "../css/rstPage.css";
import SearchBar from "./SearchBar";
import {useSearchParams} from "react-router-dom";

function SearchRstTop(props:{"query":string|null}) {

    //const params = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    let query
    if(props.query){
        query=props.query;
    } else if(searchParams.get("startDate")!=="") {
        query=searchParams.get("startDate")+"~"+searchParams.get("endDate");
    } else if(searchParams.get("location")!==""){
        query=searchParams.get("location")
    } else {
        query="전체"
    }

    useEffect(()=>{

    },[searchParams]);

    return (
        <div id={"searchRstTop"}>
            {/*<div id={"searchRstTopTitle"}> "{props.query}"에 대한 검색결과입니다. </div>*/}
            <div id={"searchRstTopTitle"}> {query}에 대한 검색결과입니다. </div>
            <SearchBar queryText={searchParams.get("query")}/>
        </div>
    );
}

export default SearchRstTop;
