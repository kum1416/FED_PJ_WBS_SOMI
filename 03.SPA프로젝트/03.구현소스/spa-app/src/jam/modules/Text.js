// 메인 컴포넌트 - mfirst.js
// 메인CSS
import "../css/text.css"
// 메인 데이터
import text_data from "../data/text";
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

function Text(){
    return(
        <>
        {/* 모듈코드 */}
        <div className="text-cont">
        <h2>Wildly Loved</h2>
        <p>
          You will find our wild products in their simplest form. No additives or <br />anything else can spoil their
          nature
        </p>
      </div>
        
        {/* 빈루트를 만들고 JS로드함수포함 */}
        {jqFn()}
        </>
    )
}

export default Text;

