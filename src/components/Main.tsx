import React from "react";
import "../css/main.css";

import SearchBar from "./SearchBar";
import Banner from "./Banner";
import SlideTest from "./SliderTest";
import Footer from "./Footer";
import WeekendRecommend from "./WeekendRecommend";

function Main() {
    return (
        <div className="App">
            <SearchBar />
            <Banner />
            <WeekendRecommend />
        </div>
    );
}

export default Main;
