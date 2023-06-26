// 메인 컴포넌트 - imgswipe.js
// 메인CSS
import "../css/imgswipe.css"
// 데이터
import imgswipe_data from "../data/imgswipe";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { EffectCards } from "swiper";
import { data } from "jquery";

export default function ImgSwipe(props) {
  // 데이터
  const isdt = imgswipe_data;

  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {
          isdt.map((v,i)=>
          <SwiperSlide key={i}>
            <section className="swipebx">
              <img src={v.isrc} alt="스와이프이미지"/>
            </section>
          </SwiperSlide>
          )
        }
      </Swiper>
    </>
  );
}
