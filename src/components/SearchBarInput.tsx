//https://drakon.tistory.com/72
// rendering 줄이기
import React, {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";  

import "../css/searchBar.css";
import {useInput} from "../scripts/common";


function SearchBarInput(props: { [key: string]: string|null }) {

    const [searchParams, setSearchParams] = useSearchParams();

    const query=searchParams.get("query")
    const queryText = useInput(query!==null?query:"");


    return (
        <>
            <input id={"queryText"} type={"text"} {...queryText} />
        </>
    )
        ;
}

export default SearchBarInput;

