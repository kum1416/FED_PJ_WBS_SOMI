// jam 참깨 페이지 컴포넌트 - Almond.js
import React from "react";
import Concept from "./modules/Concept";
import Mfirst from "./modules/Mfirst";
import Banner from "./modules/Banner";

const Almond = () => {
        return(
            <>
                <Mfirst cg="change" />
                <div className="subpage">
                    <Banner st="style" gi="grid" />
                    <Concept />
                </div>
            </>
        );
}; /////////////// Almond /////////////

export default Almond;