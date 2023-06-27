// 메인 컴포넌트 - concept.js
// 메인CSS
import "../css/concept.css";
// 메인 데이터
import concept_data from "../data/concept";
// 제이쿼리
import $ from "jquery";

// 제이쿼리 로드구역 함수 /////////
function jqFn() {
  $(() => {}); /////// jQB ////////
} ///////////// jqFn /////////////

function Concept() {
  return (
    <>
      {/* 모듈코드 */}
      <div className="concept">
        <div className="main-cont__concept">
          <h2>The Concept Store</h2>
          <div className="mbtnbx">
            <div className="mainbtn">
              <div className="runtxt1">
                <span>SWEET AND SPECIAL JAM</span>
                <span>SWEET AND SPECIAL JAM</span>
                <span>SWEET AND SPECIAL JAM</span>
                <span>SWEET AND SPECIAL JAM</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 빈루트를 만들고 JS로드함수포함 */}
      {jqFn()}
    </>
  );
}

export default Concept;
