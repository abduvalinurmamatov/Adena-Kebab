import React, {useEffect} from 'react';
import classes from "./Button.module.scss"
import Aos from "aos"
import "aos/dist/aos.css"
const Button = ({button, filter}) => {
    useEffect(() => {
        Aos.init({
            duration: 1000
        })
    }, [])
    return (
        <div>
            {
                button.map((cat) => {
                    return <button data-aos="fade-down-right" type="button" onClick={() => filter(cat)} className={classes.btn}>{cat}</button>
                })
            }
        </div>
    );
};

export default Button;