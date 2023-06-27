// jam 참깨 페이지 컴포넌트 - Hazelnut.js
import React from "react";
import Banner from "./modules/Banner";
import Concept from "./modules/Concept";
import Mfirst from "./modules/Mfirst";

const Hazelnut = () => {
        return(
            <>
                <Mfirst cg="change" si="imgsize" />
                <Banner st="style" gi="grid" />
                <Concept />
            </>
        );
}; /////////////// Hazelnut /////////////

export default Hazelnut;