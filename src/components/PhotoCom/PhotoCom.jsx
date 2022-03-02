import React, {useEffect} from 'react';
import classes from "./PhotoCom.module.scss"
import PhotoBG from "./../../assets/fixedbg.089a5749.jpg"
import Appearance1 from "./../../assets/appearance1.0.jpg"
import Appearance2 from "./../../assets/appearance2.jpg"
import Appearance3 from "./../../assets/appearance3.jpg"
import Appearance4 from "./../../assets/appearance4.jpg"
import Aos from "aos"
import "aos/dist/aos.css"

const PhotoCom = () => {
    useEffect(() => {
        Aos.init({
            duration: 1000
        })
    }, [])
    return (
        <section>
            <img className={classes.image} src={PhotoBG} alt=""/>
            <div className={classes.photo}>
                <div className={classes.photo__container}>
                    <div className={classes.photo__container__item}>
                        <p>RASMLAR</p>
                        <h1>RESTORAN KO'RINISH</h1>

                        <div className={classes.photo__container__item__content}>
                            <div data-aos="fade-down-right" className={classes.photo__container__item__content__card}>
                                <img src={Appearance1} alt=""/>
                            </div>
                            <div data-aos="fade-down-right" className={classes.photo__container__item__content__card}>
                                <img src={Appearance2} alt=""/>
                            </div>
                            <div data-aos="fade-down-right" className={classes.photo__container__item__content__card}>
                                <img src={Appearance3} alt=""/>
                            </div>
                            <div data-aos="fade-down-right" className={classes.photo__container__item__content__card}>
                                <img src={Appearance4} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className={classes.photo__container__item}>
                        <p data-aos="fade-down-right">MAROSM</p>
                        <h1 data-aos="fade-down-right">MAXSUS MAROSIMLAR JOYI</h1>

                        <div data-aos="fade-down-right" className={classes.photo__container__item__content}>
                            <div data-aos="fade-down-right" className={classes.photo__container__item__content__card}>
                                <img src={Appearance4} alt=""/>
                            </div>
                            <div data-aos="fade-down-right" className={classes.photo__container__item__content__card}>
                                <img src={Appearance2} alt=""/>
                            </div>
                            <div data-aos="fade-down-right" className={classes.photo__container__item__content__card}>
                                <img src={Appearance3} alt=""/>
                            </div>
                            <div data-aos="fade-down-right" className={classes.photo__container__item__content__card}>
                                <img src={Appearance1} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PhotoCom;