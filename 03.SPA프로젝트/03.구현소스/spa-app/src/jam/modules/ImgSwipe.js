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
      {/* 빈루트를 만들고 JS로드함수포함 */}
      {jqFn()}
    </>
  );
}
