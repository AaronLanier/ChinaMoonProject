import React from "react";
import Login from "./Login";
//import Registration from "./Registration";
import "./styles.css";


function Wrapper(props) {

    return (
        <div className="row" id="main">
            <div class="col" id="lavender;"> &nbsp;</div>
            <div class="col" id="orange;">
            <Login />
            
            </div>
            <div class="col" id="lavender;">&nbsp;</div>
        </div>


    )
}


export default Wrapper;

