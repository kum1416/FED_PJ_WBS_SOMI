// 메인 컴포넌트 - FlowBtn.js
// 버튼CSS
import "../css/flowbtn.css";
// 메인 데이터
import flowbtn_data from "../jam/data/flowbtn";
// 제이쿼리
import $ from "jquery";

// 제이쿼리 로드구역 함수 /////////
function jqFn() {
    $(() => {}); /////// jQB ////////
} ///////////// jqFn /////////////

function FlowBtn(props) {
    return (
        <>
            {/* 모듈코드 */}
            <div className="mainbtn">
                <div className="runtxt">
                    <span>{flowbtn_data[props.dd].tit}</span>
                    {/* <span>{flowbtn_data[props.dd].tit}</span> */}
                    <span>SWEET AND SPECIAL JAM</span>
                    <span>SWEET AND SPECIAL JAM</span>
                    <span>SWEET AND SPECIAL JAM</span>
                </div>
            </div>

            {/* 빈루트를 만들고 JS로드함수포함 */}
            {jqFn()}
        </>
    );
}

export default FlowBtn;
