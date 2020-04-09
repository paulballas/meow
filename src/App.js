import React from "react";
import { createBrowserHistory } from 'history';
import './styles/meow.sass'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop'

import Home from './routes/Home'
import About from './routes/About'
import Pana from './routes/Pana'
import Medstar from './routes/Medstar'
import Usac from './routes/Usac'
import Class from './routes/Class'
import Illustrations from './routes/Illustrations'
import Odc from './routes/Odc'

import Buttons from './routes/Buttons'
import Alerts from './routes/Alerts'
import Cards from './routes/Cards'
import Forms from './routes/Forms'

function App() {
  return (
    <Router onUpdate={ScrollToTop} history={createBrowserHistory()}>
      <ScrollToTop>
        <Route path="/alerts" exact component={Alerts} />
        <Route path="/buttons" exact component={Buttons} />
        <Route path="/cards" exact component={Cards} />
        <Route path="/forms" exact component={Forms} />

        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/pana" exact component={Pana} />
        <Route path="/odc" component={Odc} />
        <Route path="/medstar" exact component={Medstar} />
        <Route path="/usac" exact component={Usac} />
        <Route path="/class-scout" exact component={Class} />
        <Route path="/illustrations" exact component={Illustrations} />
      </ScrollToTop>
    </Router>
  );
}

export default App;
