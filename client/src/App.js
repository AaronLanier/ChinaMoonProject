import React from "react";
import Home from "./components/pages/Home";
import AdminLogin from "./components/pages/AdminLogin";
import AdminHome from "./components/pages/AdminHome";
import NewMenuPage from "./components/pages/NewMenuPage";
import Edit from "./components/pages/Edit";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "../src/components/NavBar/NavBar"

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/AdminLogin" component={AdminLogin} />
          <Route path="/AdminHome" component={AdminHome} />
          <Route path="/edit/:id" component={Edit} />
          <Route path="/NewMenuPage" component={NewMenuPage} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
