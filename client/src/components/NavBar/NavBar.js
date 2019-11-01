import React from "react";
//import { Link } from 'react-router-dom';
import "./NavBar.css";
import logo from "../../assets/chinamoonlogo.png";
import Hours from "../Hours/Hours";
import Address from "../Address/Address";
import "./NavBar.css"



function NavBar(props) {

    return (
        <div className="row" id="header">
            <div className="col-sm-4"><Hours /></div>
            <div className="col-sm-4">
                <img src={logo} id="logo1" alt="Chinamoon" />
            </div>
            <div className="col-sm-4"><Address /></div>
        </div>
    )
}


export default NavBar;