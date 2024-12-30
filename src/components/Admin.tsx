import React from "react";
import {useNavigate} from "react-router-dom";
import Visualize from "./Visualize";


function Admin() {

    const navigate = useNavigate();

    return (
        <div id="adminContainer" style={{textAlign: "center"}}>
            <h1>Dashboard</h1>
            <button className={"btn btn-warning"} onClick={()=>{navigate(-1)}}  style={{position: "relative", left: "30vw", top: "-10px"}} >뒤로가기🔙 </button>
            <div style={{paddingLeft: "170px", height: "800px", position: "relative"}}>
                <Visualize />
            </div>
        </div>
    );
}

export default Admin;
