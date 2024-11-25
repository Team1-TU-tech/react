import React from "react";
import {useNavigate, useParams} from "react-router-dom";

import "../css/searchBar.css";
import {useInput} from "../scripts/common";


function SearchBar(props: { [key: string]: string|undefined }) {

    const navigate = useNavigate()
    const params = useParams()

    const queryText = useInput(params.queryText!==undefined?params.queryText:"");

    const search=()=>{
        navigate("/search/"+encodeURIComponent(queryText.value))
    }

    return (
        <>
            <div id={"searchContainer"} className={"input-group"}>
                <div className={"input-group"} id={"searchLoca"}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#0d6efd"
                         className="bi bi-cursor"
                         viewBox="0 0 16 16"
                    id={"arrowImg"}>
                        <path
                            d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103zM2.25 8.184l3.897 1.67a.5.5 0 0 1 .262.263l1.67 3.897L12.743 3.52z"/>
                    </svg>
                    <select className="form-select" aria-label="City" id={"city"} >
                        <option selected>
                            City
                        </option>
                        <option value="1">서울</option>
                        <option value="2">경기</option>
                        <option value="3">경상</option>
                        <option value="4">전라</option>
                        <option value="5">강원</option>
                        <option value="6">충청</option>
                        <option value="7">제주</option>
                    </select>
                </div>
                <input type={"date"}/>
                <input type={"date"}/>
                <div className={"input-group"}>
                    <input id={"queryText"} type={"text"} {...queryText} />
                    <button className={"btn btn-primary"} onClick={search} >Search</button>
                </div>
            </div>
        </>
    )
        ;
}

export default SearchBar;

