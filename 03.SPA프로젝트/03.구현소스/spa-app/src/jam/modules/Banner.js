// 메인 컴포넌트 - Banner.js
// 메인CSS
import React from "react-dom"
import "../css/banner.css";
// 메인 데이터
import ban_data from "../data/banner";
// 제이쿼리
import $ from "jquery";

// 제이쿼리 로드구역 함수 /////////
function jqFn() {
  $(() => {
    console.log("로딩완료!");

    // BUY NOW 버튼===================================
    const mbtnbx = document.querySelector(".mbtnbx");

    // 마우스오버 버튼=============================================
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

    // 배너 가로드래그=============================================
    const drag = document.querySelector(".ban-flex"); 
    console.log(drag);

    function dragBan(){
        drag.draggable({
            axis: "x",
          })
          .css({
            transition: ".5s ease-out",
          }); /// css ///
    
        // 한계값 //////////
        let fpt = $(window).width() / 3;
        console.log("첫번째한계값:", fpt);
        
        let lpt = drag.width() - fpt * 2;
        console.log("마지막한계값:", lpt);
    
        $("html,body").on("mousedown mouseup mousemove", () => {
            // 1. left위치값
            let mpos = drag.offset().left;
            console.log("현재left:", mpos);
    
            // 2. 처음한계값 체크하여 제한하기
            if (mpos > fpt) {
                // 첫번째한계값에 고정!
                drag.css({
                    left: fpt + "px",
                }); ///// css //////
            } /////// if //////
    
            // 3. 마지막한계값 체크하여 제한하기
            else if (mpos < -lpt) {
                // 마지막한계값에 고정
                drag.css({
                    left: -lpt + "px",
                }); ///// css //////
            } ///// else if //////
        }); //////////// 마우스이벤트함수 ////////
    }; /////////////////// dragBan /////////////////////


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
                  <div className="ban-img__hover" style={{backgroundColor : v.color}}>
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
