import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Login from "./Login";
import Registration from "./Registration";
import "./styles.css";

function Wrapper(props) {
  return (
    <Router>
    <div className="row" id="main">
      <div className="col" id="lavender;">
        {" "}
        &nbsp;
      </div>
      <div className="col" id="orange;">
        
          <Route exact path="/Login" Component={Login}>
        </Route>

          <Route exact path="/Registration" Component={Registration}>

</Route>
      </div>
      <div className="col" id="lavender;">
        &nbsp;
      </div>
    </div>
    </Router>
  );
}

export default Wrapper;
