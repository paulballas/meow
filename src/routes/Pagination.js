import React from 'react';
import Paginator from '../components/Paginator'

class Pagination extends React.Component {
  render() {
    return (
      <div className='col-md-9 col-xs-12 bg--inner'>
        <div className='container'>
          <div className='row'>
            <div className='col-xs-12'>
              <div className='sub-title-line' />
              <h2 className='title'>Pagination</h2>
              <h5>Page by page</h5>
            </div>
          </div>
          <div className='row'>
            <div className='col-xs-12'>
              <Paginator />
            </div>
          </div>
        </div>
      </div>      
    )
  }
}
export default Pagination;
