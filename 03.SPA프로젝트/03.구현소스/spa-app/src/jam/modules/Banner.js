// 메인 컴포넌트 - Banner.js
// 메인CSS
import "../css/banner.css";
// 메인 데이터
import ban_data from "../data/banner";
// 제이쿼리
import $ from "jquery";

// 제이쿼리 로드구역 함수 /////////
function jqFn() {
  $(() => {
    console.log("로딩완료!");

    // BUY NOW 버튼
    const mbtnbx = document.querySelector(".mbtnbx");

    // 움직일 대상: 돌아다니는 원 .mover
    const mover = document.querySelector(".ban-mover");

    // 배너박스
    const bbx = document.querySelector(".ban-wrap");
    // 갭 // 가로크기 //

    bbx.onmousemove = function (e) {
      e.stopPropagation();
      // 마우스 포인터 위치
      console.log("x:", e.pageX, "\ny:", e.pageY);

      // 위치값 보정 (gap은 무버크기의 절반)
      var posx = e.pageX - 25;
      var posy = e.pageY - 50;

      // 무버 위치값 이동
      mover.style.top = posy + "px";
      mover.style.left = posx + "px";
    }; //////////// mousemove 이벤트함수 //////

    bbx.onmouseenter = () => {
      // 들어오면 나타남
      mover.style.display = "block";
    }; ///////// mouseenter /////////////////
    bbx.onmouseleave = () => {
      // 나가면 사라짐
      mover.style.display = "none";
    }; ///////// mouseleave /////////////////


    
  }); /////// jQB ////////
} ///////////// jqFn /////////////

function Banner(props) {
  return (
    <section className="ban-cover">
      {/* 모듈코드 */}
      <div className="ban-flex">
        {ban_data.map((v, i) => (
          <div className="ban-wrap" key={i}>
            {/* 전체박스 */}
            <div className="ban-inner">
              {/* a태그 감싸기 */}
              <a href="#">
                {/* 잼이미지 겉박스 */}
                <div className="ban-imgbx">
                  <div className="ban-img__hover">
                    <div className="hoverbx">
                      <img src={v.hsrc} alt="잼이미지" />
                    </div>
                  </div>
                  <div className="ban-img__push">
                    <div className="pushbx">
                      <img src={v.isrc} alt="잼이미지" />
                    </div>
                  </div>
                </div>
                {/* 잼텍스트 겉박스 */}
                <div className="ban-txtbx">
                  {/* 잼이름박스 */}
                  <h2>{v.tit}</h2>
                  {/* 잼가격겉박스 */}
                  <div className="ban-pribx">
                    <div className="ban-price">
                      <div>{v.price}</div>
                    </div>
                  </div>
                </div>
              </a>
              {/* 버튼박스 */}
              <a href="#">
                <div className="mbtnbx">
                  <div className="mainbtn">
                    <div className="runtxt">
                      <span>BUY NOW!</span>
                      <span>BUY NOW!</span>
                      <span>BUY NOW!</span>
                      <span>BUY NOW!</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="ban-mover"></div>

      {/* 빈루트를 만들고 JS로드함수포함 */}
      {jqFn()}
    </section>
  );
}

export default Banner;
