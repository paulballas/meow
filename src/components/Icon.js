import React from 'react';
import classNames from 'classnames/bind';
import iconList from '../icons/icons.json'


class Icon extends React.Component {

  renderIcon = () => {
    const iconClasses = classNames(
      'icon',
      this.props.iconClass
    )
    return (
      iconList.map((icon) => {
        if (this.props.name === icon.name) {
          return (
            <svg
              key={icon.name}
              alt={icon.name}
              className={iconClasses}
              width="32"
              height="32"
              viewBox="0 0 32 32"
              preserveAspectRatio="xMidYMid"
              xmlns="http://www.w3.org/2000/svg">
              <path d={icon.path}
                fill="#000"
                fillRule="nonzero"/>
            </svg>
          )
        } else {
          return null
        }
      })
    )
  }

  render() {
    return <div className='icon'>{ this.renderIcon() }</div>
  }
}

export default Icon;
