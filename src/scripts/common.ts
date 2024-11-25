import {useState} from "react";
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
    return HmacSHA256(data,'enterthegrandline').toString();
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
        default:
            return null
    }
}


export {useInput, encSHA256, verify}