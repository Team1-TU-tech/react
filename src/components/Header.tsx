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
    }

    return (
        <div id={"header"}>
            <div className={"headerComponents"} id={"headerTop"}>
                <div>
                    <img src={logo} alt="Logo" style={{height:"50px"}} onClick={index} />
                </div>
                {/*<Link to={"/join"}>회원가입</Link>*/}
                <div onClick={join}>회원가입</div>
                <Login/>
            </div>
            <div className={"headerComponents"} id={"headerBot"}>
                <div>콘서트</div>
                <div>뮤지컬/연극</div>
                <div>전시/행사</div>
                <div> </div>
            </div>


        </div>
    );
}

export default Header;
