import React from "react";
import {useNavigate} from "react-router-dom";

import "../css/header.css";
import Login from "./Login";
import logo from "../img/TicketMoa-logo.png"

function Header() {

    const navigate = useNavigate()

    const join=()=>{
        navigate("/join")
    }

    const index=()=>{
        navigate("/")
        window.location.reload();
    }

    const logout=()=>{
        fetch("http://localhost:8000/logout", {
            method:"POST"
        })
            .then(response=> response.json())
            .then(json=> console.log(json))
            .catch(err=>console.log(err))
    }
    
    const topMenu=(cat:string)=>{
        navigate("/search?query="+encodeURIComponent(cat)+"&currPage=1")
        window.location.reload()
    }

    return (
        <div id={"header"}>
            <div className={"headerComponents"} id={"headerTop"}>
                {/*<div>*/}
                <img src={logo} alt="Logo" onClick={index} id="logo" className={"headerTopBtn"} />
                {/*</div>*/}
                {/*<Link to={"/join"}>회원가입</Link>*/}
                {/*<div onClick={join}className={"headerTopBtn"} >회원가입</div>*/}
                <div onClick={join} className={"headerTopBtn"} id={"joinBtn"}></div>
                {/*<img src={joinBtn}>*/}
                {true ? <Login/> : <div onClick={logout} className={"headerTopBtn"} >로그아웃</div>}
            </div>
            <div className={"headerComponents"} id={"headerBot"}>
                <div className={"headerBotBtn"} onClick={()=>{topMenu("콘서트")}} id={"concertBtn"} ></div>
                <div className={"headerBotBtn"} onClick={()=>{topMenu("뮤지컬/연극")}} id={"musicalBtn"} ></div>
                <div className={"headerBotBtn"} onClick={()=>{topMenu("전시/행사")}} id={"exhibitBtn"} ></div>
                <div> </div>
            </div>
        </div>
    );
}

export default Header;
