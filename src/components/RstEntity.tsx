import React from "react";
import "../css/rstPage.css";
import {useNavigate} from "react-router-dom";

function RstEntity(props:{[key:string]:string|number|boolean|undefined}) {

    const navigate = useNavigate();

    const move= (i: string | number | boolean | undefined)=>{
        navigate("/"+i?.toString());
    }

    return (
        <div>
            <div className="card rstSimpleContainer" >
                <img src={props.posterImg?.toString()} alt={"Poster"} className="card-img-top posterImg" onClick={()=>{move(props._link)}} />
                <div className="card-body">
                    <div className={"showTitle"} onClick={()=>{move(props._link)}} >{props.showTitle}</div>
                    <div className={"showLocation"}>{props.showLocation}</div>
                    <div className={"showDate"}>{props.showDate}</div>
                    {props.onSale ? <span className="badge text-bg-primary">판매중</span> : <></>}
                    {props.isExclusive ? <span className="badge text-bg-danger">단독판매</span> : <></>}
                </div>
            </div>
            {/*<img src={props.posterImg} alt={"Poster"}/>*/}
            {/*<div className={"showTitle"}>{props.showTitle}</div>*/}
            {/*<div className={"showLocation"}>{props.showLocation}</div>*/}
            {/*<div className={"showDate"}>{props.showDate}</div>*/}
            {/*<span className="badge text-bg-primary">판매중</span>*/}
            {/*<span className="badge text-bg-danger">단독판매</span>*/}
        </div>
    );
}

export default RstEntity;
