import React, {useEffect} from "react";
import {useSearchParams} from "react-router-dom";
import {loadSession, saveSession} from "../../scripts/common";

function LoginCallback() {

    const [searchParams, setSearchParams] = useSearchParams();
    const code=searchParams.get("code")

    if(!code){
        setTimeout(()=>{
            window.location.href="http://localhost:3000"
        },3000)
    }

    const login=async ()=>{
        await fetch("http://localhost:8000/getToken?code="+code,{
            method: "GET"
        })
            .then(res=> res.json())
            .then((json) => {
                saveSession("kakaoToken", json["access_token"]);
                saveSession("loginYN", "Y");
            })
            .then(()=>{
                if(loadSession("token")!=="") window.location.href="/";
            })
            .catch(err => console.log(err) );
    }

    useEffect(() => {
        login()
    },[code])

    return code?
        <div style={{textAlign:"center", height:"calc(100vh - 125px - 145px)"}}>
            <img src={"/img/loading.gif"} alt="loading" id={"loading"} style={{zIndex: 9999, width: "70%"}} />
            {/*position:"absolute"  "z-index:10;position:absolute;top: 25vh;left: 15vw;right:0;bottom:0;width: 70vw;"*/}
            <h3>카카오 로그인이 진행중입니다.</h3>
            <h3>잠시만 기다려주세요.</h3>
        </div> :
        <>
            <h3>코드가 존재하지 않습니다.</h3>
            <div>3초 후 초기페이지로 돌아갑니다.</div>
        </>;
}

export default LoginCallback;
