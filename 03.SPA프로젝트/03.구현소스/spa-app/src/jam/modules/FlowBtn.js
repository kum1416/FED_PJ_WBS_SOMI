// 메인 컴포넌트 - FlowBtn.js
// 버튼CSS
import "../css/flowbtn.css"

// 제이쿼리
import $ from "jquery";



// 제이쿼리 로드구역 함수 /////////
function jqFn(){
    $(()=>{
    }); /////// jQB ////////
} ///////////// jqFn /////////////

function FlowBtn(){
    return(
        <>
        {/* 모듈코드 */}
        
        
        {/* 빈루트를 만들고 JS로드함수포함 */}
        {jqFn()}
        </>
    )
}

export default FlowBtn;

