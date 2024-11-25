import React, {useState} from "react";
import "../css/rstPage.css";
import RstEntity from "./RstEntity";

function SearchRstMain() {

    const [rstNum, setRstNum] = useState(0);
    const data = [
        {
            "posterImg": "https://ticketimage.interpark.com/Play/image/large/24/24016997_p.gif",
            "showTitle": "MC스나이퍼 - Back To The Oldschool 3",
            "showLocation": "홍대 무신사 개러지",
            "showDate": "2024년 11월 22일(금) 오후 6시",
            "onSale": true,
            "isExclusive": true,
            "id":1
        },
        {
            "posterImg": "https://ticketimage.interpark.com/Play/image/large/24/24016997_p.gif",
            "showTitle": "MC스나이퍼 - Back To The Oldschool 3",
            "showLocation": "홍대 무신사 개러지",
            "showDate": "2024년 11월 22일(금) 오후 6시",
            "onSale": false,
            "isExclusive": true,
            "id":2
        },
        {
            "posterImg": "https://ticketimage.interpark.com/Play/image/large/24/24016997_p.gif",
            "showTitle": "MC스나이퍼 - Back To The Oldschool 3",
            "showLocation": "홍대 무신사 개러지",
            "showDate": "2024년 11월 22일(금) 오후 6시",
            "onSale": true,
            "isExclusive": false,
            "id":3
        },
        {
            "posterImg": "https://ticketimage.interpark.com/Play/image/large/24/24016997_p.gif",
            "showTitle": "MC스나이퍼 - Back To The Oldschool 3",
            "showLocation": "홍대 무신사 개러지",
            "showDate": "2024년 11월 22일(금) 오후 6시",
            "onSale": true,
            "isExclusive": true,
            "id":4
        },
        {
            "posterImg": "https://ticketimage.interpark.com/Play/image/large/24/24016997_p.gif",
            "showTitle": "MC스나이퍼 - Back To The Oldschool 3",
            "showLocation": "홍대 무신사 개러지",
            "showDate": "2024년 11월 22일(금) 오후 6시",
            "onSale": false,
            "isExclusive": false,
            "id":5
        },
        {
            "posterImg": "https://ticketimage.interpark.com/Play/image/large/24/24016997_p.gif",
            "showTitle": "MC스나이퍼 - Back To The Oldschool 3",
            "showLocation": "홍대 무신사 개러지",
            "showDate": "2024년 11월 22일(금) 오후 6시",
            "onSale": true,
            "isExclusive": true,
            "id":6
        },
        {
            "posterImg": "https://ticketimage.interpark.com/Play/image/large/24/24016997_p.gif",
            "showTitle": "MC스나이퍼 - Back To The Oldschool 3",
            "showLocation": "홍대 무신사 개러지",
            "showDate": "2024년 11월 22일(금) 오후 6시",
            "onSale": true,
            "isExclusive": true,
            "id":7
        },
        {
            "posterImg": "https://ticketimage.interpark.com/Play/image/large/24/24016997_p.gif",
            "showTitle": "MC스나이퍼 - Back To The Oldschool 3",
            "showLocation": "홍대 무신사 개러지",
            "showDate": "2024년 11월 22일(금) 오후 6시",
            "onSale": true,
            "isExclusive": true,
            "id":8
        },
        {
            "posterImg": "https://ticketimage.interpark.com/Play/image/large/24/24016997_p.gif",
            "showTitle": "MC스나이퍼 - Back To The Oldschool 3",
            "showLocation": "홍대 무신사 개러지",
            "showDate": "2024년 11월 22일(금) 오후 6시",
            "onSale": true,
            "isExclusive": true,
            "id":9
        },
    ]

    window.onload=()=>{
        setRstNum(100);
    }

    return (
        <>
            <div>검색결과 ({rstNum})</div>
            <div id={"rstRoot"}>
                {
                    data.map((d,i)=>{
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
        </>
    );
}

export default SearchRstMain;
