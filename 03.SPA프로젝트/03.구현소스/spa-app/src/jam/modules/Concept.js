// 메인 컴포넌트 - concept.js
// 메인CSS
import "../css/concept.css"
// 메인 데이터
import concept_data from "../data/concept";
// 제이쿼리
import $ from "jquery";



// 제이쿼리 로드구역 함수 /////////
function jqFn(){
    $(()=>{
    }); /////// jQB ////////
} ///////////// jqFn /////////////

function Concept(){
    return(
        <>
        {/* 모듈코드 */}
        
        
        {/* 빈루트를 만들고 JS로드함수포함 */}
        {jqFn()}
        </>
    )
}

export default Concept;

