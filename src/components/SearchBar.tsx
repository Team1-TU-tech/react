import React, {useState} from "react";
import {useSearchParams} from "react-router-dom";  //https://velog.io/@leah1225/React-%EC%BF%BC%EB%A6%AC-%EC%8A%A4%ED%8A%B8%EB%A7%81Query-String

import "../css/searchBar.css";
import {useInput} from "../scripts/common";
import Calendar from "./Calendar";


function SearchBar(props: { [key: string]: string|null }) {

    //const navigate = useNavigate()
    //const params = useParams()
    const [searchParams, setSearchParams] = useSearchParams();
    const [location,setLocation] = useState(0);



    const query=searchParams.get("query")
    const queryText = useInput(query!==null?query:"");
    //alert(startDate.toJSON().split("T")[0])

    const search=()=>{
        //navigate("/search?query="+encodeURIComponent(queryText.value)+"&currPage=1")

        /*@ts-ignore*/
        const startDate=$("#startDate").val()
        /*@ts-ignore*/
        const endDate=$("#endDate").val()




        //return rst
        //window.location.href="/search?query="+encodeURIComponent(queryText.value)+"&currPage=1"
        window.location.href= "/search?query="+encodeURIComponent(queryText.value)+"&startDate="+startDate.split("-").join("")+"&endDate="+endDate.split("-").join("")+"&currPage=1"
        // fetch("http://127.0.0.1:8000/",{
        //     method:"GET",
        //     headers:{
        //         "Content-Type": "application/json",
        //     },
        //     body:JSON.stringify({
        //         query:queryText,
        //         /*@ts-ignore*/
        //         startDate:document.getElementById("startDate").value,
        //         /*@ts-ignore*/
        //         endDate:document.getElementById("endDate").value,
        //         /*@ts-ignore*/
        //         location:document.getElementById("city").value
        //     })
        // }).then((response)=>{
        //     return response.json();
        // }).then(json=>{console.log(json)});

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
                    <select className="form-select" aria-label="City" id={"city"}>
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
                <Calendar placeholder={"시작일"} id={"startDate"} selected={searchParams.get("startDate")}/>
                <Calendar placeholder={"종료일"} id={"endDate"} selected={searchParams.get("endDate")}/>
                <div className={"input-group"}>
                    <input id={"queryText"} type={"text"} {...queryText} />
                    <button className={"btn btn-primary"} onClick={search} id={"searchBtn"}>Search</button>
                </div>
            </div>
        </>
    )
        ;
}

export default SearchBar;

