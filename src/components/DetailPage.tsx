import React from "react";
import {useNavigate, useParams} from "react-router-dom";


function DetailPage() {

    const navigate=useNavigate()
    const params = useParams()

    const back=()=>{
        navigate(-1)
    }

    return (
        <>
            <h1>{params.id}번 데이터</h1>
            <button className={"btn btn-warning"} onClick={back}>뒤로가기</button>
        </>
    )
        ;
}

export default DetailPage;

