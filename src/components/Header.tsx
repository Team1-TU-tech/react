import React from "react";
import {useNavigate} from "react-router-dom";

import "../css/header.css";
import Login from "./Login";
import logo from "../img/TicketMoa-logo.png"
import {useInput} from "../scripts/common";

function Header() {

    const navigate = useNavigate()

    const join=()=>{
        navigate("/join")
    }

    const index=()=>{
        navigate("/")
    }

    const logout=()=>{
        fetch("http://localhost:8000/logout", {
            method:"POST"
        })
            .then(resp=>console.log(resp))
            .catch(err=>console.log(err))
    }
    
    const topMenu=(cat:string)=>{
        navigate("/search/"+encodeURIComponent(cat))
    }

    return (
        <div id={"header"}>
            <div className={"headerComponents"} id={"headerTop"}>
                {/*<div>*/}
                <img src={logo} alt="Logo" onClick={index} id="logo" className={"headerTopBtn"} />
                {/*</div>*/}
                {/*<Link to={"/join"}>회원가입</Link>*/}
                <div onClick={join}className={"headerTopBtn"} >회원가입</div>
                {true ? <Login/> : <div onClick={logout} className={"headerTopBtn"} >로그아웃</div>}
            </div>
            <div className={"headerComponents"} id={"headerBot"}>
                <div className={"headerBotBtn"} onClick={()=>{topMenu("콘서트")}} >콘서트</div>
                <div className={"headerBotBtn"} onClick={()=>{topMenu("뮤지컬/연극")}} >뮤지컬/연극</div>
                <div className={"headerBotBtn"} onClick={()=>{topMenu("전시/행사")}} >전시/행사</div>
                <div> </div>
            </div>
        </div>
    );
}

export default Header;
