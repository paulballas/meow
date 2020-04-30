import React from 'react';
import PropTypes from "prop-types";
import { withRouter, NavLink } from 'react-router-dom';
import Icon from '../components/Icon'

const basicsLinks = (
  <div>

    <NavLink
      className='nav-link shown'
      exact to="/basics/colors">
      <Icon
        name='Circle'
        iconClass='xs dark'
        label='Meow Components Icon'
      />
      colors
    </NavLink>
    <NavLink
      className='nav-link shown'
      exact to="/basics/grid">
      <Icon
        name='Circle'
        iconClass='xs dark'
        label='Meow Components Icon'
      />
      grid
    </NavLink>
    <NavLink
      className='nav-link shown'
      exact to="/basics/spacing">
      <Icon
        name='Circle'
        iconClass='xs dark'
        label='Meow Components Icon'
      />
      spacing
    </NavLink>
    <NavLink
      className='nav-link shown'
      exact to="/basics/typography">
      <Icon
        name='Circle'
        iconClass='xs dark'
        label='Meow Components Icon'
      />
      typography
    </NavLink>
  </div>
)

const navLinks = (
  <div>
    <NavLink
      className='nav-link shown'
      exact to="/components/alerts">
      <Icon
        name='Hexagon'
        iconClass='xs dark'
        label='Meow Components Icon'
      />
      alerts
    </NavLink>
    <NavLink
      className='nav-link shown'
      exact to="/components/buttons">
      <Icon
        name='Hexagon'
        iconClass='xs dark'
        label='Meow Components Icon'
      />
      buttons
    </NavLink>
    <NavLink
      className='nav-link shown'
      exact to="/components/cards">
      <Icon
        name='Hexagon'
        iconClass='xs dark'
        label='Meow Components Icon'
      />
      cards
    </NavLink>
    <NavLink
      className='nav-link shown'
      exact to="/components/dropdowns">
      <Icon
        name='Hexagon'
        iconClass='xs dark'
        label='Meow Components Icon'
      />
      dropdowns
    </NavLink>
    <NavLink
      className='nav-link shown'
      exact to="/components/forms">
      <Icon
        name='Hexagon'
        iconClass='xs dark'
        label='Meow Components Icon'
      />
      forms
    </NavLink>
    <NavLink
      className='nav-link shown'
      exact to="/components/lists">
      <Icon
        name='Hexagon'
        iconClass='xs dark'
        label='Meow Components Icon'
      />
      lists
    </NavLink>
    <NavLink
      className='nav-link shown'
      exact to="/components/modals">
      <Icon
        name='Hexagon'
        iconClass='xs dark'
        label='Meow Components Icon'
      />
      modals
    </NavLink>
    <NavLink
      className='nav-link shown'
      exact to="/components/pagination">
      <Icon
        name='Hexagon'
        iconClass='xs dark'
        label='Meow Components Icon'
      />
      pagination
    </NavLink>
    <NavLink
      className='nav-link shown'
      exact to="/components/tables">
      <Icon
        name='Hexagon'
        iconClass='xs dark'
        label='Meow Components Icon'
      />
      tables
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
    const forRef = <p>{location.pathname}</p>

    return (
      <div className='col-md-3 col-xs-12 bg--sidebar'>
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
            className={location.pathname !== '/basics'? 'nav-link tab' :'nav-link tab only' }>
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
            className={location.pathname !== '/components'? 'nav-link tab' :'nav-link tab only' }>
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
