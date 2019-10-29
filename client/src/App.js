import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import logo from './logo.svg';
import Container from "./components/Container";
//import Login from "./components/Login";

import Admin from "./components/Admin";
import Home from "./components/Home";


function App() {
  return (
    <Router>
     
      <Switch>
        <>
          <div className="App">
            <Route path="/admin" exact component={Container} />
            <Route path="/Login" exact component={Container} />
            <Route path="/Registration" exact component={Admin} />
            <Route path="/" exact component={Home} />
          </div>
        </>
      </Switch>
    </Router>
  );
}

export default App;
