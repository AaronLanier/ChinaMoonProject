import React from "react";
//import { Link } from 'react-router-dom';
import "./NavBar.css";
import logo from "../../assets/chinamoonlogo.png";



function NavBar(props) {

    return (
        <div className="row" id="header">
            <div className="col-sm">
                <img src={logo} id="logo1" alt="Chinamoon" />
            </div>
        </div>
    )
}


export default NavBar;