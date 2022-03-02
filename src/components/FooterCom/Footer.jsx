import React, {useEffect} from 'react';
import classes from './Footer.module.scss'
import {FaTelegramPlane} from "react-icons/all";
import {FaTwitter} from "react-icons/all";
import {FaInstagram} from "react-icons/all";
import Aos from "aos"
import "aos/dist/aos.css"

const Footer = () => {
    useEffect(() => {
        Aos.init({
            duration: 1000
        })
    }, [])
    return (
        <div>
            <div className={classes.footer}>
                <div className={classes.footer__container}>
                    <div className={classes.footer__container__box}>
                        <div className={classes.footer__container__box__item}>
                            <a data-aos="fade-down-right" href="tel:+99871 224 04 44; +99899 004 40 44">TEL: +99871 224 04 44| +99899 004 40 44</a>
                            <p data-aos="fade-down-right">
                                Юнусабадский район улица Мойкурган 7 квартал рядом с домом 47 Ташкент UZ, 100190, Узбекистан
                            </p>
                        </div>
                        <div className={classes.footer__container__box__item}   >
                            <a data-aos="fade-down-right" href="#"><FaTelegramPlane /></a>
                            <a data-aos="fade-down-right" href="#"> <FaTwitter /> </a>
                            <a data-aos="fade-down-right" href="#"> <FaInstagram /> </a>
                        </div>
                    </div>
                    <div data-aos="fade-down-right" className={classes.footer__container__text}>
                        © 2021 by Nurmamatov Abduvali. Proudly created with It-Academy
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;