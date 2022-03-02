import React, {useContext} from 'react';
import classes from "./Login.module.scss"
import {FaLock, FaUser} from "react-icons/all";
import {Context} from "../../../../context";

const Login = () => {
    const { login, setLoginUsername, setLoginPassword} = useContext(Context)
    async  function logout(){
        let token = localStorage.getItem('token')
        console.log(token)
        const response = await fetch("http://81.95.232.205:8009/account/logout/", {
            method: "POST",
            headers: {
                "Authorization": `Token ${token}`
            },
        });
        window.location.reload()
        localStorage.clear()
        console.log(response)
    }
    return (
        <div>
            <form id="login" className={classes.modalLeft} id="Login">
                <div className={classes.modalLeft__input}>
                    <span><FaUser/></span>
                    <input onChange={(e) => setLoginUsername(e.target.value)} type="text" placeholder="NAME"/>
                </div>
                <div className={classes.modalLeft__input}>
                    <span><FaLock/></span>
                    <input onChange={(e) =>setLoginPassword(e.target.value)} type="password" placeholder="PASSWORD"/>
                </div>
                <button  onClick={login}>Login</button>
                <a onClick={logout} className={classes.modalLeft__logout}>Log Out</a>
            </form>
        </div>
    );
};

export default Login;