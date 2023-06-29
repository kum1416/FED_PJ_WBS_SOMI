// 메인 컴포넌트 - imgswipe.js

// 데이터
import imgswipe_data from "../data/imgswipe";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// 메인CSS
import "../css/imgswipe.css";

// import required modules
import { EffectCards } from "swiper";
import { data } from "jquery";

// 제이쿼리
import $ from "jquery";

// 제이쿼리 로드구역 함수 /////////
function jqFn() {
  $(() => {

        // 마우스오버 버튼=============================================
    // 움직일 대상: 돌아다니는 원 .mover
    const mover = document.querySelector(".ban-mover");

    // 배너박스
    const bbx = document.querySelectorAll(".swipebx");
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
    
  // let slist = document.querySelectorAll(".swiper-slide");
  // console.log(slist);

  // const slSeq = () => {
  //   slist = document.querySelectorAll(".swiper-slide");
  //   slist.insertBefore(slist[slist.length - 1], slist[0]);
  // };
  // // 호출하기
  // for (let i = 0; i < 2; i++) slSeq();


  }); /////// jQB ////////
} ///////////// jqFn /////////////

export default function ImgSwipe(props) {
  // 데이터
  const isdt = imgswipe_data;


  return (
    <>
      <Swiper loop={true} effect={"cards"} grabCursor={true} modules={[EffectCards]} className="mySwiper imgswiper">
        {isdt.map((v, i) => (
          <SwiperSlide key={i}>
            <section className="swipebx">
              <img src={v.isrc} alt="스와이프이미지" />
            </section>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="ban-mover"></div>

      {/* 빈루트를 만들고 JS로드함수포함 */}
      {jqFn()}
    </>
  );
}
