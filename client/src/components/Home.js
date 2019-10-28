import React from "react";
import Header from "./Header";
import HomeWrapper from "./HomeWrapper";
import Footer from "./Footer";

import "./styles.css";


function Home (props) {

    return (
        <div className="wrapper" id="wrapper">

            <Header />
            <HomeWrapper />


            <Footer />
        </div>


    )
}


export default Home;

