import React from 'react';
import SideBar from './SideBar';

class MeowHome extends React.Component {
  render() {
    return (
      <div className='col-md-9 col-xs-12 bg--content'>
        <div className='container'>
          <div className='row'>
            <div className='col-xs-12'>
              <div className='sub-title-line' />
              <h2 className='title light-type'>Meow!</h2>
              <h5 className='boxed-typed'>
                Meow is a responsive grid and component library.
                <br/>
                Javascript framework agnostic and <b>100% free</b>.
              </h5>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default MeowHome;
