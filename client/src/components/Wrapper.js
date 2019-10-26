import React from "react";
import Login from "./Login";
//import Registration from "./Registration";
import "./styles.css";

function Wrapper(props) {
  return (
    <div className="row" id="main">
      <div className="col" id="lavender;">
        {" "}
        &nbsp;
      </div>
      <div className="col" id="orange;">
        <Login />
      </div>
      <div className="col" id="lavender;">
        &nbsp;
      </div>
    </div>
  );
}

export default Wrapper;
