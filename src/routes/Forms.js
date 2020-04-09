import React from 'react';
import Icon from '../components/Icon'
import Button from '../components/Button'

class Forms extends React.Component {
  render() {
    return (
      <div className='container md'>

        <div className='row'>
          <div className='col-xs-12'>
            <h3>Forms!</h3>
          </div>
        </div>

        <form className='row'>
          <div className='col-xs-12'>
            <input
              type='text'
              placeholder='Street Address 1'
              />
          </div>
          <div className='col-xs-12'>
            <input
              type='text'
              placeholder='Street Address 2'
              />
          </div>
          <div className='col-md-6 col-xs-12'>
            <input
              type='text'
              placeholder='City'
              />
          </div>
          <div className='col-md-3 col-xs-12'>
            <div className='meow-select'>
              <select>
                <option value='Select...' defaultValue disabled>Select...</option>
                <option value='Alaska'>Alaska</option>
                <option value='Arizona'>Arizona</option>
                <option value='Arkansas'>Arkansas</option>
                <option value='California'>California</option>
                <option value='Colorado'>Colorado</option>
              </select>
            </div>
          </div>
          <div className='col-md-3 col-xs-12'>
            <input
              type='number'
              placeholder='Zip'
              />
          </div>
          <div className='col-xs-12 radio'>
            <p>How's the litter box?</p>
            <div className='radio-group'>
              <div className='radio-item'>
                <input
                  type='radio'
                  name='litter-box'
                  id='clean'
                  value='clean'
                  />
                <label>Clean</label>
              </div>
              <div className='radio-item'>
                <input
                  type='radio'
                  name='litter-box'
                  id='dirty'
                  value='dirty'
                  />
                <label>Dirty</label>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-xs-12 radio'>
            <p>How's the litter box?</p>
            <div className='radio-group inline'>
              <div className='radio-item'>
                <input
                  type='radio'
                  name='litter-box'
                  id='clean'
                  value='clean'
                  />
                <label>Clean</label>
              </div>
              <div className='radio-item'>
                <input
                  type='radio'
                  name='litter-box'
                  id='dirty'
                  value='dirty'
                  />
                <label>Dirty</label>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-xs-12'>
            <label>Auto-clean litter box</label>
            <label className='switch'>
              <input
                type='checkbox'
                role='switch'
                className='switch'
                name='autoCleanLitterBox'
                aria-checked='false'>
              </input>
              <span className='switch-toggle' />
            </label>
          </div>
          <div className='col-xs-12'>
            <p>Types of cats?</p>
            <label className='checkbox'>
              <input
                type='checkbox'
                role='switch'
                name='Cool cats'
                aria-checked='false'>
              </input>
              <span className='checkmark' />
              Cool cats
            </label>
            <label className='checkbox'>
              <input
                type='checkbox'
                role='switch'
                name='Not so cool cats'
                aria-checked='false'>
              </input>
              <span className='checkmark' />
              Not so cool cats
            </label>
            <label className='checkbox'>
              <input
                disabled
                type='checkbox'
                role='switch'
                name='Smelly cats'
                aria-checked='false'>
              </input>
              <label>Smelly cats (disabled)</label>
              <span className='checkmark' />
            </label>
          </div>
          <Button
            data='action!'
            style='secondary'
            submit={true}
            margin='m-r-1-xs'
            large={false} />
        </form>

      </div>
    )
  }
}

export default Forms;
