// jam로고 컴포넌트
import React from "react";

const Logo = (props) => {
    const isrc = {
        logo: "./images.logo.svg/"
    }
    const mystyle = {
        width: "45px",
        height: "45px"
    }

    return(
        <h1 style={mystyle[props]}>
            <img src={isrc.logo} />
        </h1>
    );

}; ////////// Logo /////////////

export default Logo;