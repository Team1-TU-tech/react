import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";

import ErrorPage from "./ErrorPage";
import ArtistModal from "./ArtistModal";
import Loading from "./Loading";

import {loadSession, ticketHost} from "../scripts/common";
import "../css/detail.css"
import FloatingMenu from "./FloatingMenu";


function DetailPage() {
    const navigate=useNavigate()
    const params = useParams()
    const [data, setData] = useState(null)
    const [artist, setArtist] = useState({})
    const [isLoading,setIsLoading]=useState(true)

    const id=params.id as string;

    const back=()=>{
        navigate(-1)
    }

    const loadData=async ()=>{
        await fetch(`http://${process.env.REACT_APP_HOST}:7777/detail/`+id,{
            method: "GET",
            headers:{"Authorization": loadSession("loginToken") || loadSession("kakaoToken") || "" },
            //body:JSON.stringify({"token":loadSession("loginToken")})
        })
            .then(response => response.json())
            .then(json => {
                    //console.log(json)
                    setData(json["data"])

                    if(json["data"]["artist"]!==null){
                        let temp={} as {[key:string]:string}
                        json["data"]["artist"].map((i:{[key:string]:string})=>{
                            temp[i["artist_name"]]=i["artist_url"].includes("noImage")?"../img/person-circle.svg":i["artist_url"]
                        })
                        setArtist(temp)
                    }
                }
            ).then(()=>{
                setIsLoading(false)
            })
            .catch(err => {
                console.error(err)
                alert("오류가 발생하였습니다.\n잠시 후 다시 시도해주세요.")
                navigate(-1)
            })
    }

    useEffect(() => {
        loadData()
    }, [id])

    return isLoading?<Loading />:(data?(
        <div id={"detailPageContainer"}>
            <FloatingMenu oid={id as string} />
            <button className={"btn btn-warning"} onClick={back} style={{position: "relative", left: "70vw", top: "40px"}}>뒤로가기🔙
            </button>
            <h1>{data["title"] ? data["title"] : params.id + "번 데이터"}</h1>
            <div id={"detail-top"}>
                <img src={data["poster_url"]} alt="poster-image"/>
                <div id={"detail-top-contents"}>
                    <table id={"dataTable"}>
                        <colgroup>
                            <col width={"10%;"}/>
                            <col width={"90%;"}/>
                        </colgroup>
                        <tr>
                            <th>장소</th>
                            <td>{data["location"]}</td>
                        </tr>
                        <tr>
                            <th>공연기간</th>
                            <td>{data["start_date"] + "~" + data["end_date"]}</td>
                        </tr>
                        <tr>
                            <th>공연시간</th>
                            <td>{data["running_time"]}</td>
                        </tr>
                        <tr>
                            <th>관람연령</th>
                            <td>{data["rating"]}</td>
                        </tr>
                        <tr>
                            <th>가격</th>
                            <td>
                                <table>
                                    {((data["price"] as Array<string>)!==null && (data["price"] as Array<string>).length > 0) ?
                                        (data["price"] as Array<string>).map((i, j) => {
                                            /*@ts-ignore*/
                                            return (<tr>
                                                <td id={"priceLevel"}>{i["seat"]}</td>
                                                <td>{i["price"]}</td>
                                            </tr>)
                                        }) : new Date() < new Date(data["start_date"]) ? "판매 예정" : "판매 종료"
                                    }
                                </table>
                            </td>
                        </tr>
                    </table>
                    <div>
                        {
                            (data["hosts"] as Array<string>).map((i) => {
                                /*@ts-ignore*/
                                return (<a className={"btn btn-primary ticketBtn"} href={i["ticket_url"]}
                                           target={"_blank"} rel="noreferrer" >{ticketHost[i["site_id"]]}</a>)
                            })
                        }
                    </div>
                </div>
            </div>
            <div>
                <h3 className={"detail-section-title"}>출연진</h3>
                <div id={"artistList"} >
                    {
                        ((data["casting"] as Array<string>!==null) && (data["casting"] as Array<string>).length > 0) ?
                            (data["casting"] as Array<string>).length > 6 ?
                                ((data["casting"] as Array<string>).slice(0, 6).map((i, j) => {
                                    /*@ts-ignore*/
                                    return (
                                        <div className={"artistElem"}>
                                            <div className={"artistImg"}
                                                 style={{backgroundImage: `url(${artist[i["actor"]]})`}}></div>
                                            {/*<img src={artist[i["actor"]]} alt={i["actor"]+"-image"} />*/}
                                            <div>{i["actor"]}</div>
                                            <small>{i["role"]}</small>
                                        </div>)
                                })) :
                                (data["casting"] as Array<string>).map((i, j) => {
                                    /*@ts-ignore*/
                                    return (
                                        <div className={"artistElem"}>
                                            <div className={"artistImg"}
                                                 style={{backgroundImage: `url(${artist[i["actor"]]})`}}></div>
                                            {/*<img src={artist[i["actor"]]} alt={i["actor"]+"-image"} />*/}
                                            <div>{i["actor"]}</div>
                                            <small>{i["role"]}</small>
                                        </div>)
                                })
                            : "."
                    }
                </div>
            </div>
            <div style={{textAlign: "center"}}>
                {(
                    ((data["casting"] as Array<string>!==null) && (data["casting"] as Array<string>).length > 6)  ?
                        <ArtistModal artistData={artist} castingData={data["casting"]}/>
                        : <></>
                )}
            </div>
            <div>
                <h3 className={"detail-section-title"}>줄거리</h3>
                <div id={"detail-description"}>{data["description"]}</div>
            </div>
        </div>
    ) : (<ErrorPage/>))
        ;
}

export default DetailPage;

