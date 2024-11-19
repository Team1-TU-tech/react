import {useState} from "react";


const useInput=(initValue:string)=>{
    const [value, setValue]=useState(initValue);

    const onChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault();
        setValue(e.target.value);
        console.log(e.target.value)
    }

    return {value,onChange,setValue};
}


export {useInput}