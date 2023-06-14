// jam로고 컴포넌트
import React from "react";

const Logo = (props) => {
    const isrc = {
        logo: "./images.logo.svg/"
    }

    const mystyle = {
        top: {
            width: "120px",
            height: "60px"
        },
    };

    return(
        <h1 style={mystyle[props.lg]}>
            <img src={isrc.logo} />
        </h1>
    );

}; ////////// Logo /////////////

export default Logo;