// 메인 컴포넌트 - Banner.js
// 메인CSS
import React from "react-dom";
import "../css/banner.css";
// 메인 데이터
import ban_data from "../data/banner";

import { Swiper, SwiperSlide } from "swiper/react";

// 제이쿼리
import $ from "jquery";
import { Link, useLocation } from "react-router-dom";

// 스와이프 연결
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";

// import "./styles.css";
import { Pagination } from "swiper";

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
        const bbx = document.querySelectorAll(".ban-wrap");
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
    }); /////// jQB ////////
} ///////////// jqFn /////////////

function Banner(props) {

    return (
        <section className="ban-cover">
            {/* 모듈코드 */}
            <div className="ban-flex">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={70}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper">
                    {/* 맵시작 */}
                    {ban_data.map((v, i) => (
                        <SwiperSlide key={i}>
                            <Link to={v.path}>
                                {/* {console.log(v)} */}
                                <div className="ban-wrap">
                                    {/* 전체박스 */}
                                    <div className="ban-inner">
                                        {/* a태그 감싸기 */}
                                        {/* 잼이미지 겉박스 */}
                                        <div className="ban-imgbx">
                                            <div
                                                className="ban-img__hover"
                                                style={{ backgroundColor: v.color }}>
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
                                        {/* 버튼박스 */}
                                        <div
                                            className="mbtnbx"
                                            style={{ backgroundColor: v.color }}>
                                            <div className="mainbtn">
                                                <div className="runtxt2">
                                                    <span>BUY NOW!</span>
                                                    <span>BUY NOW!</span>
                                                    <span>BUY NOW!</span>
                                                    <span>BUY NOW!</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                    {/* 맵끝 */}
                </Swiper>
            </div>

            <div className="ban-mover"></div>

            {/* 빈루트를 만들고 JS로드함수포함 */}
            {jqFn()}
        </section>
    );
}

export default Banner;
