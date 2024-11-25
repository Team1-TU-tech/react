import React from "react";
import "../css/footer.css"
import logo from "../img/TicketMoa-logo-footer.png"

function Footer() {
    return (
        <div id={"footer"}>
            <img src={logo} alt="Logo" id={"footerLogo"} />
            <div>어떤 내용 넣을지 고민 필요 1</div>
            <div>어떤 내용 넣을지 고민 필요 2 근데 이건 그냥 1이랑 합쳐도 됨</div>
        </div>
    );
}

export default Footer;
