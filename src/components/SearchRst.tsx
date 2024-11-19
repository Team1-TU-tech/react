import React, {useState} from "react";
import "../css/header.css";
import Login from "./Login";

function SearchRst() {

    const [name, setName] = useState("");


    return (
        <div id={"header"}>
        <div className={"headerComponents"} id={"headerTop"}>
        <div> </div>
        <div>회원가입</div>
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

export default SearchRst;
