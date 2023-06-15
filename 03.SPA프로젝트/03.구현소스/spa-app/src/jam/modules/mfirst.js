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

    }); /////// jQB ////////
} ///////////// jqFn /////////////

function Mfirst(){
    return(
        <>
        {/* 모듈코드 */}
        <section className="fpage">
            <div className="imbx"></div>
            <div className="main-cont">
                <h2>Taste the Wild.<br />Find your Soul.</h2>
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

