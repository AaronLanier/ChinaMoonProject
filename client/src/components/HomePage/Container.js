import React from "react";
import Header from "../Header";
import Wrapper from "../Wrapper";


import "./styles.css";


function Container(props) {
    //return <h1 className="header">{props.children}</h1>;
    return (
        <div className="wrapper" id="wrapper">
       
           
             <Header />
             <Wrapper />


           
        </div>


    )
}


export default Container;

