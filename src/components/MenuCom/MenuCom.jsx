import React, {useContext, useEffect} from 'react';
import classes from "./MenuCom.module.scss"
import {RiShoppingBasket2Line} from "react-icons/all";
import {Context} from "../../context";
import Aos from "aos"
import "aos/dist/aos.css"

const MenuCom = ({menuItem}) => {
    const {addtoCard} = useContext(Context);
    // console.log(menuItem)
    useEffect(() => {
        Aos.init({
            duration: 1000
        })
    }, [])
    return (
        <div className={classes.menu}>
            {
                menuItem.map((item) => {
                    return <div data-aos="fade-down-right" className={classes.menu__box}>
                        <div className={classes.menu__box__image}>
                            <img src={item.image} alt=""/>
                            {/*<p>{item.id}</p>*/}
                        </div>
                        <div className={classes.menu__box__content}>
                            <div className={classes.menu__box__content__title}>
                                <div className={classes.menu__box__content__title__name}>
                                    <p >{item.name}</p>
                                </div>
                                <div className={classes.menu__box__content__title__price}>
                                    <p >{item.price}</p>
                                </div>
                            </div>
                            <div className={classes.menu__box__content__description}>
                                <p >{item.content}</p>
                                <button  href="#" onClick={() => addtoCard(item)}><RiShoppingBasket2Line/></button>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    );
};

export default MenuCom;