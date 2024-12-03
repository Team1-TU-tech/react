import React, {useRef, useState} from "react";
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

export {useInput, pwEncode, verify}
export {locaCode}