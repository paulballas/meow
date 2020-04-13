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
import Odc from './routes/Odc'

import Buttons from './routes/Buttons'
import Alerts from './routes/Alerts'
import Cards from './routes/Cards'
import Dropdowns from './routes/Dropdowns'
import Forms from './routes/Forms'
import Modals from './routes/Modals'
import Pagination from './routes/Pagination'
import Tables from './routes/Tables'

function App() {
  return (
    <Router onUpdate={ScrollToTop} history={createBrowserHistory()}>
      <ScrollToTop>
        <Route path="/alerts" exact component={Alerts} />
        <Route path="/buttons" exact component={Buttons} />
        <Route path="/cards" exact component={Cards} />
        <Route path="/dropdowns" exact component={Dropdowns} />
        <Route path="/forms" exact component={Forms} />
        <Route path="/modals" exact component={Modals} />
        <Route path="/pagination" exact component={Pagination} />
        <Route path="/tables" exact component={Tables} />

        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/pana" exact component={Pana} />
        <Route path="/odc" component={Odc} />
        <Route path="/medstar" exact component={Medstar} />
        <Route path="/usac" exact component={Usac} />
        <Route path="/class-scout" exact component={Class} />
      </ScrollToTop>
    </Router>
  );
}

export default App;
