import React from "react";
import "../css/main.css";

import SearchBar from "./SearchBar";
import Banner from "./Banner";
import MainElem from "./MainElem";

function Main() {
    return (
        <div className="App">
            <SearchBar />
            <Banner />

            <MainElem
                id={"weekendRecommend"}
                title={"이번 주말을 위한 공연"}
                buttonData={[
                    {
                        "name":"로맨틱",
                        "id":"romantic"
                    },
                    {
                        "name":"스릴러",
                        "id":"thriller"
                    },
                    {
                        "name":"가족과",
                        "id":"family"
                    }
                ]}
                listData={[
                    {
                        "posterImg": "https://ticketimage.interpark.com/Play/image/large/24/24013928_p.gif",
                        "showTitle": "뮤지컬 지킬앤하이드 (Jekyll ＆ Hyde) - 20주년",
                        "showLocation": "블루스퀘어 신한카드홀",
                        "showDate": "2024.11.29 ~2025.05.18",
                        "category": "스릴러",
                        "onSale": true,
                        "isExclusive": true,
                        "id":1
                    },
                    {
                        "posterImg": "https://ticketimage.interpark.com/Play/image/large/24/24013619_p.gif",
                        "showTitle": "뮤지컬 〈스윙 데이즈_암호명 A〉",
                        "showLocation": "충무아트센터 대극장",
                        "showDate": "2024.11.19 ~2025.02.09",
                        "category": "스릴러",
                        "onSale": true,
                        "isExclusive": true,
                        "id":2
                    },
                    {
                        "posterImg": "https://ticketimage.interpark.com/Play/image/large/24/24011935_p.gif",
                        "showTitle": "뮤지컬 〈광화문연가〉",
                        "showLocation": "디큐브 링크아트센터",
                        "showDate": "2024.10.23 ~2025.01.05",
                        "category": "로맨틱",
                        "onSale": true,
                        "isExclusive": true,
                        "id":3
                    },
                    {
                        "posterImg": "https://ticketimage.interpark.com/Play/image/large/24/24014511_p.gif",
                        "showTitle": "뮤지컬 〈이프덴〉",
                        "showLocation": "홍익대 대학로 아트센터 대극장",
                        "showDate": "2024.12.03 ~2025.03.02",
                        "category": "로맨틱",
                        "onSale": true,
                        "isExclusive": true,
                        "id":4
                    },
                    {
                        "posterImg": "https://ticketimage.interpark.com/Play/image/large/P0/P0004107_p.gif",
                        "showTitle": "뮤지컬 〈명성황후〉 30주년 기념 공연",
                        "showLocation": "세종문화회관 대극장(자세히)",
                        "showDate": "2025.01.21 ~2025.03.30",
                        "category": "가족과",
                        "onSale": true,
                        "isExclusive": true,
                        "id":5
                    }, {
                        "posterImg": "https://ticketimage.interpark.com/Play/image/large/24/24016412_p.gif",
                        "showTitle": "뮤지컬 〈고스트 베이커리〉",
                        "showLocation": "두산아트센터 연강홀",
                        "showDate": "2024.12.19 ~2025.02.23",
                        "category": "가족과",
                        "onSale": true,
                        "isExclusive": true,
                        "id":6
                    }
                ]}
            />
        </div>
    );
}

export default Main;
