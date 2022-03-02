import React from 'react';
import HeaderCom from "./../../components/HeaderCom/HeaderCom"
import MenuCom from "../../components/MenuCom/MenuCom";
import FoodsMenu from "../AllMenuFoods/FoodsMenu";
import PhotoCom from "../../components/PhotoCom/PhotoCom";
import Videos from "../../components/VideosCom/Videos";
import Connection from "../../components/ConnectionCom/Connection";
const Header = () => {
    return (
        <div>
            <HeaderCom />
            <FoodsMenu />
            <PhotoCom />
            <Videos />
            <Connection />
        </div>
    );
};

export default Header;