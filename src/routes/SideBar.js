import React from 'react';
import { NavLink } from 'react-router-dom';

const basicsLinks = (
  <div>
    <NavLink
      className='nav-link'
      to="/grid">grid
    </NavLink>

    <NavLink
      className='nav-link'
      to="/spacing">spacing
    </NavLink>

    <NavLink
      className='nav-link'
      to="/typography">typography
    </NavLink>
  </div>
)

const navLinks = (
  <div>
    <NavLink
      className='nav-link'
      to="/alerts">alerts
    </NavLink>
    <NavLink
      className='nav-link'
      to="/buttons">buttons
    </NavLink>
    <NavLink
      className='nav-link'
      to="/cards">cards
    </NavLink>
    <NavLink
      className='nav-link'
      to="/dropdowns">dropdowns
    </NavLink>
    <NavLink
      className='nav-link'
      to="/forms">forms
    </NavLink>
    <NavLink
      className='nav-link'
      to="/modals">modals
    </NavLink>
    <NavLink
      className='nav-link'
      to="/pagination">pagination
    </NavLink>
    <NavLink
      className='nav-link'
      to="/tables">tables
    </NavLink>
  </div>
)

class SideBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeTab: ''
    }
  }

  renderLinks = () => {
    if (this.state.activeTab === 'basic') {
      return basicsLinks
    } else if (this.state.activeTab === 'components') {
      return navLinks
    } else {
      return null
    }
  }

  render() {
    const { activeTab } = this.state
    return (
      <div className='sidebar'>
        <NavLink
          className='nav-link'
          to="/">home
        </NavLink>
        <button
          onClick={ () => this.setState({activeTab: 'basic'}) }
          className={activeTab === 'basic'? 'nav-link tab active-tab': 'nav-link tab'}>
          basics
        </button>
        <button
          onClick={ () => this.setState({activeTab: 'components'}) }
          className={activeTab === 'components'? 'nav-link tab active-tab': 'nav-link tab'}>
          components
        </button>
        { this.renderLinks() }
      </div>
    )
  }
}

export default SideBar;
