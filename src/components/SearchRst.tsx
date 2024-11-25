import React from "react";
import "../css/header.css";
import SearchRstTop from "./SearchRstTop";
import SearchRstMain from "./SearchRstMain";
import {useParams} from "react-router-dom";
import Pagination from "./Pagination";

function SearchRst() {

    const params = useParams();

    const totalPage=Math.ceil(507 / 50)

    return (
        <>
            <SearchRstTop query={params.queryText} />
            <SearchRstMain />
            {totalPage>1?<Pagination totalPage={totalPage} currentPage={params.page} />:<></>}
        </>
);
}

export default SearchRst;
