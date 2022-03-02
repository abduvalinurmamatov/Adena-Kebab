import React from 'react';
import {HiShoppingCart} from "react-icons/all";
import classes from "./Shop.module.scss"
const Shop = () => {
    return (
        <div className={classes.shop}>
            <a href="#"><HiShoppingCart/></a>

        </div>
    );
};

export default Shop;