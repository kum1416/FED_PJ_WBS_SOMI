// jam 참깨 페이지 컴포넌트 - Main.js
import React from "react";
import Mfirst from "./modules/mfirst";
import Text from "./modules/text";

const Main = () => {
        return(
            <>
              {/* 1.메인모듈 */}  
              <Mfirst />
              {/* 2.텍스트모듈 */}  
              <Text />
            </>
        );
}; /////////////// Main /////////////

export default Main;