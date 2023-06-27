// jam 참깨 페이지 컴포넌트 - Cashew.js
import React from "react";
import Banner from "./modules/Banner";
import Concept from "./modules/Concept";
import Mfirst from "./modules/Mfirst";

const Cashew = () => {
        return(
            <>
                <Mfirst cg="change" si="imgsize" />
                <Banner st="style" gi="grid" />
                <Concept />
            </>
        );
}; /////////////// Cashew /////////////

export default Cashew;