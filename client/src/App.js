import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import logo from './logo.svg';
import Container from "./components/Container";
//import Login from "./components/Login";
import Registration from "./components/Registration";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
   
      <Switch>
        <>
          <div className="App">           
            <Route path="/Login" exact component={Container} />
            <Route path="/Registration" exact component={Registration} />
            <Route path="/" exact component={Home} />
           
            
          </div>
        </>
      </Switch>
      <br />
      <Footer />
    </Router>
  );
}

export default App;
