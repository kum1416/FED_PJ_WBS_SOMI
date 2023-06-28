// jam 참깨 페이지 컴포넌트 - Cashew.js
import React from "react";
import Concept from "./modules/Concept";
import Mfirst from "./modules/Mfirst";
import SubBanner from "./modules/SubBanner";
import cashew_data from "./data/cashew";

const Cashew = () => {
        return(
            <>
                <Mfirst cg="change" si="imgsize" to="top" />
                <SubBanner cat="cashew" data={cashew_data}/>
                <Concept img="1"/>
            </>
        );
}; /////////////// Cashew /////////////

export default Cashew;