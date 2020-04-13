import React from 'react';
import Paginator from '../components/Paginator'

class Pagination extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12'>
            <h3>Pagination</h3>
            <Paginator />
          </div>
        </div>
      </div>
    )
  }
}
export default Pagination;
