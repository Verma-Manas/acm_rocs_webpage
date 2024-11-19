import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "./footer";
import HomePage from "./homepage";
import WorkshopDetails from "./homepage_text";
import Navbar from "./navbar";
import Organisers from "./organisers";
import WorkshopRegistration from "./registration";
import Schedule from "./schedule";
import Speak from "./speaker";
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
