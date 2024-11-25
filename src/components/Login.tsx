import React from "react";
import {useNavigate} from "react-router-dom"

import "../css/login.css";
import kakaoLogin from "../img/kakao_login_medium_narrow.png"
import {useInput, encSHA256} from "../scripts/common";

function Login() {

    const navigate = useNavigate()

    const id=useInput("")
    const pw=useInput("")


    const loginLogic=()=>{

        fetch("http://localhost:8000/login", {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({id:id.value, pw:encSHA256(pw.value)})
        })
            .then(response=> console.log(response))
            .catch(err=>console.error(err))
    }


    // const onSubmit=(e:SubmitEvent)=>{
    //     e.preventDefault()
    //     alert(id.value+pw.value)
    // }

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
            <div data-bs-toggle="modal" data-bs-target="#loginModal" className={"headerTopBtn"}>
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
                            <div className="modal-body" id={"loginForm"}>
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
                            <div className="modal-footer" id={"login-footer"}>
                                {/*<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>*/}
                                <button type="submit" className="btn btn-primary" onClick={loginLogic} >로그인</button>
                                <img src={kakaoLogin} alt={"kakaoLoginBtn"} id={"kakaoLoginBtn"} onClick={kakao}/>
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



