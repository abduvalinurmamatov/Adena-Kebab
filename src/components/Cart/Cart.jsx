import React, {useContext, useEffect} from 'react';
import classes from "./Cart.module.scss"
import {Context} from "../../context";
import {RiShoppingBasket2Line} from "react-icons/all";
import Aos from "aos"
import "aos/dist/aos.css"
import Login from "../NavbarCom/Authorization/Login/Login";
import Register from "../NavbarCom/Authorization/Register/Register";

const Cart = () => {

    // async function addToCart(event) {
    //     const token  = localStorage.getItem('token');
    //     const user = localStorage.getItem('user');
    //     event.preventDefault();
    //     const response = await fetch("http://81.95.232.205:8009/Card/", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Authorization" : token ${token}
    //         },
    //         body: JSON.stringify({
    //             user_id: user,
    //             products: basketArray
    //         }),
    //     });
    //     const data = await response.json();
    //
    // }

    useEffect(() => {
        Aos.init({
            duration: 1000
        })
    }, [])
    const {cart} = useContext(Context);
    return (
        <div className={classes.cart}>
            <div className={classes.cart__container}>
                <div className={classes.menu}>
                    {
                        cart.map((item) => {
                            return <div data-aos="fade-down-right" className={classes.menu__box}>
                                <div className={classes.menu__box__image}>
                                    <img src={item.image} alt=""/>
                                    {/*<p>{item.id}</p>*/}
                                </div>
                                <div className={classes.menu__box__content}>
                                    <div className={classes.menu__box__content__title}>
                                        <div className={classes.menu__box__content__title__name}>
                                            <p>{item.name}</p>
                                        </div>
                                        <div className={classes.menu__box__content__title__price}>
                                            <p>{item.price}</p>
                                        </div>
                                    </div>
                                    <div className={classes.menu__box__content__description}>
                                        <p>{item.content}</p>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
            <div className={classes.Accepted}>
                <button className={classes.Accepted__btn}>Order Was Accepted</button>
            </div>
</div>
)
    ;
};

export default Cart;