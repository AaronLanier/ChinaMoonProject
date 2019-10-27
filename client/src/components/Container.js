import React from "react";
import Header from "./Header";
import Wrapper from "./Wrapper";
import Footer from "./Footer";

import "./styles.css";


function Container(props) {
    
    return (
        <div className="wrapper" id="wrapper">
       
           
             <Header />
             <Wrapper />


             <Footer />
        </div>


    )
}


export default Container;

