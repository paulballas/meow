import React from 'react';
import SideBar from './SideBar';

class MeowHome extends React.Component {
  render() {
    return (
      <div className='container gray-bg'>
        <div className='row'>
          <div className='col-xs-12'>
            <div className='sub-title-line' />
            <h2 className='title'>Meow!</h2>
            <h5 className='type-serif'>Meow is a responsive grid and component library that is JS framework agnostic and 100% free.</h5>
          </div>
        </div>
      </div>
    )
  }
}
export default MeowHome;
