import React from 'react';
import { createBrowserHistory } from 'history';
import logo from './logo.svg';
import './styles/meow.sass'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop'

import Home from './routes/Home'
import About from './routes/About'
import Pana from './routes/Pana'
import Medstar from './routes/Medstar'
import Usac from './routes/Usac'
import Odc from './routes/Odc'
import Class from './routes/Class'

function App() {
  return (
    <Router onUpdate={ScrollToTop} history={createBrowserHistory()}>
      <ScrollToTop>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/pana" exact component={Pana} />
        <Route path="/medstar" exact component={Medstar} />
        <Route path="/usac" exact component={Usac} />
        <Route path="/odc" exact component={Odc} />
        <Route path="/class-scout" exact component={Class} />
      </ScrollToTop>
    </Router>
  );
}

export default App;
