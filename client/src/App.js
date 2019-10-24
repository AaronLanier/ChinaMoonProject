import React from "react";
import Home from "./components/containers/Home";
import AdminLogin from "./components/containers/AdminLogin";
import AdminHome from "./components/containers/AdminHome";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/AdminLogin" component={AdminLogin} />
          <Route path="/AdminHome" component={AdminHome} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
