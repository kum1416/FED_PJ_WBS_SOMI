// 메인 컴포넌트 - slideban.js
// 메인CSS
import "../css/slideban.css";
// 메인 데이터
import slideban_data from "../data/slideban";
// 제이쿼리
import $ from "jquery";

// 제이쿼리 로드구역 함수 /////////
function jqFn() {
  $(() => {
    // 슬라이드 배너 ==============================================
    // 양쪽버튼 : .abtn




  }); /////// jQB ////////
} ///////////// jqFn /////////////

function SlideBan(props) {
  return (
    <>
      {/* 모듈코드 */}
      <div className="slideban-wrap">
        <div className="slideban-inner">
          <div className="slideban-listbx">
            <ul id="slideban">
              {slideban_data.map((v, i) => (
                <li key={i}>
                  <img src={v.isrc} alt="배너이미지" />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 이동버튼 */}
        <a href="#" className="abtn lbtn">
          <img src="./images/lbtn.png" alt="왼쪽이동버튼" />
        </a>
        <a href="#" className="abtn rbtn">
          <img src="./images/rbtn.png" alt="오른쪽이동버튼" />
        </a>
      </div>

      {/* 빈루트를 만들고 JS로드함수포함 */}
      {jqFn()}
    </>
  );
}

export default SlideBan;
