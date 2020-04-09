import React from 'react';
import Alert from '../components/Alert'

class Alerts extends React.Component {
  render() {
    return (
      <div>
        <h3>Alerts</h3>

        <Alert
          type='success'
          title='success!'
          body='You successfully completed the task.'
          margin='m-b-1-xs'>
        </Alert>

        <Alert
          type='error'
          title='error!'
          body='Hold up, something went wrong.'
          margin='m-b-1-xs'
          />

        <Alert
          type='warning'
          title='warning!'
          body='About to get crazy up in here.'
          margin='m-b-1-xs'
          />

        <Alert
          type='neutral'
          title='neutral!'
          body='Mehh... you maybe should look at this.'
          margin='m-b-1-xs'
          />

        <Alert
          type='fun'
          title='fun!'
          body='Wow, this is awesome.'
          margin='m-b-1-xs'
          />
      </div>
    )
  }
}
export default Alerts;
