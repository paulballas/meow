import React from "react";
import { createBrowserHistory } from 'history';
import './styles/meow.sass'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop'

import SideBar from './routes/SideBar';
import MeowHome from './routes/MeowHome'
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

        <div className='container full gray-bg'>
          <div className='row'>
            <div className='col-md-2 col-xs-12'>
              <SideBar />
            </div>
            <div className='col-md-10 col-xs-12'>
              <Route path="/" exact component={MeowHome} />
              <Route path="/alerts" exact component={Alerts} />
              <Route path="/buttons" exact component={Buttons} />
              <Route path="/cards" exact component={Cards} />
              <Route path="/dropdowns" exact component={Dropdowns} />
              <Route path="/forms" exact component={Forms} />
              <Route path="/modals" exact component={Modals} />
              <Route path="/pagination" exact component={Pagination} />
              <Route path="/tables" exact component={Tables} />
            </div>
          </div>
        </div>

      </ScrollToTop>
    </Router>
  );
}

export default App;
