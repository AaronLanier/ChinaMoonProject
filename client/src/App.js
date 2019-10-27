import React from 'react';
//import logo from './logo.svg';
import Container from './components/Container';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <Router>
    <div className="App">
      <Container />
    </div>
    </Router>
  );
}

export default App;
