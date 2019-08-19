import React from 'react';
import { Link } from 'react-router-dom'
import ReactTooltip from 'react-tooltip'
import PaulBallas from '../images/PaulBallas.svg'

class Header extends React.Component {
  render() {
    return (
      <div className='container header'>
        <div className='row center-xs middle-xs'>
          <div className='col-md-2 col-xs-8'>
            <Link to='/'>
              <img
                data-tip={"There's no place like home"}
                src={PaulBallas}
                alt='Paul Ballas'
                />
              <ReactTooltip />
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;
