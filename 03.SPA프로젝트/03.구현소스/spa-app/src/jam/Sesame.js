// jam 참깨 페이지 컴포넌트 - Sesame.js
import React from "react";
import Banner from "./modules/Banner";
import Concept from "./modules/Concept";
import Mfirst from "./modules/Mfirst";

const Sesame = () => {
        return(
            <>
                <Mfirst cg="change" si="imgsize" />
                <Banner st="style" gi="grid" />
                <Concept />
            </>
        );
}; /////////////// Sesame /////////////

export default Sesame;