import React from 'react';
import SideBar from './SideBar';

class MeowHome extends React.Component {
  render() {
    return (
      <div className='container gray-bg'>
        <div className='row'>
          <div className='col-xs-12'>
            <h1 className='title'>Meow!</h1>
            <div className='sub-title-line' />
            <h3>Meow is a responsive grid and component library that is JS framework agnostic and 100% free.</h3>
          </div>
        </div>
      </div>
    )
  }
}
export default MeowHome;
