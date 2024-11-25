import React, {useEffect} from "react";
import "../css/header.css";
import SearchBar from "./SearchBar";
import {useParams} from "react-router-dom";

function SearchRstTop(props:{"query":string|undefined}) {

    const params = useParams();

    useEffect(()=>{

    },[params]);

    return (
        <>
            <div> "{props.query}"에 대한 검색결과입니다. </div>
            <SearchBar queryText={params.queryText}/>
        </>
    );
}

export default SearchRstTop;
