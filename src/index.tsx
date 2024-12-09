import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import './css/index.css';
import reportWebVitals from './scripts/reportWebVitals';

//import App from './components/App';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Join from "./components/Join";
import SearchRst from "./components/SearchRst";
import Main from "./components/Main";
import DetailPage from "./components/DetailPage";
import LoginCallback from "./components/Kakao/LoginCallback";
import LogoutCallback from "./components/Kakao/LogoutCallback";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Header/>
            {/*<ul className="menu">*/}
            {/*    <li><Link to="/index">Index</Link></li>*/}
            {/*    <li><Link to="/join">회원가입</Link></li>*/}
            {/*</ul>*/}
            <Routes>
                {/*<Route path="/" element={<App/>}/>*/}
                <Route path="/" element={<Main />}/>
                <Route path="/join" element={<Join/>}/>
                <Route path="/search" element={<SearchRst />}/>
                <Route path="/detail/:id" element={<DetailPage />}/>
                <Route path="/callback" element={<LoginCallback />}/>
                <Route path="/callbackLogout" element={<LogoutCallback />}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
