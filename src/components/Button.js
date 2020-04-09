import React from 'react';
import classNames from 'classnames/bind';

class Button extends React.Component {
  render() {
    const btnClasses = classNames(
      'btn',
      this.props.color,
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
      </button>
    )
  }
}

export default Button;
