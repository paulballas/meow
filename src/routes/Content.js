import React from 'react';
import { NavLink } from 'react-router-dom';

class Content extends React.Component {
  render() {
    return(
      <div className='content'>
        <div className='container'>
          <div className='row'>
            <div className='col-xs-12'>
              <h1 className='title'>Meow!</h1>
              <div className='sub-title-line' />

              <h3>Meow is a responsive grid and component library that is JS framework agnostic and 100% free.</h3>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Content;
