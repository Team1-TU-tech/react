import React, {useState} from "react";
// @ts-ignore
import {HmacSHA256} from "crypto-js";

const useInput=(initValue:string)=>{
    const [value, setValue]=useState(initValue);

    const onChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault();
        setValue(e.target.value);
        // console.log(e.target.value)
    }

    return {value,onChange,setValue};
}

const encSHA256=(data:string)=>{
    return HmacSHA256(data,"encore-team1").toString();
}

const pwEncode=(data:string)=>{
    return btoa(escape(encodeURIComponent(encSHA256(data))));
}


const verify=(type:string, target:string)=>{

    switch(type){
        case "id":
            // const pattern1 = /^(?:[0-9])*?(?:[A-z])+?(?:[0-9A-z])*?$/
            const pattern1 = /^(?=.*[a-zA-Z])[0-9a-zA-Z]{4,15}$/
            return pattern1.test(target)
        case "pw":
            /* const pattern2 =/^(?:[0-9])+?(?:[A-z])+?(?:[!@#$%&])+?(?:[0-9A-z!@#$%&])*?$/ */
            const pattern2 =/^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%&])[0-9a-zA-Z!@#$%&]{8,20}$/   // https://yoorijoriview.tistory.com/321
            return pattern2.test(target)
        case "nm":
            /* const pattern2 =/^(?:[0-9])+?(?:[A-z])+?(?:[!@#$%&])+?(?:[0-9A-z!@#$%&])*?$/ */
            const pattern3 =/^[ㄱ-힇]{1,5}$/
            return pattern3.test(target)
        case "pn":
            /* const pattern2 =/^(?:[0-9])+?(?:[A-z])+?(?:[!@#$%&])+?(?:[0-9A-z!@#$%&])*?$/ */
            const pattern4 =/^[0-9]{0,11}?$/
            return pattern4.test(target)
        default:
            return null
    }
}




const locaCode:{[key:string]:string} = {
    "0" : "전국",
    "1" : "서울",
    "2" : "수도권",
    "3" : "경상",
    "4" : "전라",
    "5" : "강원",
    "6" : "충청",
    "7" : "제주"
}
const locaCodeRev:{[key:string]:string} = {
    "전국" : "0",
    "서울" : "1",
    "수도권" : "2",
    "경상" : "3",
    "전라" : "4",
    "강원" : "5",
    "충청" : "6",
    "제주" : "7"
}
const ticketHost:{[key:string]:string} = {
    "1" : "인터파크 티켓",
    "2" : "예스24 티켓",
    "3" : "3",
}

const mkLoadingPage=()=>{

    const root = document.getElementById("root") as HTMLDivElement;
    const div = document.createElement("div")
    div.id="loadingPage"
    div.style.position = "fixed"
    div.style.top = "0"
    div.style.left = "0"
    div.style.height = "100%"
    div.style.width = "100%"
    div.style.backgroundColor = "#FFFFFF"
    div.style.textAlign = "center"
    div.style.zIndex="9999"

    const img = document.createElement("img")
    img.src="/img/loading.gif"
    img.style.position="fixed"
    img.style.top = "25vh"
    img.style.left = "15vw"
    img.style.width="70vw"
    img.style.zIndex="9999"

    div.appendChild(img)
    root.appendChild(div)

    setTimeout(()=>{
        removeLoadingPage()
    },1000)
}


const removeLoadingPage=()=>{

    const root = document.getElementById("root") as HTMLDivElement;
    const loadingPage = document.getElementById("loadingPage") as HTMLDivElement;

    root.removeChild(loadingPage);
}


function saveSession(key:string, data:string) {
    sessionStorage.setItem(key, data);
}
function loadSession(key:string) {
    return sessionStorage.getItem(key);
}
function removeSession(key:string) {
    return sessionStorage.removeItem(key);
}

export {useInput, pwEncode, verify, mkLoadingPage, removeLoadingPage, saveSession, loadSession, removeSession}
export {locaCode, locaCodeRev, ticketHost}