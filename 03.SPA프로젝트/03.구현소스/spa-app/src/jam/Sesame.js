// jam 참깨 페이지 컴포넌트 - Sesame.js
import React from "react";
import Concept from "./modules/Concept";
import Mfirst from "./modules/Mfirst";
import SubBanner from "./modules/SubBanner";

const Sesame = () => {
        return(
            <>
                <Mfirst cg="change" si="imgsize" to="top" />
                <SubBanner />
                <Concept />
            </>
        );
}; /////////////// Sesame /////////////

export default Sesame;