// jam 참깨 페이지 컴포넌트 - Peanut.js
import React from "react";
import Concept from "./modules/Concept";
import Mfirst from "./modules/Mfirst";

const Peanut = () => {
        return(
            <>
                <Mfirst cg="change" />
                <Concept />
            </>
        );
}; /////////////// Peanut /////////////

export default Peanut;