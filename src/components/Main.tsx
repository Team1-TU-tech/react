import React from "react";
import "../css/main.css";

import SearchBar from "./SearchBar";
import Banner from "./Banner";
import SlideTest from "./SliderTest";
import Footer from "./Footer";
import WeekendRecommend from "./WeekendRecommend";
import MainElem from "./MainElem";

function Main() {
    return (
        <div className="App">
            <SearchBar />
            <Banner />
            <WeekendRecommend />


            <MainElem
                id={"weekendRecommend"}
                title={"이번 주말을 위한 공연"}
                buttonData={[
                    {
                        "name":"로맨틱"
                    },
                    {
                        "name":"스릴러"
                    },
                    {
                        "name":"가족과"
                    }
                ]}
                // listData={[{
                //
                // }]}
            />
        </div>
    );
}

export default Main;
