import React, {useEffect, useRef, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";

import "../css/detail.css"
import {mkLoadingPage, removeLoadingPage, ticketHost} from "../scripts/common";
import ErrorPage from "./ErrorPage";


function DetailPage() {
    const navigate=useNavigate()
    const params = useParams()
    const [data, setData] = useState(null)
    const id=params.id as string;

    const back=()=>{
        navigate(-1)
    }

    const loadData=async ()=>{
        await fetch("http://localhost:7000/detail/"+id,{
            method: "GET"
        })
            .then(response => response.json())
            .then(json => {
                    console.log(json)
                    setData(json["data"])
                }
            )
            .catch(err => console.log(err))
    }

    useEffect(() => {
        mkLoadingPage()
        loadData()
    }, [id])

// data :
//     artist : Array(0)
//     casting : Array(0)
//     category : "연극"
//     description : "전쟁으로 남편을 잃은 슬픔 때문에 늘 자신의 아픈 가슴을 손으로 쓸어내리는 색시.\n      \n      어느 날,\n      \n      색시의 손은 더 이상 색시의 아픈 가슴을 만지기 싫다며 스스로 떨어져 나와 떠나버린다.\n      \n\n      상처와 고통, 그리고 치유\n      \n      한 편의 시처럼 펼쳐지는\n      \n      삶의 이야기...\n      \n\n      〈손 없는 색시〉는 한국을 비롯한 아시아, 러시아, 유럽 등 세계 곳곳에 퍼져 있는 설화를 바탕으로 성찰과 아픔, 회복과 믿음을 꿈꾸는 이야기이다.\n      \n\n      기존 연극의 고정관념을 깨는 판타지 그 이상의 연극!\n      \n\n      이 아름답고 시적인 이야기를 전해 줄 주인공 배우는, 인형이다.\n      \n      그동안 '예술무대산'은 다양한 오브제를 파격적으로 사용해오며 인형극의 연극적 문법을 발견하는 실험적인 작품들을 창작해왔다.\n      \n      조현산 연출은 인형극을 보는 것이 '마치 은유가 장착된 시를 읽는 것'이라고 표현한다.\n      \n      즉, 관객들은 인형의 단 하나의 표정 속에서 그 안에 숨어 있는 숱한 감정과 상념을 스스로 상상해야 하는 것이다.\n      \n\n      〈손 없는 색시〉의 무대와 객석 곳곳에서 등장하는 모든 배우는 이야기꾼이자 인형 연기자이다.\n      \n      때로는 광대처럼, 때로는 정령처럼 인물과 공간을 만들어내며 시적인 전개와 독특한 분위기, 그리고 그 안에 숨겨진 묵직한 메시지까지 전달한다.\n      \n      여기에 소리로서 존재하는 음악은 색시와 늙은 아들의 여정과 사계절의 변화를 표현하고, 해학적이고 상징적인 극의 독특한 분위기를 자아낸다."
//     duplicatekey : "연극손없는색시2024.12.07"
//     end_date : "2024.12.07"
//     hosts : Array(1)
//              0 :
//               site_id : 1
//               ticket_url : "http://tickets.interpark.com/contents/bridge/24015857"
//     location : "평촌아트홀"
//     open_date :  "2024.11.01 13:00"
//     poster_url : "https://ticketimage.interpark.com/Play/image/large/24/24015857_p.gif"
//     pre_open_date : null
//     price : Array(1)
//         0 :
//          price : "10,000원"
//          seat : "전석"
//     rating : "7세 이상 관람가능"
//     region : "수도권"
//     running_time : "75분"
//     start_date :  "2024.12.07"
//     title : "연극 ［손 없는 색시］"
//     _id : "674ebd3aaaaa801633be7055"

    return data?(
        <div id={"detailPageContainer"}>
            <h1>{data["title"]?data["title"]:params.id+"번 데이터"}</h1>
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
                                {(data["price"] as Array<string>).length>0?
                                    (data["price"] as Array<string>).map((i, j) => {
                                        /*@ts-ignore*/
                                        return (<div><span style={{display:"inline-block", width:"87px"}}>{i["seat"]}</span><span>{i["price"]}</span></div>)
                                    }):new Date()<new Date(data["start_date"])?"판매 예정":"판매 종료"
                                }
                            </td>
                        </tr>
                    </table>
                    <div>
                        {
                            (data["hosts"] as Array<string>).map((i, j) => {
                                /*@ts-ignore*/
                                return (<a className={"btn btn-primary"} href={i["ticket_url"]} target={"_blank"}>{ticketHost[i["site_id"]]}</a>)
                            })
                        }
                    </div>
                </div>
            </div>
            <div>
                <h3 className={"detail-section-title"}>출연진</h3>
                <div>~</div>
            </div>
            <div>
                <h3 className={"detail-section-title"}>줄거리</h3>
                <div id={"detail-description"}>{data["description"]}</div>
            </div>
            <button className={"btn btn-warning"} onClick={back}>뒤로가기</button>
        </div>
    ) : (<ErrorPage />)
    ;
}

export default DetailPage;

