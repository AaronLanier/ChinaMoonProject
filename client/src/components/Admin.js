import React from "react";
import Header from "./Header";
import AdminWrapper from "./AdminWrapper";
import Footer from "./Footer";

import "./styles.css";


function Admin (props) {

    return (
        <div className="wrapper" id="wrapper">


            <Header />
            <AdminWrapper />


            <Footer />
        </div>


    )
}


export default Admin;

