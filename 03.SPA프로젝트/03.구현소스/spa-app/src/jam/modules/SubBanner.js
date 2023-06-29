// 메인 컴포넌트 - Banner.js
// 메인CSS
import React from "react-dom";
import "../css/subbanner.css";
// 메인 데이터
import ban_data from "../data/banner";
// 서브 페이지 배너 데이터
import almond_data from "../data/almond";
import cashew_data from "../data/cashew";
import hazelnut_data from "../data/hazelnut";
import peanut_data from "../data/peanut";
import sesame_data from "../data/sesame";

// 제이쿼리
import $ from "jquery";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";


// 제이쿼리 로드구역 함수 /////////
function jqFn() {
  $(() => {
    console.log("로딩완료!");

    // BUY NOW 버튼==============================================
    const mbtnbx = document.querySelector(".mbtnbx");

    // 마우스오버 버튼=============================================
    // 움직일 대상: 돌아다니는 원 .mover
    const mover = document.querySelector(".ban-mover");

    // 배너박스
    const bbx = document.querySelectorAll(".sub_ban-wrap");
    // 갭 // 가로크기 //

    bbx.forEach((ele) => {
      ele.onmousemove = function (e) {
        e.stopPropagation();
        // 마우스 포인터 위치
        // console.log("x:", e.pageX, "\ny:", e.pageY);
        // console.log(window.scrollY);

        // 위치값 보정 (gap은 무버크기의 절반)
        var posx = e.pageX - 25;
        var posy = e.pageY - 50;

        // 무버 위치값 이동
        mover.style.top = posy + "px";
        mover.style.left = posx + "px";
      };

      ele.onmouseenter = () => {
        // 들어오면 나타남
        mover.style.display = "block";
      }; ///////// mouseenter /////////////////
      ele.onmouseleave = () => {
        // 나가면 사라짐
        mover.style.display = "none";
      }; ///////// mouseleave /////////////////
    }); //////////// mousemove 이벤트함수 //////


    // if(!document.querySelector('.aaaa')){ return }
    let aa = $('.sub_ban-cover').offset().top;
    let bb = $('.sub_ban-tbg').height();
    let cc = aa - bb

    $('.sub_ban-tbg').css({
      transform : `translateY(${cc}px)`
    })
    console.log( aa,bb)
  }); /////// jQB ////////
} ///////////// jqFn /////////////

function SubBanner(props) {
  
  return (
    <section className="sub_ban-cover">
      <div className="sub_ban-title">
        
        <h2>{props.cat.toUpperCase()}</h2>
        <p>{props.cat}</p>
      </div>
      <div className="sub_ban-tbg"></div>
      {/* 모듈코드 */}
      <div className="sub_ban-flex">

        {props.data.map((v, i) => (
          <div className="sub_ban-wrap" key={i}>
            {/* 전체박스 */}
            <div className="sub_ban-inner">
              {/* a태그 감싸기 */}
              <a href="#">
                {/* 잼이미지 겉박스 */}
                <div className="sub_ban-imgbx">


                    {/* 색상같음 */}
                  <div className="sub_ban-img__hover" style={{ backgroundColor: v.color }} >

                    {/* 호버시 코드 */}
                    <div className="sub_hoverbx" >
                      {/* 삼항연산자를 이용한 v.hsrc가 빈칸이니? 맞으면 아무것도출력안함 빈칸이 아니면 출력함 */}
                      {
                        v.hsrc == "" ? null : <img src={ v.hsrc } alt="잼이미지" />
                      }
                      
                    </div> 
                    
                  </div>

                  {/* 평범상태 코드 */}
                  <div className="sub_ban-img__push">
                    <div className="sub_pushbx">
                      <img src={v.isrc} alt="잼이미지" />
                    </div>
                  </div>



                </div>
                {/* 잼텍스트 겉박스 */}
                <div className="sub_ban-txtbx">
                  {/* 잼이름박스 */}
                  <h2>{v.tit}</h2>
                  {/* 잼가격겉박스 */}
                  <div className="sub_ban-pribx">
                    <div className="sub_ban-price">
                      <div>{v.price}</div>
                    </div>
                  </div>
                </div>
              </a>
              {/* 버튼박스 */}
              <a href="#">
                <div className="mbtnbx" style={{ backgroundColor: v.color }}>
                  <div className="mainbtn">
                    <div className="runtxt2">
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
        {/* 맵끝 */}


      </div>

      <div className="ban-mover"></div>

      {/* 빈루트를 만들고 JS로드함수포함 */}
      {jqFn()}
    </section>
  );
}

export default SubBanner;
