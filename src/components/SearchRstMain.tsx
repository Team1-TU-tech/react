import React, {useEffect, useState} from "react";
import "../css/rstPage.css";
import RstEntity from "./RstEntity";
import {useSearchParams} from "react-router-dom";

function SearchRstMain(props:{[key:string]:string|number|{[key:string]:string|number|boolean}[]|undefined}) {

    const [searchParams, setSearchParams] = useSearchParams();
    const [rstNum, setRstNum] = useState(0);
    const rstNumProp = props.rstNum?Number.parseInt(props.rstNum.toString()):0

    const currPage=searchParams.get("currPage")
    const currPageNum=currPage?Number.parseInt(currPage):1

    // const data = [
    //     {
    //         "posterImg": "https://ticketimage.interpark.com/Play/image/large/24/24016997_p.gif",
    //         "showTitle": "MC스나이퍼 - Back To The Oldschool 3",
    //         "showLocation": "홍대 무신사 개러지",
    //         "showDate": "2024년 11월 22일(금) 오후 6시",
    //         "onSale": true,
    //         "isExclusive": true,
    //         "id":1
    //     },
    //     {
    //         "posterImg": "https://ticketimage.interpark.com/Play/image/large/24/24016997_p.gif",
    //         "showTitle": "MC스나이퍼 - Back To The Oldschool 3",
    //         "showLocation": "홍대 무신사 개러지",
    //         "showDate": "2024년 11월 22일(금) 오후 6시",
    //         "onSale": false,
    //         "isExclusive": true,
    //         "id":2
    //     },
    //     {
    //         "posterImg": "https://ticketimage.interpark.com/Play/image/large/24/24016997_p.gif",
    //         "showTitle": "MC스나이퍼 - Back To The Oldschool 3",
    //         "showLocation": "홍대 무신사 개러지",
    //         "showDate": "2024년 11월 22일(금) 오후 6시",
    //         "onSale": true,
    //         "isExclusive": false,
    //         "id":3
    //     },
    //     {
    //         "posterImg": "https://ticketimage.interpark.com/Play/image/large/24/24016997_p.gif",
    //         "showTitle": "MC스나이퍼 - Back To The Oldschool 3",
    //         "showLocation": "홍대 무신사 개러지",
    //         "showDate": "2024년 11월 22일(금) 오후 6시",
    //         "onSale": true,
    //         "isExclusive": true,
    //         "id":4
    //     },
    //     {
    //         "posterImg": "https://ticketimage.interpark.com/Play/image/large/24/24016997_p.gif",
    //         "showTitle": "MC스나이퍼 - Back To The Oldschool 3",
    //         "showLocation": "홍대 무신사 개러지",
    //         "showDate": "2024년 11월 22일(금) 오후 6시",
    //         "onSale": false,
    //         "isExclusive": false,
    //         "id":5
    //     },
    //     {
    //         "posterImg": "https://ticketimage.interpark.com/Play/image/large/24/24016997_p.gif",
    //         "showTitle": "MC스나이퍼 - Back To The Oldschool 3",
    //         "showLocation": "홍대 무신사 개러지",
    //         "showDate": "2024년 11월 22일(금) 오후 6시",
    //         "onSale": true,
    //         "isExclusive": true,
    //         "id":6
    //     },
    //     {
    //         "posterImg": "https://ticketimage.interpark.com/Play/image/large/24/24016997_p.gif",
    //         "showTitle": "MC스나이퍼 - Back To The Oldschool 3",
    //         "showLocation": "홍대 무신사 개러지",
    //         "showDate": "2024년 11월 22일(금) 오후 6시",
    //         "onSale": true,
    //         "isExclusive": true,
    //         "id":7
    //     },
    //     {
    //         "posterImg": "https://ticketimage.interpark.com/Play/image/large/24/24016997_p.gif",
    //         "showTitle": "MC스나이퍼 - Back To The Oldschool 3",
    //         "showLocation": "홍대 무신사 개러지",
    //         "showDate": "2024년 11월 22일(금) 오후 6시",
    //         "onSale": true,
    //         "isExclusive": true,
    //         "id":8
    //     },
    //     {
    //         "posterImg": "https://ticketimage.interpark.com/Play/image/large/24/24016997_p.gif",
    //         "showTitle": "MC스나이퍼 - Back To The Oldschool 3",
    //         "showLocation": "홍대 무신사 개러지",
    //         "showDate": "2024년 11월 22일(금) 오후 6시",
    //         "onSale": true,
    //         "isExclusive": true,
    //         "id":9
    //     },
    // ]
    const data:{[key:string]:string|number|boolean}[] = props.data&&typeof props.data==="object"?props.data:[]
    const partitionData = data.slice(((currPageNum-1)*50),currPageNum*50)

    useEffect(()=>{
        setRstNum(rstNum);
    },[data])



    return (
        <div id={"rstMain"}>
            <div id={"rstNum"}>검색결과 ({rstNumProp})</div>
            <div id={"rstRoot"}>
                {
                    partitionData.map((d,i)=>{
                        /********************************
                        {
                            "posterImg": "https://ticketimage.interpark.com/Play/image/large/24/24016997_p.gif",
                            "showTitle": "MC스나이퍼 - Back To The Oldschool 3",
                            "showLocation": "홍대 무신사 개러지",
                            "showDate": "2024년 11월 22일(금) 오후 6시",
                            "onSale": true,
                            "isExclusive": true
                            "id": 1
                        }
                        ***********************************/
                        return <RstEntity
                            posterImg= {d["posterImg"]}
                            showTitle={d["showTitle"]}
                            showLocation={d["showLocation"]}
                            showDate={d["showDate"]}
                            onSale={d["onSale"]}
                            isExclusive={d["isExclusive"]}
                            _link={d["id"]}
                        />
                    })
                }
            </div>
        </div>
    );
}

export default SearchRstMain;
