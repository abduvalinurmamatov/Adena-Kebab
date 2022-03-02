import React, {useEffect} from 'react';
import classes from "./Header.module.scss"
import {FaCheckDouble} from "react-icons/all";
import {BsPlay} from "react-icons/all";
import HomeBg from "./../../assets/homebg.jpg"
import HeroBG from "./../../assets/hero-bg.jpg"
import Chef from "./../../assets/Chef.jpg"
import MenuCom from "../MenuCom/MenuCom";
import FoodsMenu from "../../Page/AllMenuFoods/FoodsMenu";
import Aos from "aos"
import "aos/dist/aos.css"

const Hero = () => {
    useEffect(() => {
        Aos.init({
            duration: 1000
        })
    }, [])
    return (
       <div>
           <div className={classes.header}>
               <img className={classes.header__image} src={HomeBg} alt="background"/>
               <div className={classes.header__content}>
                   <div className={classes.header__content__first}>
                       <div className={classes.header__content__first__image}>
                           <img  src={HeroBG} alt=""/>
                       </div>
                       <div className={classes.header__content__first__title}>
                           <div className={classes.header__content__first__title__container}>
                               <div data-aos="fade-down-right" className={classes.header__content__first__title__container__items}>
                                   <h1 ><span>ADANA KEBABGA</span> HUSH KELIBSIZ</h1>
                                   <p >Ajoyib taomlarni etkazib beramz!</p>
                                   <a  href="#">BIZNING MENYU</a>
                               </div>
                               <div data-aos="fade-down-right"  className={classes.header__content__first__title__container__link}>
                                   <a  href="#"><BsPlay/></a>
                               </div>
                           </div>
                       </div>
                   </div>
                   {/*SECOND*/}
                   <div className={classes.header__content__second}>
                       <div data-aos="fade-down-right" className={classes.header__content__second__container}>
                           <div className={classes.header__content__second__container__items}>
                               <h1 >Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h1>
                               <p>
                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                   incididunt
                                   ut labore et dolore magna aliqua.
                               </p>
                               <p >
                                   <span><FaCheckDouble/></span> Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                               </p>
                               <p >
                                   <span><FaCheckDouble/></span> Duis aute irure dolor in reprehenderit in voluptate velit.
                               </p>
                               <p >
                                   <span><FaCheckDouble/></span> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                   dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat
                                   nulla pariatur.
                               </p>
                               <p >
                                   Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                   reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                                   sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                   est laborum
                               </p>
                           </div>
                           <div className={classes.header__content__second__container__items}>
                               <img src={Chef} alt=""/>
                           </div>
                       </div>
                   </div>
                   <div className={classes.header__content__third}>
                       <div className={classes.header__content__third__container}>
                           <h4 data-aos="fade-down-right">NEGA BIZ</h4>
                           <h1 data-aos="fade-down-right">NIMA UCHUN BIZNING RESTORANIMIZNI TANLAYSIZ</h1>
                           <div className={classes.header__content__third__container__box}>
                               <div data-aos="fade-down-right" className={classes.header__content__third__container__box__items}>
                                   <span >01</span>
                                   <h1>Lorem Ipsum</h1>
                                   <p >Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat</p>
                               </div>
                               <div data-aos="fade-down-right" className={classes.header__content__third__container__box__items}>
                                   <span >02</span>
                                   <h1 >Repellat Nihil</h1>
                                   <p >Dolorem est fugiat occaecati voluptate velit esse. Dicta veritatis dolor quod et vel dire leno para dest</p>
                               </div>
                               <div data-aos="fade-down-right" className={classes.header__content__third__container__box__items}>
                                   <span >03</span>
                                   <h1>Ad ad velit qui</h1>
                                   <p >Molestiae officiis omnis illo asperiores. Aut doloribus vitae sunt debitis quo vel nam quis</p>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </div>
    );
};

export default Hero;