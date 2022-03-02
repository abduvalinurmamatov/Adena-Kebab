import React from 'react';
import classes from "./Logo.module.scss"
import NavbarLogo from "./../../assets/LogoAdenaKebav.svg"
const Logo = () => {
    return (
        <img src={<NavbarLogo/>} alt=""/>
    );
};

export default Logo;