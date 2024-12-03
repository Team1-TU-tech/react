import React, {useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";


function DetailPage() {

    const navigate=useNavigate()
    const params = useParams()

    const back=()=>{
        navigate(-1)
    }

    useEffect(() => {

        // fetch("http://localhost:3000/detail/"+params.id,{
        //     method: "GET"
        // })
        //     .then(response => response.json())
        //     .then(json => console.log(json))
        //     .catch(err => console.log(err))

    })

    return (
        <>
            <h1>{params.id}번 데이터</h1>
            <button className={"btn btn-warning"} onClick={back}>뒤로가기</button>
        </>
    )
        ;
}

export default DetailPage;

