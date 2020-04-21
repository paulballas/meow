import React from 'react';
import classNames from 'classnames/bind';
import Icon from './Icon'
import Button from './Button'

class Dropdown extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeList: false,
      selection: ''
    }
  }

  renderList = () => {
    let listItems = this.props.list;

    return (
      listItems.map((i) => {
        return (
          <div
            key={i}
            className='list-item'
            onClick={ () => this.setState({
              activeList: !this.state.activeList,
              selection : i
            })
            }>
            {i}
          </div>
        )
      })
    )
  }

  render() {
    const selection = this.state.selection
    const dropClasses = classNames(
      'dropdown-list',
      {
        'active': this.state.activeList
      }
    )
    return (
      <div className='dropdown'>
        <Button
          onClick={ () => this.setState({activeList: !this.state.activeList}) }
          data='Cat Supplies'
          type='primary'
          icon='ChevronDown'
        />
      <div className={dropClasses}>
        { this.renderList() }
      </div>
      {selection? <p>You selected the <b>{selection}</b></p> : null}
      </div>
    )
  }
}

export default Dropdown;
