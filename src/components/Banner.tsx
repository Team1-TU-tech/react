import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../css/banner.css";


function BannerEntry(props:{[key:string]:string|number|boolean|undefined}) {

    const navigate = useNavigate();

    const move= (i: string | number | boolean | undefined)=>{
        navigate("/detail/"+i?.toString());
    }

    return (
        <>
            <div className={"card "+props.className}>
                <img src={props.posterImg?.toString()} alt={"Poster"} className="card-img-top posterImg bannerImg" onClick={()=>{move(props._link)}} />
                <div className="card-body bannerBody">
                    <h5 className={"showTitle"} onClick={() => {
                        move(props._link)
                    }}>{props.showTitle}</h5>
                    <small className={"showDate"}>{props.startDate+"~"+props.endDate}</small><br/>
                </div>
            </div>
        </>
    );
}

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

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // const data1 = [
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
    //     {
    //         "posterImg": "https://ticketimage.interpark.com/Play/image/large/24/24016997_p.gif",
    //         "showTitle": "MC스나이퍼 - Back To The Oldschool 3",
    //         "showLocation": "홍대 무신사 개러지",
    //         "showDate": "2024년 11월 22일(금) 오후 6시",
    //         "onSale": true,
    //         "isExclusive": true,
    //         "id":10
    //     },
    //     {
    //         "posterImg": "https://ticketimage.interpark.com/Play/image/large/24/24016997_p.gif",
    //         "showTitle": "MC스나이퍼 - Back To The Oldschool 3",
    //         "showLocation": "홍대 무신사 개러지",
    //         "showDate": "2024년 11월 22일(금) 오후 6시",
    //         "onSale": true,
    //         "isExclusive": true,
    //         "id":11
    //     }
    // ]

    const loadData=async ()=> {
        await fetch(`http://${process.env.REACT_APP_HOST}:8000/banner`, {
            method: "GET",
        })
            .then(res => res.json())
            .then(json => {
                //console.log(json)
                setData(json)
                setIsLoading(false)
                /***** banner fetch save ************/
                localStorage.removeItem("bannerData")
                localStorage.setItem("bannerData", JSON.stringify(json))
                /***** banner fetch save ************/
            })
            .catch(err=> {
                console.log("banner\n└", err)
                //const json = localStorage.getItem("bannerData")
                //if(json!==null){
                //    setData(JSON.parse(json))
                //    setIsLoading(false)
                //}
            });
    }



    useEffect( () => {
        loadData()
    }, []);

    return isLoading?
        <div id="bannerLoadingSection" >
            <img src={"./static/media/loading.gif"} alt={"Loading"} />
            <h3>배너 로딩중..</h3>
        </div>
        :(
        <Slider {...settings}>
            {
                data.map((d,i)=>{
                    /********************************
                     {
                     `  id : "675756fa6fd9fdea6d45f97b"
                        poster_url : "http://tkfile.yes24.com/upload2/PerfBlog/202410/20241014/20241014-51301.jpg"
                        start_date : "2024.12.11"
                        end_date : "2024.12.11"
                        title : "[부산] 백양 11시 클래식 콘서트(3회차)"`
                     }
                     ***********************************/
                    return (<div id={"entryWrap"} style={{width: "10px"}}>
                        <BannerEntry
                            className={"sliderContainer"}
                            posterImg= {d["poster_url"]}
                            showTitle={d["title"]}
                            startDate={d["start_date"]}
                            endDate={d["end_date"]}
                            _link={d["id"]}
                        />
                    </div>)
                })}
        </Slider>
    );
}

export default Banner;
