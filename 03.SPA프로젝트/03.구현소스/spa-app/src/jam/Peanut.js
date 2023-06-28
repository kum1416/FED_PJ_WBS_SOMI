// jam 참깨 페이지 컴포넌트 - Peanut.js
import React from "react";
import Concept from "./modules/Concept";
import Mfirst from "./modules/Mfirst";
import SubBanner from "./modules/SubBanner";
import peanut_data from "./data/peanut";

const Peanut = () => {
        return(
            <>
                <Mfirst cg="change" si="imgsize" to="top" />
                <SubBanner cat="peanut" data={peanut_data} />
                <Concept img="1" />
            </>
        );
}; /////////////// Peanut /////////////

export default Peanut;