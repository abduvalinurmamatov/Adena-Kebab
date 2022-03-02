import React, {useEffect, useState} from 'react';
import classes from "./Navbar.module.scss"
import {BiMenuAltRight} from "react-icons/all";
import {AiOutlineClose} from "react-icons/all";
import {ImExit} from "react-icons/all";
import {Link} from "react-router-dom";
import NavbarLogo from "./../../UI/Logo/Logo"
import Authorization from "./Authorization/Authorization";
import Shop from "./Shop/Shop";

const Header = () => {

    const token = localStorage.getItem("token")
    const [menuOpen, setMenuOpen] = useState(false)
    const [size, setSize] = useState({
        width: undefined,
        height: undefined,
    })
    console.log(token)

    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener("resize", handleResize)

        return () => window.removeEventListener("resize", handleResize)
    }, []);

    useEffect(() => {
        if (size.width > 768 && menuOpen) {
            setMenuOpen(false)
        }
    }, [size.width, menuOpen])
    const menuToggleHandler = () => {
        setMenuOpen((p) => !p)
    }
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
        <header className={classes.header}>
            <div className={classes.header__container}>
                <div className={classes.header__container__content}>
                    <div className={classes.header__container__content__logo}>
                        <span>Adena Kebab</span>
                    </div>
                    <nav className={`${classes.header__container__content__nav} ${menuOpen ? classes.isMenu : ""}`}>
                        <ul>
                            <li>
                                <Link to="/" href="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/Menu" href="/">Menu</Link>
                            </li>
                            <li>
                                <Link to="/Photos" href="/">Photos</Link>
                            </li>
                            <li>
                                <Link to="/Videos" href="/">Videos</Link>
                            </li>
                            <li>
                                <Link to="/Connection" href="/">Communication</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className={classes.header__container__content__icons}>
                        {token ? <a className={classes.exit} href="" onClick={logout}><ImExit /></a> :<Authorization/> }

                        <Link to="/cart"><Shop /></Link>
                        <div className={classes.header__container__content__icons__toggle}>

                            {
                                !menuOpen ? <BiMenuAltRight onClick={menuToggleHandler}/> :
                                    <AiOutlineClose onClick={menuToggleHandler}/>
                            }
                        </div>
                    </div>

                </div>
            </div>
        </header>
    );
};

export default Header;