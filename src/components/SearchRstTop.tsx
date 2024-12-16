import React, {useEffect} from "react";
import "../css/rstPage.css";
import SearchBar from "./SearchBar";
import {useSearchParams} from "react-router-dom";

function SearchRstTop(props:{"query":string|null}) {

    //const params = useParams();
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(()=>{

    },[searchParams]);

    return (
        <div id={"searchRstTop"}>
            <div id={"searchRstTopTitle"}> "{props.query}"에 대한 검색결과입니다. </div>
            <SearchBar queryText={searchParams.get("query")}/>
        </div>
    );
}

export default SearchRstTop;
