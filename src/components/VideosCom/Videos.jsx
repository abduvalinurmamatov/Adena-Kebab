import React, {useEffect} from 'react';
import classes from './Videos.module.scss'
import PhotoBg from './../../assets/fixedbg.089a5749.jpg'
import Aos from "aos"
import "aos/dist/aos.css"
const Videos = () => {
    useEffect(() => {
        Aos.init({
            duration: 1000
        })
    }, [])
    return (
        <section className={classes.section_video}>
            <img src={PhotoBg} alt=""/>
            <div className={classes.video}>
                <div className={classes.video__container}>
                    <p data-aos="fade-down-right">VIDEO</p>
                    <h1 data-aos="fade-down-right">TAOM TAYYORLASH JARAYONI</h1>
                    <div className={classes.video__container__box}>
                        <div data-aos="fade-down-right" className={classes.video__container__box__items}>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/L1mAtyBI77I"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen >
                            </iframe>
                        </div>
                        <div data-aos="fade-down-right" className={classes.video__container__box__items}>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/L1mAtyBI77I"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen >
                            </iframe>
                        </div>
                        <div data-aos="fade-down-right" className={classes.video__container__box__items}>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/L1mAtyBI77I"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen >
                            </iframe>
                        </div>
                        <div data-aos="fade-down-right" className={classes.video__container__box__items}>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/L1mAtyBI77I"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen >
                            </iframe>
                        </div>
                        <div data-aos="fade-down-right" className={classes.video__container__box__items}>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/L1mAtyBI77I"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen >
                            </iframe>
                        </div>
                        <div data-aos="fade-down-right" className={classes.video__container__box__items}>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/L1mAtyBI77I"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen >
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Videos;