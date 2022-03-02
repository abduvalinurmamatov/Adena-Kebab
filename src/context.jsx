import React, {useState, createContext, useEffect} from 'react';

const Context = createContext();

const ContextProvider = ({children}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [loginUsername, setLoginUsername] = useState("");
    const [cart, setCart] = useState([])
    const url = "http://81.95.232.205:8009/Menyu/"
    const [array, setArray] = useState([])

    async function registration(event) {
        event.preventDefault();
        const response = await fetch("http://81.95.232.205:8009/account/register/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password,
            }),
        });
        const data = await response.json();
        // localStorage.setItem("token", data.token)
        console.log(data);
        // window.location = '/login'
    }
    async function login(event) {
        event.preventDefault();
        const response = await fetch("http://81.95.232.205:8009/account/login/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: loginUsername,
                password: loginPassword,
            }),
        });
        const data = await response.json();
        console.log(data.token);
        localStorage.setItem('token', data.token )

        // console.log(localStorage.setItem('token', data.token ))
        window.location = '/'
    }
    const getDate = async () => {
        const response = await fetch(url)
        const data = await response.json();
        setArray(data)
    };
    useEffect(() => {
        getDate()
    }, [])

    function addtoCard(el){
        setCart([...cart, el])
        console.log(cart)
    }


    return (
        <Context.Provider value={{addtoCard, cart, array, registration, setArray, setEmail, setPassword, setUsername, login, setLoginUsername, setLoginPassword}}>
            {children}
        </Context.Provider>
    );
}
export {ContextProvider, Context};