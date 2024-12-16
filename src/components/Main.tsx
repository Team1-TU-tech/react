import React from "react";
import "../css/App.css";

import SearchBar from "./SearchBar";
import SearchRst from "./SearchRst";
import Banner from "./Banner";

function Main() {
    return (
        <div className="App">
            <Banner />
            <SearchRst />
        </div>
    );
}

export default Main;
