import React from "react";

function Loading() {

    return (
        <div id={"loadingPage"} style={{position:"fixed", top:0, left:0, height:"100%", width:"100%", backgroundColor:"#fff", textAlign:"center", zIndex:"9999"}}>
            <img src={"/img/loading.gif"} style={{position:"fixed", top:"25vh", left:"15vw", width:"70vw", zIndex:"99999"}} />
        </div>
    );
}

export default Loading;



