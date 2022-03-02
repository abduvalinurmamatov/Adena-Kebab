import React, {useContext, useState} from 'react';
import classes from "./Authorization.module.scss"
import {FaUser} from "react-icons/all";
import Register from "./Register/Register";
import Login from "./Login/Login";
import {Context} from "../../../context";


const Authorization = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [usLogin, setIsLogin] = useState(false)
    const {setEmail, registration, setPassword, setUsername, login, setLoginUsername, setLoginPassword} = useContext(Context)



    return (
        <div>
            <a href="#" className={classes.userIcon} onClick={() => setModalIsOpen(true)}><FaUser/></a>

            <div className={`${classes.modal} ${modalIsOpen ? classes.active : ""}`}
                 onClick={() => setModalIsOpen(false)}>
                <h1><span>user</span>login</h1>

                <div className={` ${classes.modal__content} ${modalIsOpen ? classes.modal__active : ""}`}
                     onClick={e => e.stopPropagation()}>
                    <div className={classes.modal__content__link}>
                        <a onClick={() => setIsLogin(false)} className={classes.modal__content__link__btn}>Register</a>
                        <a onClick={() => setIsLogin(true)} className={classes.modal__content__link__btn}>Login</a>
                    </div>

                    {usLogin ? <Login setLoginPassword={setLoginPassword} setLoginUsername={setLoginUsername}/> :

                        <Register setEmail={setEmail} registration={registration} setPassword={setPassword}
                                  setUsername={setUsername}/>}

                </div>
            </div>
        </div>
    );
};


export default Authorization;