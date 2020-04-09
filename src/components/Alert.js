import React from 'react';
import classNames from 'classnames/bind';
import Icon from './Icon'

class Alert extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hideAlert: false
    }
  }
  
  render() {
    const alertClasses = classNames(
      'alert',
      this.props.type,
      this.props.margin,
      {
        'hide-alert': this.state.hideAlert
      }
    )
    return (
      <div className={alertClasses}>
        <p>
          <span className='alert-title'>{this.props.title}</span>
          {this.props.body}
        </p>
        <div
          onClick={() => this.setState({hideAlert: true})}>
          <Icon
            name='CircleClose'
            iconClass='lg white'
            label='Close Alert'
          />
      </div>
      </div>
    )
  }
}

export default Alert;
