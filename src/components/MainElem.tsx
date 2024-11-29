import React from "react";


function MainElem(props:{[key:string]:string|{ name: string; }[]|undefined}) {

    const randint = (Math.floor(Math.random() * 100)).toString()
    const data=props.buttonData as {name:string;}[];

    return (
        <div id={props.id?props.id as string:"mainElem-"+randint}>
            <h3>{props.title?props.title as string:"당신을 위한 추천"}</h3>
            {
                data.map((i,j)=>{
                    return (<button className={"btn btn-primary"}>{i["name"]}</button>)
                })
            }
            {/*여기 리스트 뿌리고*/}
            <button className={"btn btn-secondary"}>전체보기</button>
        </div>
    );
}

export default MainElem;