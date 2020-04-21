import React from 'react';
import PropTypes from "prop-types";
import { withRouter, NavLink } from 'react-router-dom';
import Icon from '../components/Icon'

const basicsLinks = (
  <div>

    <NavLink
      className='nav-link'
      exact to="/basics/colors">colors
    </NavLink>
    <NavLink
      className='nav-link'
      exact to="/basics/grid">grid
    </NavLink>
    <NavLink
      className='nav-link'
      exact to="/basics/spacing">spacing
    </NavLink>
    <NavLink
      className='nav-link'
      exact to="/basics/typography">typography
    </NavLink>
  </div>
)

const navLinks = (
  <div>
    <NavLink
      className='nav-link'
      exact to="/components/alerts">alerts
    </NavLink>
    <NavLink
      className='nav-link'
      exact to="/components/buttons">buttons
    </NavLink>
    <NavLink
      className='nav-link'
      exact to="/cards">cards
    </NavLink>
    <NavLink
      className='nav-link'
      exact to="/dropdowns">dropdowns
    </NavLink>
    <NavLink
      className='nav-link'
      exact to="/forms">forms
    </NavLink>
    <NavLink
      className='nav-link'
      exact to="/modals">modals
    </NavLink>
    <NavLink
      className='nav-link'
      exact to="/pagination">pagination
    </NavLink>
    <NavLink
      className='nav-link'
      exact to="/tables">tables
    </NavLink>
  </div>
)

class SideBar extends React.Component {

  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  renderLinks = (section) => {
    let path = this.props.location.pathname;

    if (path.includes('/basics') && section === 'basic') {
      return basicsLinks
    } else if (path.includes('/components') && section === 'components') {
      return navLinks
    } else {
      return null
    }
  }

  render() {
    const { match, location, history } = this.props;

    return (
      <div className='col-md-3 col-xs-12 bg--sidebar'>
        <p>location: {location.pathname}</p>
        <div className='sidebar'>
          <NavLink
            className='nav-link'
            exact to="/">
            <Icon
              name='Square'
              iconClass='md dark'
              label='Meow Home Icon'
            />
            home
          </NavLink>
          <NavLink
            to='/basics'
            className='nav-link tab'>
            <Icon
              name='Circle'
              iconClass='md dark'
              label='Meow Basics Icon'
            />
            basics
          </NavLink>
          {this.renderLinks('basic')}
          <NavLink
            to='/components'
            className='nav-link tab'>
            <Icon
              name='Hexagon'
              iconClass='md dark'
              label='Meow Components Icon'
            />
            components
          </NavLink>
          { this.renderLinks('components') }
          <button className='nav-link'>
            <Icon
              name='Download'
              iconClass='md download'
              label='Meow Components Icon'
            />
            download styles
          </button>
        </div>
      </div>
    )
  }
}

export default withRouter(SideBar);
