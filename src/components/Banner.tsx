import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../css/banner.css";

import MainEntry from "./MainEntry";


function Banner() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 7,
        slidesToScroll: 1,
        //vertical:true,

        arrows: true, // 화살표 표시 여부
        autoplay: true, // 자동 재생 설정
        autoplaySpeed: 2000, // 자동 재생 속도(ms)
        centerMode: true, // 현재 슬라이드를 가운데에 정렬
        centerPadding: '10px', // 가장자리 슬라이드 사이의 간격
        className: 'center' // Slider 클래스설정
    };


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
        {
            "posterImg": "https://ticketimage.interpark.com/Play/image/large/24/24016997_p.gif",
            "showTitle": "MC스나이퍼 - Back To The Oldschool 3",
            "showLocation": "홍대 무신사 개러지",
            "showDate": "2024년 11월 22일(금) 오후 6시",
            "onSale": true,
            "isExclusive": true,
            "id":10
        },
        {
            "posterImg": "https://ticketimage.interpark.com/Play/image/large/24/24016997_p.gif",
            "showTitle": "MC스나이퍼 - Back To The Oldschool 3",
            "showLocation": "홍대 무신사 개러지",
            "showDate": "2024년 11월 22일(금) 오후 6시",
            "onSale": true,
            "isExclusive": true,
            "id":11
        }
    ]



    return (
        <Slider {...settings}>
            {/*{[1,2,3,4,5,6,7,8,9,10,11].map((i)=> {*/}
            {/*    return (<div style={{width: "10px"}}>*/}
            {/*        <h3>{i}</h3>*/}
            {/*    </div>)*/}
            {/*})}*/}
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
                    return (<div id={"entryWrap"} style={{width: "10px"}}>
                        <MainEntry
                            posterImg= {d["posterImg"]}
                            showTitle={d["showTitle"]}
                            showLocation={d["showLocation"]}
                            showDate={d["showDate"]}
                            onSale={d["onSale"]}
                            isExclusive={d["isExclusive"]}
                            _link={d["id"]}
                        />
                    </div>)
                })}
        </Slider>
    );
}

export default Banner;
