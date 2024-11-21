import React, {useState} from "react";
import "../css/header.css";
import {useInput} from "../scripts/common";

function Join() {

    const username=useInput("")
    const id=useInput("")
    const [helpmsg,setHelpmsg]=useState("")
    const pw=useInput("")
    const pw_chk=useInput("")

    const email=useInput("")
    const phoneNumber=useInput("")

    const [agreeAll, setAgreeAll]=useState(false)
    const [agreeAge, setAgreeAge]=useState(false)
    const [agreeTerms, setAgreeTerms]=useState(false)
    const [agreePersonal, setAgreePersonal]=useState(false)
    const [agreeMarketing, setAgreeMarketing]=useState(false)


    const [toggle,setToggle]=useState(false)

    const id_chk=(e:React.ChangeEvent<HTMLInputElement>)=>{
        id.onChange(e)

        if (id.value.length<4){
            setHelpmsg("아이디는 4자 이상이어야 합니다.")
        } else {
            // 대충 체크해서 true false 반환 지금은 없으니까 그냥 전환으로 구현
            if (toggle){
                setToggle(!toggle)
                setHelpmsg("이미 사용중인 아이디입니다.")
            } else {
                setToggle(!toggle)
                setHelpmsg("사용 가능한 아이디입니다.")
            }
        }
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


    return (
        <>
            <form>
                <h5>필수정보</h5>
                <hr/>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">이름</label>
                    <input type="text" className="form-control" id="username" {...username} />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputId" className="form-label">아이디</label>
                    <input type="text" className="form-control" id="inputId" aria-describedby="idHelp" {...id}
                           onChange={id_chk}/>
                    <div id="idHelp" className="form-text">{helpmsg}</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputPassword1" className="form-label">비밀번호</label>
                    <input type="password" className="form-control" id="inputPassword1" {...pw} />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputPassword2" className="form-label">비밀번호 확인</label>
                    <input type="password" className="form-control" id="inputPassword2" {...pw_chk} />
                </div>
                <br/>
                <h5>선택정보</h5>
                <hr/>
                <div className="mb-3">
                    <label htmlFor="emailInput" className="form-label">이메일</label>
                    <input type="email" className="form-control" id="emailInput"
                           placeholder="이메일 주소를 입력해주세요" {...email} />
                </div>
                <div className="mb-3">
                    <label htmlFor="phoneInput" className="form-label">휴대전화</label>
                    <input type="text" className="form-control" id="phoneInput"
                           placeholder="- 없이 숫자만 입력해주세요" {...phoneNumber} />
                </div>
                <br/>
                <h5>서비스 정책</h5>
                <div className="mb-3 form-check">
                    <label className="form-check-label" htmlFor="agree_all">전체동의</label>
                    <input type="checkbox" className="form-check-input" id="agree_all" checked={agreeAll} onChange={toggle_agree_all} />
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
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="agree_personal" checked={agreePersonal}
                           onChange={toggle_agree_personal}/>
                    <label className="form-check-label" htmlFor="agree_personal">개인정보 수집 및 이용 동의 (필수)</label>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="agree_marketing" checked={agreeMarketing}
                           onChange={toggle_agree_marketing}/>
                    <label className="form-check-label" htmlFor="agree_marketing">마케팅 수신 동의 (선택)</label>
                </div>

                <button type="submit" className="btn btn-primary">회원가입 완료</button>
            </form>
        </>
    );
}

export default Join;
