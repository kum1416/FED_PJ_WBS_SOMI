// jam 참깨 페이지 컴포넌트 - Almond.js
import React from "react";
import Concept from "./modules/Concept";
import Mfirst from "./modules/Mfirst";
import SubBanner from "./modules/SubBanner";

const Almond = () => {
        return(
            <>
                <Mfirst cg="change" si="imgsize" to="top" />
                <div className="subpage">
                    <SubBanner cat="almond" />
                    <Concept img={Math.ceil(Math.random()*3)} />
                </div>
            </>
        );
}; /////////////// Almond /////////////

export default Almond;