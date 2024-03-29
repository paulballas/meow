import React from "react";
import { createBrowserHistory } from 'history';
import './styles/meow.sass'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop'

import SideBar from './routes/SideBar';
import MeowComponents from './routes/MeowComponents';
import Basics from './routes/Basics';
import MeowHome from './routes/MeowHome'

/* Basics */
import Colors from './routes/Colors'
import Grid from './routes/Grid'
import Spacing from './routes/Spacing'
import Type from './routes/Type'

/* Components */
import Alerts from './routes/Alerts'
import Buttons from './routes/Buttons'
import Cards from './routes/Cards'
import Dropdowns from './routes/Dropdowns'
import Forms from './routes/Forms'
import Lists from './routes/Lists'
import Modals from './routes/Modals'
import Pagination from './routes/Pagination'
import Tables from './routes/Tables'


function App() {
  return (
    <Router onUpdate={ScrollToTop} history={createBrowserHistory()}>
      <ScrollToTop>

        <div className='container full gray-bg'>
          <div className='row'>
            <SideBar />

            <Route path="/" exact component={MeowHome} />

            <Route path="/basics" exact component={Basics} />
            <Route path="/basics/colors" exact component={Colors} />
            <Route path="/basics/grid" exact component={Grid} />
            <Route path="/basics/spacing" exact component={Spacing} />
            <Route path="/basics/typography" exact component={Type} />

            <Route path="/components" exact component={MeowComponents} />
            <Route path="/components/alerts" exact component={Alerts} />
            <Route path="/components/buttons" exact component={Buttons} />
            <Route path="/components/cards" exact component={Cards} />
            <Route path="/components/dropdowns" exact component={Dropdowns} />
            <Route path="/components/forms" exact component={Forms} />
            <Route path="/components/modals" exact component={Modals} />
            <Route path="/components/lists" exact component={Lists} />
            <Route path="/components/pagination" exact component={Pagination} />
            <Route path="/components/tables" exact component={Tables} />
          </div>
        </div>

      </ScrollToTop>
    </Router>
  );
}

export default App;
