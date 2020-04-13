import React from 'react';
import Icon from '../components/Icon'
import Table from '../components/Table'
import MeowTable from '../components/MeowTable'

class Tables extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12'>
            <h3>Tables</h3>
            <Table />
            <br/>
            <br/>
            <Table singleRow={true} />
            <br/>
            <br/>
            <br/>
            <br/>
            <MeowTable xScroll={true} />
            <br/>
            <br/>
            <MeowTable singleRow={true} />
          </div>
        </div>
      </div>
    )
  }
}

export default Tables;
