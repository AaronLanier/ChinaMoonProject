import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import logo from './logo.svg';
//import Container from "./components/Container";
import Login from "./components/Login";
import Registration from "./components/Registration";
//mport Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import AdminHome from "./components/AdminHome";
import NavBar from "./components/NavBar";

function App() {
  //sets isAuthed to false;
  const [isAuthed, setIsAuthed] = useState(false);

  useEffect(() => {
    const localStorageIsAuthed = localStorage.getItem('isAuthed');
    if (localStorageIsAuthed) {
      storeIsAuthed(localStorageIsAuthed);
    }
  }, []);



  const storeIsAuthed = incomingValue => {
    localStorage.setItem('isAuthed', incomingValue);
    setIsAuthed(incomingValue);
  };


  return (
    <Router>
      <NavBar isAuthed={isAuthed} setIsAuthed={storeIsAuthed} />
   
      <Switch>
        <>
          <div className="App">           
            <Route path="/Login" exact component={Login} />
            <Route path="/AdminHome" exact component={AdminHome} />
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
