import React from "react";
import Home from "./components/pages/Home";
import AdminLogin from "./components/pages/AdminLogin";
import AdminHome from "./components/pages/AdminHome";
import NewMenuPage from "./components/pages/NewMenuPage";
import Registration from "./components/pages/Register";
import Edit from "./components/pages/Edit";
import NoMatch from "./components/pages/NoMatch";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "../src/components/NavBar/NavBar";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/AdminLogin" component={AdminLogin} />
          <Route exact path="/AdminHome" component={AdminHome} />
          <Route exact path="/edit/:id" component={Edit} />
          <Route exact path="/NewMenuPage" component={NewMenuPage} />
          <Route exact path="/Registration" exact component={Registration} />
          <Route exact path="/" component={Home} />
          <Route exact path="*" component={NoMatch} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
