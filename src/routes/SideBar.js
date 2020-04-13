import React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from '../components/Icon'

const basicsLinks = (
  <div>
    <NavLink
      className='nav-link'
      exact to="/grid">grid
    </NavLink>

    <NavLink
      className='nav-link'
      exact to="/spacing">spacing
    </NavLink>

    <NavLink
      className='nav-link'
      exact to="/typography">typography
    </NavLink>
  </div>
)

const navLinks = (
  <div>
    <NavLink
      className='nav-link'
      exact to="/alerts">alerts
    </NavLink>
    <NavLink
      className='nav-link'
      exact to="/buttons">buttons
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
  constructor(props) {
    super(props)
    this.state = {
      activeTab: ''
    }
  }

  renderLinks = (s) => {
    if (this.state.activeTab === 'basic' && s === 'basic') {
      return basicsLinks
    } else if (this.state.activeTab === 'components' && s === 'components') {
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
          onClick={ () => this.setState({activeTab: 'home'}) }
          className='nav-link'
          exact to="/">
          <Icon
            name='Square'
            iconClass='md dark'
            label='Meow Home Icon'
          />
          home
        </NavLink>
        <button
          onClick={ () => this.setState({activeTab: 'basic'}) }
          className={activeTab === 'basic'? 'nav-link tab active-tab': 'nav-link tab'}>
          <Icon
            name='Circle'
            iconClass='md dark'
            label='Meow Basics Icon'
          />
          basics
        </button>
        {this.renderLinks('basic')}
        <button
          onClick={ () => this.setState({activeTab: 'components'}) }
          className={activeTab === 'components'? 'nav-link tab active-tab': 'nav-link tab'}>
          <Icon
            name='Hexagon'
            iconClass='md dark'
            label='Meow Components Icon'
          />
          components
        </button>
        { this.renderLinks('components') }
      </div>
    )
  }
}

export default SideBar;
