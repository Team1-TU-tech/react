import React from "react";


function WeekendRecommend() {
    return (
        <div id={"weekendRecommend"}>
            <h3>이번 주말을 위한 공연</h3>
            <button className={"btn btn-primary"}>로맨틱</button>
            <button className={"btn btn-primary"}>스릴러</button>
            <button className={"btn btn-primary"}>가족과</button>
            {/*여기 리스트 뿌리고*/}
            <button className={"btn btn-secondary"}>전체보기</button>
        </div>
    );
}

export default WeekendRecommend;
