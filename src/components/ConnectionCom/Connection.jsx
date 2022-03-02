import React, {useEffect} from 'react';
import classes from "./Connection.module.scss"
import PhotoBG from "../../assets/fixedbg.089a5749.jpg";
import Chef1 from "../../assets/chef1.jpg"
import Chef2 from "../../assets/chef2.jpg"
import Chef3 from "../../assets/chef3.jpg"
import Chef4 from "../../assets/chef4.jpg"
import Aos from "aos"
import "aos/dist/aos.css"

const CommunicationCom = () => {
    useEffect(() => {
        Aos.init({
            duration: 1000
        })
    }, [])
    return (
        <div className={classes.communication}>
            <img className={classes.communication__image} src={PhotoBG} alt="logo"/>
            <div className={classes.header}>
                <div className={classes.header__container}>
                    <div className={classes.header__container__row}>
                        <p data-aos="fade-down-right">OSHPAZLAR</p>
                        <h1 data-aos="fade-down-right">PROFESSIONAL OSHPAZLAR</h1>
                        <div className={classes.header__container__row__col}>
                            <div data-aos="fade-down-right" className={classes.header__container__row__col__card}>
                                <img src={Chef1} alt=""/>
                            </div>
                            <div data-aos="fade-down-right" className={classes.header__container__row__col__card}>
                                <img src={Chef2} alt=""/>
                            </div>
                            <div data-aos="fade-down-right" className={classes.header__container__row__col__card}>
                                <img src={Chef3} alt=""/>
                            </div>
                            <div data-aos="fade-down-right" className={classes.header__container__row__col__card}>
                                <img src={Chef4} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className={classes.header__container__row}>
                        <p data-aos="fade-down-right">NIMA UCHUN BIZ</p>
                        <h1 data-aos="fade-down-right">BIZNING RESTORANIMIZNI TANLAYSIZ</h1>
                        <div className={classes.header__container__row__location}>
                            <div data-aos="fade-down-right" className={classes.header__container__row__location__items}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3457.001602918738!2d69.28271434043789!3d41.31781918886816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b2d901c2def%3A0x1bb221455121c6e8!2z0JPQu9Cw0LLQv9C-0YfRgtCw0LzRgg!5e1!3m2!1sru!2s!4v1639548267675!5m2!1sru!2s"
                                    allowFullScreen="" loading="lazy"></iframe>
                            </div>
                            <div data-aos="fade-down-right"  className={classes.header__container__row__location__items}>
                                <div data-aos="fade-down-right" className={classes.header__container__row__location__items__user}>
                                    <input  type="text" placeholder="Your Name:"/>
                                    <input  type="email" placeholder="Your Email:"/>
                                </div>
                                <div  className={classes.header__container__row__location__items__subject}>
                                    <input  type="text" placeholder="Subject"/>
                                </div>
                                <div className={classes.header__container__row__location__items__comment}>
                                    <textarea cols=""/>
                                </div>
                                <div className={classes.header__container__row__location__items__submit}>
                                    <input  type="submit" value="Send"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommunicationCom;