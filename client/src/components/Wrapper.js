import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import Registration from "./Registration";
import "./styles.css";

function Wrapper(props) {
  return (
    <Router>
    <Switch>
    <div className="row" id="main">
      <div className="col" id="lavender;">
        {" "}
        &nbsp;
      </div>
      <div className="col" id="orange;">
        
          <Route exact path="/Login" Component={Login}/>
       

          <Route exact path="/Registration" Component={Registration}/>


      </div>
      <div className="col" id="lavender;">
        &nbsp;
      </div>
    </div>
      </Switch>
    </Router>
  );
}

export default Wrapper;
