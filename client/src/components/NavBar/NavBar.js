import React from "react";
//import { Link } from 'react-router-dom';
import "./NavBar.css";
// import logo from "../../assets/chinamonlog.png";



function NavBar(props) {

    return (
        <div className="header" id="header">
            <nav className="navbar navbar-expand-sm " id="navi">
                <img src="../../assets/chinamoonlogo.png" id="logo1" />
                <ul className="navbar-nav" >
                    <li className="nav-item">
                        <a className="nav-link" id="moon" href="#">China Moon</a>
                    </li>
                </ul>
            </nav>
        </div>


    )
}


export default NavBar;