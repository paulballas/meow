import React from 'react';
import logo from './logo.svg';
import './styles/meow.sass'
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './Home'
import About from './About'
import Pana from './Pana'

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="/pana" exact component={Pana} />
    </Router>
  );
}

export default App;
