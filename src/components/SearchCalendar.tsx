import React, {
    useEffect} from "react";
import {useInput} from "../scripts/common";
import {useSearchParams} from "react-router-dom";
//https://sir.kr/bbs/board.php?bo_table=g5_skin&wr_id=18719
//https://lpla.tistory.com/144

function SearchCalendar(props:{[key:string]:string|undefined|null}) {
    const [searchParams, setSearchParams] = useSearchParams();

    const from=searchParams.get("startDate")
    const to= searchParams.get("endDate")

    const nodash2dashed=(date:string)=>{
        // 20241101   ---->    2024-11-01
        return date.slice(0,4)+"-"+date.slice(4,6)+"-"+date.slice(6,8)
    }

    // const getToday=()=>{
    //     //const d= new Date(new Date()/1 + 1000*60*60*24*2)
    //     const d= new Date()
    //     const yyyy= d.getFullYear().toString()
    //     const mm=d.getMonth()>=9? (d.getMonth()+1).toString() : "0"+(d.getMonth()+1).toString() ;
    //     const dd=d.getDate()>9? d.getDate().toString() : "0"+d.getDate().toString() ;
    //
    //     return yyyy+"-"+mm+"-"+dd
    // }

    //const date = props.selected.slice(0,4)+"-"+props.selected.slice(4,6)+"-"+props.selected.slice(6,8)
    //const startDate=useInput(from?from.slice(0,4)+"-"+from.slice(4,6)+"-"+from.slice(6,8):"")
    //const endDate=useInput(to?to.slice(0,4)+"-"+to.slice(4,6)+"-"+to.slice(6,8):"")
    const startDate=useInput(from?nodash2dashed(from):"")
    const endDate=useInput(to?nodash2dashed(to):"")

    useEffect(()=>{
        /*@ts-ignore*/
        $.datepicker.setDefaults({
            dateFormat: "yy-mm-dd",
            prevText: '이전 달',
            nextText: '다음 달',
            monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
            monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
            dayNames: ['일', '월', '화', '수', '목', '금', '토'],
            dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
            dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
            showMonthAfterYear: true,
            yearSuffix: '년',
            //changeMonth: true, // month 셀렉트박스 사용
            //changeYear: true, // year 셀렉트박스 사용
            closeText: "닫기",
            currentText: "오늘",
            showButtonPanel: true
        });
        // Today 버튼 코드 추가
        /*@ts-ignore*/
        $.datepicker._gotoToday = function(id) {
            /*@ts-ignore
            $(id).datepicker('setDate', new Date());*/
            /*@ts-ignore
            $(".ui-datepicker").hide().blur();*/
            /*@ts-ignore*/
            $(id).datepicker('setDate', new Date()).datepicker('hide').blur();
        };

        /*@ts-ignore*/
        $(function () {
            /*@ts-ignore*/
            $("#startDate").datepicker({})

            /*@ts-ignore*/
            $("#endDate").datepicker({})
        })
        /*@ts-ignore*/
        $('#startDate').change(function(){
            /*@ts-ignore*/
            $("#endDate").datepicker("option", "minDate", $("#startDate").datepicker("getDate"))
        });

    })


    return (
        <>
            <input id={"startDate"} className={"datepicker"}  placeholder={"📅 시작일"} {...startDate} />
            <input id={"endDate"} className={"datepicker"} placeholder={"📅 종료일"} {...endDate} />
        </>
    );
}

export default SearchCalendar;
