import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "./components/footer";
import HomePage from "./components/homepage";
import WorkshopDetails from "./components/homepage_text";
import Navbar from "./components/navbar";
import Organisers from "./components/organisers";
import WorkshopRegistration from "./components/registration";
import Schedule from "./components/schedule";
import Speak from "./components/speaker";
import "./styles.css";
const App = () => {
    return (
    <>

        <Navbar/>
        <HomePage/>
        <WorkshopDetails/>
        <WorkshopRegistration/>
        <Speak/>
        <Organisers/>
        <Schedule/>
        <Footer/>
    </>
    );
};

const parent=document.getElementById("parent");
const root= ReactDOM.createRoot(parent);
root.render(<App/>);
