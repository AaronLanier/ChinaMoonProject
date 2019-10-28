import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import logo from './logo.svg';
import Container from "./components/Container";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Admin from "./components/Admin";


function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route path="/admin" component={Container} />

          <Route path="/Login" component={Login} />
          <Route path="/Registration" component={Admin} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
