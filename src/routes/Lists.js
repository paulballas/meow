import React from 'react';
import List from '../components/List'

class Lists extends React.Component {
  render() {
    return(
      <div className='col-md-9 col-xs-12 bg--inner'>
        <div className='container'>
          <div className='row'>
            <div className='col-xs-12'>
              <div className='sub-title-line' />
              <h2 className='title'>Lists</h2>
              <h5>Let me count the ways...</h5>
            </div>
          </div>
          <div className='row'>
            <div className='col-xs-12'>
              <List
                title='Hello! '
                content='World' />
              <List
                title='Hello! '
                content='World' />
              <List
                title='Hello! '
                content='World' />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Lists;
