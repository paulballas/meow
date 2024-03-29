import React from 'react';
import classNames from 'classnames/bind';
import Icon from './Icon'

class Button extends React.Component {


  render() {
    const btnClasses = classNames(
      'btn',
      this.props.type,
      this.props.margin,
      {
        'outlined': this.props.outlined,
        'large': this.props.large,
        'small': this.props.small,
        'full': this.props.full,
      }
    )
    return (
      <button
        onClick={this.props.onClick}
        type={this.props.submit? 'submit' : null}
        className={btnClasses}
        >
        {this.props.data}
        {
          this.props.icon?
          <Icon
            name={this.props.icon}
            iconClass='sm white'
            label={this.props.icon}
          />
        :null
        }
      </button>
    )
  }
}

export default Button;
