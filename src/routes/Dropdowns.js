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
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12'>
            <h3>Dropdowns!</h3>
            <Dropdown list={catSupplies} />
          </div>
        </div>
      </div>
    )
  }
}

export default Dropdowns;
