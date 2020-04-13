import React from 'react';
import SideBar from './SideBar';
import Content from './Content';

class MeowHome extends React.Component {
  render() {
    return (
      <div className='container full gray-bg'>
        <div className='row'>
          <div className='col-md-2 col-xs-12'>
            <SideBar />
          </div>
          <div className='col-md-10 col-xs-12'>
            <Content />
          </div>
        </div>
      </div>
    )
  }
}
export default MeowHome;
