import React, {useContext, useState, useEffect} from 'react';
import classes from "./FoodsMenu.module.scss"
import MenuCom from "../../components/MenuCom/MenuCom";
import Button from "../../components/MenuCom/Buuton/Button";
import {Context} from "../../context";

const FoodsMenu = () => {

    const {array} = useContext(Context);
    const allCategories = ['All', ...new Set(array.map(item => item.category))]

    const [menuItem, setMenuItem] = useState([])

    useEffect(()=>{
        setMenuItem(array)
    }, [array])

    const filter = (button) => {
        if (button === "All") {
            setMenuItem(array);
            return allCategories;
        }
        const filteredData = array.filter(item => item.category === button)
        setMenuItem(filteredData)
    }
    // filter()

    return (
        <div className={classes.foodMenu}>
            <div className={classes.foodMenu__container}>
                <h4>Menyu</h4>
                <h1>MAZALI TAOMLARIMIZ RO'YXATI</h1>
               <div className={classes.foodMenu__container__btn}>
                   <Button button={allCategories} filter={filter}/>
               </div>
                <MenuCom menuItem={menuItem} />
            </div>
        </div>
    );
};

export default FoodsMenu;