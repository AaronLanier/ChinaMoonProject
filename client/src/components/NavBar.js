import React from "react";
//import { Link } from 'react-router-dom';
import "./styles.css";



function NavBar(props) {

    return (
        <div className="header" id="header">
            <nav className="navbar navbar-expand-sm " id="navi">
                <img src="../../china_moon_logo.jpg" id="logo1" />
                <ul className="navbar-nav" >
                    <li className="nav-item">
                        <a className="nav-link" id="moon" href="#">China Moon</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="link" href="#">Admin Registration</a>
                        
                    
                    </li>
                    <li clasName="nav-item">
                        <a className="nav-link" id="link" href="#">Login</a>
                       
                    </li>
                </ul>
            </nav>


        </div>


    )
}


export default NavBar;