import React from 'react';
import { matchPath, NavLink } from 'react-router-dom';
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
      exact to="/spacing">spacing
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
    const match = matchPath("/basics/colors", {
      path: "/basics/:id",
      exact: true,
      strict: false
    });

    return (
      <div className='col-md-3 col-xs-12 bg--sidebar'>
        <p>{match.path}</p>
        <p>{match.url}</p>
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
          <NavLink
            to='/basics'
            onClick={ () => this.setState({activeTab: 'basic'}) }
            className={
              activeTab === 'basic'?
              'nav-link tab active-tab'
              : 'nav-link tab'
            }>
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
            onClick={ () => this.setState({activeTab: 'components'}) }
            className={
              activeTab === 'components'?
              'nav-link tab active-tab'
              : 'nav-link tab'
            }>
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

export default SideBar;
