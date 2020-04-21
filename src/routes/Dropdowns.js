import React from 'react';
import Dropdown from '../components/Dropdown'

const catSupplies = [
  'Food',
  'Litter Box',
  'Collar',
  'ID Tag',
  'Toy'
]

class Dropdowns extends React.Component {
  render() {
    return (
      <div className='col-md-9 col-xs-12 bg--inner'>
        <div className='container'>
          <div className='row'>
            <div className='col-xs-12'>
              <div className='sub-title-line' />
              <h2 className='title'>Dropdowns</h2>
              <h5>Drop it like it's hot.</h5>
            </div>
          </div>
          <div className='row'>
            <div className='col-xs-12'>
              <Dropdown list={catSupplies} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dropdowns;
