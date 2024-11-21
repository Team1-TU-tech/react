import React from "react";
import {useNavigate} from "react-router-dom"

import "../css/App.css";
import kakaoLogin from "../img/kakao_login_medium_narrow.png"
import {useInput} from "../scripts/common";

function Login() {

    const id=useInput("")
    const pw=useInput("")

    const navigate = useNavigate()

    const login=()=>{
        const form:HTMLFormElement|null = document.getElementsByTagName("form")[0];
        form.method="post"
        form.action="http://127.0.0.1:8000/login"
        form.data={pw}
    }

    const kakao=()=>{
        alert("kakao")
    }

    const join=()=>{
        const btn_close:HTMLElement|null = document.getElementById("btn-close")
        if (btn_close) btn_close.click()
        navigate("/join")
    }


    return (
        <>
            <div data-bs-toggle="modal" data-bs-target="#loginModal">
                로그인
            </div>

            <div className="modal fade" id="loginModal" aria-labelledby="loginModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="loginModalLabel">로그인</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close" id={"btn-close"}></button>
                        </div>
                        <form>
                            <div className="modal-body">
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingInput"
                                           {...id} placeholder="ID" required minLength={4} maxLength={15} />
                                    <label htmlFor="floatingInput">아이디</label>
                                </div>
                                <div className="form-floating">
                                    <input type="password" className="form-control" id="floatingPassword"
                                           placeholder="Password" {...pw} required minLength={8} maxLength={20} />
                                    <label htmlFor="floatingPassword">비밀번호</label>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary" onClick={login}>로그인</button>
                                <img src={kakaoLogin} alt={"kakao login btn"} onClick={kakao}/>
                                <button type="button" className="btn btn-primary" onClick={join}>회원가입</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;



