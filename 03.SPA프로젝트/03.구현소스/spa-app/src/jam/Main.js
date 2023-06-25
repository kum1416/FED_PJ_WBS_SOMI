// jam 참깨 페이지 컴포넌트 - Main.js
import React from "react";
import Mfirst from "./modules/Mfirst";
import Text from "./modules/Text";
import Banner from "./modules/Banner";
import ImgSwipe from "./modules/ImgSwipe";
import SlideBan from "./modules/SlideBan";
// import FlowBtn from "./modules/FlowBtn";

const Main = () => {
        return(
            <>
              {/* 1.메인모듈 */}  
              <Mfirst po="left" />
              {/* <FlowBtn dd="0" /> */}
              {/* 2.텍스트모듈 */}  
              <Text ct="left" dd="0" />
              {/* 3.배너모듈 */}  
              <Banner />
              {/* 4.스와이프모듈 */}  
              {/* <ImgSwipe /> */}
              {/* 5.텍스트모듈 */}  
              <Text ct="center" dd="1" />
              {/* 6.슬라이드배너모듈 */}  
              {/* <SlideBan /> */}
            </>
        );
}; /////////////// Main /////////////

export default Main;