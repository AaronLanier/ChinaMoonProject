import React from 'react';
//import logo from './logo.svg';
import Container from './components/Container';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
  <Router>
    
    <Switch>
      <Route path="/admin" component={Container} />
      <Route path="/Login" component={Login} />
      <Route path="/Registration" component={Registration} />
       
      
      
    </Switch>
  </Router>


  );

}

export default App;
