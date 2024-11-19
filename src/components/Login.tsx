import React from "react";
import "../css/App.css";
import kakaoLogin from "../img/kakao_login_medium_narrow.png"
import {useInput} from "../scripts/common";

function Login() {

    const id=useInput("")
    const pw=useInput("")


    return (
        <>
            <div data-bs-toggle="modal" data-bs-target="#exampleModal">
                로그인
            </div>

            <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">로그인</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingInput"
                                       {...id} placeholder="ID" />
                                <label htmlFor="floatingInput">아이디</label>
                            </div>
                            <div className="form-floating">
                                <input type="password" className="form-control" id="floatingPassword"
                                       placeholder="Password" {...pw} />
                                <label htmlFor="floatingPassword">비밀번호</label>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">로그인</button>
                            <img src={kakaoLogin}/>
                            <button type="button" className="btn btn-primary">회원가입</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;



