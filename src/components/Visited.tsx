import React, {useEffect, useState} from "react";
import {loadSession, setVisited} from "../scripts/common";
import {useNavigate} from "react-router-dom";


function Visited() {

    const navigate = useNavigate();
    const [data, setData] = useState(JSON.parse(loadSession("visited")) as object);
    console.log(data)

    const move= (i: string | number | boolean | undefined)=>{
        navigate("/detail/"+i?.toString());
    }

    return (<div style={{textAlign: "center"}}>
        <h2>방문기록</h2>
        <button className={"btn btn-warning"} onClick={()=>{window.location.href="/"}}
                style={{position: "relative", left: "30vw", top: "-20px"}}>뒤로가기🔙
        </button>
        <div className="visitedContainer">
            {data.length > 0 ? data.reverse().map(i => {
                    return (<div style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 5fr",
                        textAlign: "start",
                        border: "1px solid green",
                        borderRadius: "10px"
                    }} onClick={() => move(i["id"])}>
                        <img src={i["posterUrl"]} alt={"title poster img"} style={{width: '150px', height: '200px'}}/>
                        <div>
                            <div>{i["showTitle"]}</div>
                            <div>{i["showLoca"]}</div>
                            <div>{i["showDate"]}</div>
                        </div>
                    </div>)
                })
                : <div style={{height: "395px", paddingTop: "100px", fontSize: "25px"}}>
                    방문한 기록이 없습니다.
                </div>
            }
        </div>
    </div>);
}

export default Visited;
