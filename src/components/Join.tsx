import React, {useRef, useState} from "react";
import "../css/join.css";
import {encSHA256, useInput, verify} from "../scripts/common";
import AgreeModal from "./AgreeModal";


function Join() {

    //const username=useInput("")
    const nameRef = useRef<HTMLInputElement>(null);
    // const id=useInput("")
    const idRef= useRef<HTMLInputElement>(null);
    //const [helpMsg,setHelpMsg]=useState("")
    const helpMsgRef=useRef<HTMLDivElement>(null);
    const [helpMsgPW,setHelpMsgPW]=useState("")
    // const pw=useInput("")
    // const pwChk=useInput("")
    const pwRef = useRef<HTMLInputElement>(null);
    const pwChkRef = useRef<HTMLInputElement>(null);

    //const email=useInput("")
    const emailRef= useRef<HTMLInputElement>(null);
    //const phoneNumber=useInput("")
    const phoneNumberRef= useRef<HTMLInputElement>(null);

    const [agreeAll, setAgreeAll]=useState(false)
    const [agreeAge, setAgreeAge]=useState(false)
    const [agreeTerms, setAgreeTerms]=useState(false)
    const [agreePersonal, setAgreePersonal]=useState(false)
    const [agreeMarketing, setAgreeMarketing]=useState(false)


    const [toggle,setToggle]=useState(false)        /** 추후 없어질 데이터 이므로 리팩토링 제외 **/

    const idDuplChk=()=>{
        // if (id.value.length<4){
        if (idRef.current!==null && idRef.current.value.length<4){
            //setHelpMsg("아이디는 4자 이상이어야 합니다.")
            if(helpMsgRef.current!==null) helpMsgRef.current.innerHTML= "아이디는 4자 이상이어야 합니다."
        } else {
            // 대충 체크해서 true false 반환 지금은 없으니까 그냥 전환으로 구현
            if (toggle){
                setToggle(!toggle)
                //setHelpMsg("이미 사용중인 아이디입니다.")
                if(helpMsgRef.current!==null) helpMsgRef.current.innerHTML= "이미 사용중인 아이디입니다."
            } else {
                setToggle(!toggle)
                //setHelpMsg("사용 가능한 아이디입니다.")
                if(helpMsgRef.current!==null) helpMsgRef.current.innerHTML= "사용 가능한 아이디입니다."
            }
        }
    }

    const pwCompare=(e:React.KeyboardEvent<HTMLInputElement>)=>{
        //pw.value===pwChk.value?setHelpMsgPW("설정한 비밀번호가 일치합니다."):setHelpMsgPW("설정한 비밀번호가 일치하지 않습니다.")
        if(pwRef.current!==null && pwChkRef.current!==null) pwRef.current.value===pwChkRef.current.value?setHelpMsgPW("설정한 비밀번호가 일치합니다."):setHelpMsgPW("설정한 비밀번호가 일치하지 않습니다.")
    }

    const toggle_agree_all=()=>{
        setAgreeAll(!agreeAll)
        setAgreeAge(!agreeAll)
        setAgreeTerms(!agreeAll)
        setAgreePersonal(!agreeAll)
        setAgreeMarketing(!agreeAll)
    }
    const toggle_agree_age=()=>{
        setAgreeAge(!agreeAge)
    }
    const toggle_agree_terms=()=>{
        setAgreeTerms(!agreeTerms)
    }
    const toggle_agree_personal=()=>{
        setAgreePersonal(!agreePersonal)
    }
    const toggle_agree_marketing=()=>{
        setAgreeMarketing(!agreeMarketing)
    }

    const submit=()=>{
        fetch("http://localhost:8000/join", {
            method:"POST",
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify({
                //username:username.value,
                username:nameRef.current?nameRef.current.value:"",
                id:idRef.current?idRef.current.value:"",
                pw:pwRef.current?encSHA256(pwRef.current.value):"",
                email:emailRef.current?emailRef.current.value:"",
                phoneNumber:phoneNumberRef.current?phoneNumberRef.current.value:"",
            })
        }).then((response:Response) => {
            return response.json()
        }).then((json)=>{
            if(json){
                window.location.href="/";
            }
        })
    }

    const submitChk=(e:React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault()

        //if(!verify("nm",username.value)){
        if(nameRef.current!==null && !verify("nm",nameRef.current.value)){
            alert("이름을 입력해주세요.")
            //const username=document.getElementById("username")
            // if(username){
            //     setTimeout(()=>{
            //         username.focus();
            //     }, 100);
            //     return;
            // }
            setTimeout(()=>{
                if(nameRef.current!==null) nameRef.current.focus()
            }, 100);
            //nameRef.current.focus()
            return
        }

        if(toggle){
            if (idRef.current!==null && verify("id", idRef.current.value)){
                if (pwRef.current!==null && verify("pw", pwRef.current.value)){
                    if (pwChkRef.current!==null && pwRef.current.value===pwChkRef.current.value){
                        if (agreeAge.valueOf() &&  agreeTerms.valueOf() && agreePersonal.valueOf()){
                            submit()
                        } else {
                            alert("서비스 이용에 동의해주세요")
                        }
                    } else {
                        //const inputPwChk:HTMLElement|null = document.getElementById("inputPassword2")
                        // if(inputPwChk){
                        //     alert("비밀번호와 비밀번호 확인을 일치하지 않습니다.")
                        //     setTimeout(()=>{
                        //         inputPwChk.focus();
                        //     }, 100);
                        //     return;
                        // }
                        alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.")
                        setTimeout(()=>{
                            if(pwChkRef.current) pwChkRef.current.focus()
                        }, 100);
                        return
                    }
                } else {
                    // const inputPw:HTMLElement|null = document.getElementById("inputPassword1")
                    // if(inputPw){
                    //     alert("비밀번호는 영문, 숫자, 특수문자를 조합하여 8~20자리로 입력해야 합니다.")
                    //     setTimeout(()=>{
                    //         inputPw.focus();
                    //     }, 100);
                    //     return;
                    // }
                    alert("비밀번호는 영문, 숫자, 특수문자를 조합하여 8~20자리로 입력해야 합니다.")
                    setTimeout(()=>{
                        if(pwRef.current) pwRef.current.focus()
                    }, 100);
                    return
                }
            } else {
                // const inputId:HTMLElement|null = document.getElementById("inputId")
                // if(inputId){
                //     alert("아이디는 영문, 숫자를 조합하여 4~15자리로 입력해야 합니다.")
                //     setTimeout(()=>{  /* https://aljjabaegi.tistory.com/575 */
                //         inputId.focus();
                //     }, 100);
                //     return;
                //}
                alert("아이디는 영문, 숫자를 조합하여 4~15자리로 입력해야 합니다.")
                setTimeout(()=>{
                    if(idRef.current) idRef.current.focus()
                }, 100);
                return
            }
        } else {
            // const inputId:HTMLElement|null = document.getElementById("inputId")
            // if(inputId){
            //     alert("입력하신 아이디가 이미 존재합니다.")
            //     setTimeout(()=>{
            //         inputId.focus();
            //     }, 100);
            //     return;
            // }
            alert("입력하신 아이디가 이미 존재합니다.")
            setTimeout(()=>{
                if(idRef.current) idRef.current.focus()
            }, 100);
            return
        }
    }

    const phoneChk=()=>{
        const phone= phoneNumberRef.current?phoneNumberRef.current.value:""
        if(phoneNumberRef.current!==null && !verify("pn",phone)){
            phoneNumberRef.current.value=phoneNumberRef.current.value.substring(0,phoneNumberRef.current.value.length-1);
        }
    }

    alert("re render")

    return (
        <>
            <hr/>
            <h2>회원가입</h2>
            <hr/>
            <form>
                <h5>필수정보</h5>
                <hr/>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">이름</label>
                    {/*<input type="text" className="form-control" id="username" {...username} placeholder={"이름을 입력해주세요"} maxLength={5}/>*/}
                    <input type="text" className="form-control" id="username" ref={nameRef} placeholder={"이름을 입력해주세요"} maxLength={5}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputId" className="form-label">아이디</label>
                    {/*<input type="text" className="form-control" id="inputId" aria-describedby="idHelp" {...id} placeholder={"4~15자리 영문, 숫자로 입력해주세요"} onKeyUp={idDuplChk} minLength={4} maxLength={15}/>*/}
                    <input type="text" className="form-control" id="inputId" aria-describedby="idHelp" ref={idRef} placeholder={"4~15자리 영문, 숫자로 입력해주세요"} onKeyUp={idDuplChk} minLength={4} maxLength={15}/>
                    {/*<div id="idHelp" className="form-text">{helpMsg}</div>*/}
                    <div id="idHelp" className="form-text" ref={helpMsgRef}></div>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputPassword1" className="form-label">비밀번호</label>
                    {/*<input type="password" className="form-control" id="inputPassword1" {...pw} placeholder={"8~20자리 영문, 숫자, 특수문자(!@#$%&)로 입력해주세요"} minLength={8} maxLength={20}/>*/}
                    <input type="password" className="form-control" id="inputPassword1" ref={pwRef} placeholder={"8~20자리 영문, 숫자, 특수문자(!@#$%&)로 입력해주세요"} minLength={8} maxLength={20}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputPassword2" className="form-label">비밀번호 확인</label>
                    {/*<input type="password" className="form-control" id="inputPassword2" {...pwChk} onKeyUp={pwCompare} placeholder={"비밀번호를 한번 더 입력해주세요"} minLength={8} maxLength={20}/>*/}
                    <input type="password" className="form-control" id="inputPassword2" ref={pwChkRef} onKeyUp={pwCompare} placeholder={"비밀번호를 한번 더 입력해주세요"} minLength={8} maxLength={20}/>
                    <div id="pwHelp" className="form-text">{helpMsgPW}</div>
                </div>
                <br/>
                <h5>선택정보</h5>
                <hr/>
                <div className="mb-3">
                    <label htmlFor="emailInput" className="form-label">이메일</label>
                    {/*<input type="email" className="form-control" id="emailInput" placeholder="이메일 주소를 입력해주세요" {...email} />*/}
                    <input type="email" className="form-control" id="emailInput" placeholder="이메일 주소를 입력해주세요" ref={emailRef} />
                </div>
                <div className="mb-3">
                    <label htmlFor="phoneInput" className="form-label">휴대전화</label>
                    {/*<input type="number" className="form-control" id="phoneInput" placeholder="- 없이 숫자만 입력해주세요" {...phoneNumber} maxLength={11}/>*/}
                    <input type="text" className="form-control" id="phoneInput" placeholder="- 없이 숫자만 입력해주세요" maxLength={11} ref={phoneNumberRef} onChange={phoneChk} />
                </div>
                <br/>
                <h5>서비스 정책</h5>
                <div className="mb-3 form-check">
                    <label className="form-check-label" htmlFor="agree_all">전체동의</label>
                    <input type="checkbox" className="form-check-input" id="agree_all" checked={agreeAll}
                           onChange={toggle_agree_all}/>
                </div>
                <hr/>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="agree_age" checked={agreeAge}
                           onChange={toggle_agree_age}/>
                    <label className="form-check-label" htmlFor="agree_age">만 14세 이상입니다. (필수)</label>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="agree_terms" checked={agreeTerms}
                           onChange={toggle_agree_terms}/>
                    <label className="form-check-label" htmlFor="agree_terms">서비스 이용약관 동의 (필수)</label>
                    <AgreeModal tagId="terms" title={"서비스 이용약관 동의 (필수)"} body={"서비스 이용약관 동의 (필수)"}/>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="agree_personal" checked={agreePersonal}
                           onChange={toggle_agree_personal}/>
                    <label className="form-check-label" htmlFor="agree_personal">개인정보 수집 및 이용 동의 (필수)</label>
                    <AgreeModal tagId="personal" title={"개인정보 수집 및 이용 동의 (필수)"} body={"개인정보 수집 및 이용 동의 (필수)"}/>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="agree_marketing" checked={agreeMarketing}
                           onChange={toggle_agree_marketing}/>
                    <label className="form-check-label" htmlFor="agree_marketing">마케팅 수신 동의 (선택)</label>
                    <AgreeModal tagId="marketing" title={"마케팅 수신 동의 (선택)"} body={"마케팅 수신 동의 (선택)"}/>
                </div>

                <button type="submit" className="btn btn-primary" onClick={submitChk} id={"submitBtn"}>회원가입 완료</button>
            </form>
        </>
    );
}

export default Join;
