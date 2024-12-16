import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function SlideTest() {   /** https://velog.io/@jong-kyung/react%EB%A1%9C-slide-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0 **/
const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 7,
        slidesToScroll: 1,
        //vertical:true,

        arrows: false, // 화살표 표시 여부
        autoplay: true, // 자동 재생 설정
        autoplaySpeed: 3000, // 자동 재생 속도(ms)
        centerMode: true, // 현재 슬라이드를 가운데에 정렬
        centerPadding: '1px', // 가장자리 슬라이드 사이의 간격
        className: 'center' // Slider 클래스설정
    };
    return (
        <Slider {...settings}>
            {[1,2,3,4,5,6,7,8,9,10,11].map((i)=> {
                return (<div style={{width: "10px"}}>
                    <h3>{i}</h3>
                </div>)
            })}
        </Slider>
    );
}