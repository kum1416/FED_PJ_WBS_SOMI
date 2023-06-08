// 메인 컴포넌트 - mfirst.js
// 메인CSS
import "../css/mfirst.css"
// 메인 데이터
import mfirst_data from "../data/mainfirst";
// 제이쿼리
import $ from "jquery";



// 제이쿼리 로드구역 함수 /////////
function jqFn(){
    $(()=>{

    }); /////// jQB ////////
} ///////////// jqFn /////////////

function Mfirst(){
    return(
        <>
        {/* 모듈코드 */}
        
        {/* 빈루트를 만들고 JS로드함수포함 */}
        {jqFn()}
        </>
    )
}

export default Mfirst;

