import React from "react";
import {useNavigate} from "react-router-dom";


function Admin() {

    const navigate = useNavigate();

    return (
        <div id="adminContainer">
            <h1>Admin</h1>
            <button className={"btn btn-warning"} onClick={()=>{navigate(-1)}} >뒤로가기🔙 </button>
        </div>
    );
}

export default Admin;
