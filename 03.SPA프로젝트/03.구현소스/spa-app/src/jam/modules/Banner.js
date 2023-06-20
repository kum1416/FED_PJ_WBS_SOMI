// 메인 컴포넌트 - Banner.js
// 메인CSS
import "../css/banner.css"
// 메인 데이터
import banner_data from "../data/banner";
// 제이쿼리
import $ from "jquery";



// 제이쿼리 로드구역 함수 /////////
function jqFn(){
    $(()=>{
    }); /////// jQB ////////
} ///////////// jqFn /////////////

function Banner(){
    return(
        <>
        {/* 모듈코드 */}
        
        
        {/* 빈루트를 만들고 JS로드함수포함 */}
        {jqFn()}
        </>
    )
}

export default Banner;

