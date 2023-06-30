// jam로고 컴포넌트
import React from "react";

const Logo = (props) => {
    const isrc = {
        logo: "./images/logo.svg"
    }

    

    return(
        <h1>
            <img src={isrc.logo} />
        </h1>
    );

}; ////////// Logo /////////////

export default Logo;