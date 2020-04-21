import React from 'react';
import Alert from '../components/Alert'

class Alerts extends React.Component {
  render() {
    return (
      <div className='col-md-9 col-xs-12 bg--inner'>
        <div className='container'>
          <div className='row'>
            <div className='col-xs-12'>
              <div className='sub-title-line' />
              <h2 className='title'>Alerts</h2>
              <h5>Hey you! Yeah you, the user—notice me!</h5>
            </div>
          </div>
          <div className='row'>
            <div className='col-xs-12'>
              <Alert
                type='success'
                title='success!'
                body='You successfully completed the task.'
                margin='m-b-1-xs'>
              </Alert>

              <Alert
                type='warning'
                title='warning!'
                body='About to get crazy up in here.'
                margin='m-b-1-xs'
                />

              <Alert
                type='error'
                title='error!'
                body='Hold up, something went wrong.'
                margin='m-b-1-xs'
                />

              <Alert
                type='neutral'
                title='neutral!'
                body='Mehh...'
                margin='m-b-1-xs'
                />

              <Alert
                type='fun'
                title='fun!'
                body='Wow, this is awesome.'
                margin='m-b-1-xs'
                />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Alerts;
