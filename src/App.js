import React from "react";
import {Routes, Route} from "react-router-dom";
// import Header from "./components/HeaderCom/HeaderCom";
import  Header from "./Page/Header/Header"
// import MenuCom from "./components/MenuCom/MenuCom";
import PhotoCom from "./components/PhotoCom/PhotoCom";
import Videos from "./components/VideosCom/Videos";
import Connection from "./components/ConnectionCom/Connection";
import Navbar from "./components/NavbarCom/Navbar";
import Footer from "./components/FooterCom/Footer";
import FoodsMenu from "./Page/AllMenuFoods/FoodsMenu";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <div className="App">
        <Navbar />
        <Routes>
            <Route path="/" element={ <Header />} />
            <Route path="/Menu" element={ <FoodsMenu/>} />
            <Route path="/Photos" element={ <PhotoCom/>} />
            <Route path="/Videos" element={ <Videos/>} />
            <Route path="/Connection" element={ <Connection />} />
            <Route path="/cart" element={ <Cart />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
