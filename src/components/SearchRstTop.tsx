import React, {useEffect} from "react";
import "../css/rstPage.css";
import SearchBar from "./SearchBar";
import {useSearchParams} from "react-router-dom";

function SearchRstTop(props:{"query":string|null}) {

    //const params = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const queryLoca=searchParams.get("region")
    const category=searchParams.get("category")
    const startDate=searchParams.get("start_date")
    const endDate=searchParams.get("end_date")

    let query
    if(props.query){
        query=props.query;
    } else if(category!==""){
        query=category;
    } else if(startDate!=="" && startDate!==null && endDate!==null) {
        query=startDate.split(".").join("-")+"~"+endDate.split(".").join("-");
    } else if(queryLoca!=="" && queryLoca!== null){
        query=queryLoca

    } else {
        query="전체"
    }

    useEffect(()=>{

    },[searchParams]);

    return (
        <div id={"searchRstTop"}>
            {/*<div id={"searchRstTopTitle"}> "{props.query}"에 대한 검색결과입니다. </div>*/}
            <div id={"searchRstTopTitle"}> "{query}"에 대한 검색결과입니다. </div>
            <SearchBar queryText={searchParams.get("query")}/>
        </div>
    );
}

export default SearchRstTop;
