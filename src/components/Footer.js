import React from 'react';
import { Link } from 'react-router-dom'

class Footer extends React.Component {
  render() {
    return (
      <div className='footer'>
        <div className='container'>
          <div className='row center-xs middle-xs'>
            <div className='col-xs-12'>
              <Link to='/'>
                <h1 className='zing'>paul ballas</h1>
              </Link>
              <a href='mailto:paul@sudodigital.com'>paul@sudodigital.com</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer;
