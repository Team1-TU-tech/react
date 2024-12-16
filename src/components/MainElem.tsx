import React from "react";
import MainEntry from "./MainEntry";


// function BtnGroup(props:{[key:string]:string|number|undefined}) {
//     const key = props.btnNum as string;
//
//
//     return (<>
//         {   key=="0"?
//             <input type="radio" className="btn-check" name="btnradio" id={"btnradio-" + key} autoComplete="off" checked />:
//             <input type="radio" className="btn-check" name="btnradio" id={"btnradio-" + key} autoComplete="off"/>
//         }
//         <label className="btn btn-outline-primary" htmlFor={"btnradio-" + key}>{props.btnName}</label>
//     </>)
// }

function Entry(props:{[key:string]:string|number|{[key:string]:string|number|boolean|undefined}[]|undefined}):JSX.Element {
    const data = props.data as {[key:string]:string|number|boolean}[];
    const category = props.category;
    const division = props.division;

    const fdata = data.filter((data)=>
        data[division as string] === category
    )

    return (<div id={props.id as string} className={"mainEntryContainer"}>
        {
            fdata.map((d,j) => {
                return (<MainEntry
                    className={"mainEntry"}
                    posterImg= {d["posterImg"]}
                    showTitle={d["showTitle"]}
                    showLocation={d["showLocation"]}
                    showDate={d["showDate"]}
                    onSale={d["onSale"]}
                    isExclusive={d["isExclusive"]}
                    _link={d["id"]}
                />)
            })
        }
    </div>)
}

function MainElem(props: { [key: string]: string | {[key: string]: string|number|boolean|undefined}[] | undefined }) {

    const randint = (Math.floor(Math.random() * 100)).toString()
    const data = props.buttonData as {[key: string]: string|number|boolean|undefined}[]

    const disp =(arg:string)=>{
        for(let i=0;i<data.length;i++){
            const elem=document.getElementById(data[i].id as string)
            if(elem !== null) {
                elem.style.display="none";
                if(arg===data[i].id) elem.style.display="grid"
            }
        }
        //alert("arg::::::"+arg)
    }

    setTimeout(()=>{
        disp(data[0].id as string)
    },100)


    return (
        <div className={"mainSection"} id={props.id ? props.id as string : "mainElem-" + randint}>
            <h3>{props.title ? props.title as string : "당신을 위한 추천"}</h3>
            {/*<div className={"btn-group"}>*/}
            {/*<div className="btn-group" role="group" aria-label="Basic radio toggle button group">*/}
            <div>
                {
                    data.map((i, j) => {
                        return (<button className={"btn btn-primary mainSectionBtn"} onClick={()=>{disp(i["id"] as string)}}>{i["name"]}</button>)
                    })
                }
                {/*{*/}
                {/*    data.map((i, j) => {*/}
                {/*        return (<BtnGroup btnName={i["name"]} btnNum={j}/>)*/}
                {/*    })*/}
                {/*}*/}
            </div>
            {
                data.map((i, j) => {
                    return (
                        <Entry
                            data={props.listData as {[key:string]: string|number|boolean}[]}
                            category={i["name"] as string}
                            id={i["id"] as string}
                            division={props.division}
                        />
                    )
                })
            }
            <a className={"gotoTotalBtn"} href={"/search?location=0&startDate=&endDate=&currPage=1&query="+props.query}>전체보기 {'>'}</a>
        </div>
    );
}


export default MainElem;