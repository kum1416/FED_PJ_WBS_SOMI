// jam 참깨 페이지 컴포넌트 - Hazelnut.js
import React from "react";
import Concept from "./modules/Concept";
import Mfirst from "./modules/Mfirst";
import SubBanner from "./modules/SubBanner";
import hazelnut_data from "./data/hazelnut";

const Hazelnut = () => {
        return(
            <>
                <Mfirst cg="change" si="imgsize" to="top" />
                <SubBanner cat="hazelnut" data={hazelnut_data} />
                <Concept img="1" />
            </>
        );
}; /////////////// Hazelnut /////////////

export default Hazelnut;