// 메인 컴포넌트 - mfirst.js
// 메인CSS
import "../css/mfirst.css"
// 메인 데이터
import mfirst_data from "../data/mainfirst";
// svg 데이터
import svgData from "../data/svg";
// 제이쿼리
import $ from "jquery";



// 제이쿼리 로드구역 함수 /////////
function jqFn(){
    $(()=>{

        // html 코드 삽입(svg데이터)
        document.querySelector(".flove").innerHTML=svgData.loveout;
        document.querySelector(".elove").innerHTML=svgData.lovein;

        // 글자 등장액션 //////////////////////////////
        // 글자 넣을 대상
        const stage = document.querySelector(".main-cont h2");
        // console.log(stage);

        const acttext1 = ["Taste","the","Wild."];
        const acttext2 = ["Find","your","Soul."];

        let hcode1="<div>";
        let idx = 0;
        for(let x of acttext1){
            if(x===" ") x = "&nbsp;";
            hcode1 +=
            `<span style="transition-delay: ${idx*0.1}s">
                ${x}</span>`;
            idx++;
        } ////// for //////////
        hcode1 += `</div>`

        // console.log(hcode1);
        stage.innerHTML = hcode1;

        // 2번째줄==================================
        let hcode2="<div>";

        for(let x of acttext2){
            if(x===" ") x = "&nbsp;";
            hcode2 +=
            `<span style="transition-delay: ${idx*0.1}s">
                ${x}</span>`;
            
            idx++;
        } ////// for //////////
        hcode2 += `</div>`


        console.log(hcode2);
        stage.innerHTML += hcode2;


        /* 클래스 on넣기 */
        setTimeout(()=>{
            stage.classList.add("on");
        },2000);

    }); /////// jQB ////////
} ///////////// jqFn /////////////

function Mfirst(){
    return(
        <>
        {/* 모듈코드 */}
        <section className="fpage">
            <div className="imbx"></div>
            <div className="main-cont">
                <h2></h2>
                <div className="mbtnbx">
                <div className="mainbtn">
                    <div className="runtxt">
                    <span>SWEET AND SPECIAL JAM</span>
                    <span>SWEET AND SPECIAL JAM</span>
                    <span>SWEET AND SPECIAL JAM</span>
                    <span>SWEET AND SPECIAL JAM</span>
                    </div>
                </div>
                </div>
            </div>
            <button className="nextbtn">
                <div className="flove"></div>
                <div className="elove"></div>
            </button>
        </section>
        {/* 빈루트를 만들고 JS로드함수포함 */}
        {jqFn()}
        </>
    )
}

export default Mfirst;

