import React from "react";
import { Link } from 'react-router-dom';
//import { BrowserRouter, Route, Link } from "react-router-dom";
import "./styles.css";



function NavBar(props) {

    return (
        <div className="header" id="header">
            <nav className="navbar navbar-expand-sm " id="navi">
                <img src="../../china_moon_logo.jpg" id="logo1" />
                <ul className="navbar-nav" >
                    <li className="nav-item">
                        
                        <Link to="/" className="nav-link" id="moon"> China Moon </Link>

                    </li>
                    <li className="nav-item">
                        
                        <Link to ="/Registration" className="nav-link" id="link"> Admin Registration </Link>
                    
                    </li>
                    <li clasName="nav-item">
                       
                        
<Link to ="/Login" className="nav-link" id="link"> Login </Link>
                       
                    </li>
                </ul>
            </nav>


        </div>


    )
}


export default NavBar;