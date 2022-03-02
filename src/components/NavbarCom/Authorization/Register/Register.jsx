import React from 'react';
import classes from "./Register.module.scss"
import {FaLock, FaUser, MdAlternateEmail} from "react-icons/all";

const Register = ({setUsername, setPassword, registration, setEmail}) => {
    return (
        <div>
            <form id="register" className={classes.modalRight} id="Register">
                <div className={classes.modalRight__input}>
                    <span><FaUser/></span>
                    <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder="NAME"/>
                </div>
                <div className={classes.modalRight__input}>
                    <span><MdAlternateEmail/></span>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="EMAIL"/>
                </div>
                <div className={classes.modalRight__input}>
                    <span><FaLock/></span>
                    <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="PASSWORD"/>
                </div>
                <button onClick={registration}>REGISTER</button>
            </form>
        </div>
    );
};

export default Register;