import React, {useEffect, useState} from "react";

import "../css/join.css"
import joinFinTitle from "../img/join1.png"
import optionalAgree from "../img/join2.png"
import agree_y from "../img/agree_y.png"
import agree_n from "../img/agree_n.png"
import {useSearchParams} from "react-router-dom";
import {isBoolean} from "node:util";

function JoinCongratuation(props: { [key: string]: string|null }) {

    const [searchParams, setSearchParams] = useSearchParams();
    const [name, setName] = useState("");

    const agreeYN=searchParams.get("agree");

    const goHome = () => {
        window.location.href="/";
    }
    const login = () => {
        const loginBtn = window.document.getElementById("loginBtn")
        if(loginBtn) loginBtn.click()
    }

    useEffect(() => {
        setName("테스트")
    }, []);

    return (
        <div id={"joinCongratuation"}>
            <span id={"joiner"}>{name}</span>
            <img id={"joinFinTitle"} src={joinFinTitle} />
            <img id={"optionalAgree"} src={optionalAgree} /><br/>
            {agreeYN=="true" ? <img className={"optionalAgreeYN"} src={agree_y}/> : <img className={"optionalAgreeYN"} src={agree_n}/>}
            <div>
                <button className={"btn btn-primary"} style={{margin:"30px 15px"}} onClick={login} >로그인하기</button>
                <button className={"btn btn-primary"} style={{margin:"30px 15px"}} onClick={goHome} >홈으로 돌아가기</button>
            </div>
        </div>
    )
        ;
}

export default JoinCongratuation;

