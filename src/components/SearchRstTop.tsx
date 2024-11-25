import React, {useState} from "react";
import "../css/header.css";
import SearchBar from "./SearchBar";

function SearchRstTop(props:{"query":string|undefined}) {


    return (
        <>
            <div> "{props.query}"에 대한 검색결과입니다. </div>
            <SearchBar queryText={props.query}/>
        </>
    );
}

export default SearchRstTop;
