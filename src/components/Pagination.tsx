import React from "react";
import {useNavigate, useParams} from "react-router-dom";

import "../css/header.css";


function GoFirst():JSX.Element {
    const navigate = useNavigate()
    const params = useParams()

    const move=()=>{
        navigate(1)
    }
    console.log(params)
    console.log(params.queryText)
    console.log(params.page)

    return (<li className="page-item">
        <a className="page-link" href={params.queryText+"/1"} aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
        </a>
    </li>);
}

function GoLast(props: { [key: string]: string | number | undefined }):JSX.Element {
    return (<li className="page-item">
        <a className="page-link" href={"./"+props.totalPage?.toString()} aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
        </a>
    </li>);
}


function Pagination(props: { [key: string]: string | number | undefined }) {

    const navigate = useNavigate()
    const param = useParams()

    // if (props.totalPage){
    //     let data;
    //     for(let i=1;i<props.totalPage+1;i++){
    //
    //     }
    // }

    // const createEntry=(value:string)=> {
    //
    //     const li = document.createElement("li")
    //     const a = document.createElement("a")
    //
    //     li.classList.add("page-item")
    //     a.classList.add("page-link")
    //     a.href = "#"
    //     a.innerText=value
    //
    //     li.appendChild(a)
    //
    //     return li
    // }
    //
    // if (totalPage>1){
    //     const naviRoot:HTMLElement|null = document.getElementById("naviRoot");
    //
    //     if (naviRoot){
    //         naviRoot.append(createEntry("Prev"))
    //         for(let i=1;i<=totalPage;i++){
    //             naviRoot.append(createEntry(i.toString()))
    //         }
    //         naviRoot.append(createEntry("Next"))
    //     }
    // }

    return (
        <>
            <nav aria-label="Page navigation">
                <ul className="pagination" id={"naviRoot"}>
                    {props.totalPage!==undefined&&props.totalPage>10?<GoFirst />:<></> }
                    <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                    {props.totalPage!==undefined&&props.totalPage>10?<GoLast totalPage={props.totalPage} />:<></> }
                </ul>
            </nav>
        </>
    );
}
export default Pagination;

