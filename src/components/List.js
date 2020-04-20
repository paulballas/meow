import React from 'react';
import Icon from './Icon'
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

class List extends React.Component {
  render() {

    const listClasses = classNames(
      'list',
      {
        'lg': this.props.large
      }
    )

    const renderList = (
      this.props.title?
      <p>
        <b>{this.props.title}</b>
        {this.props.content}
      </p>
      :
      <p>{this.props.content}</p>
    )

    return (
      <Link
        className={listClasses}
        to={this.props.location}>
        {renderList}
        <Icon
          name='CircleArrowRight'
          iconClass='lg dark'
          label='Arrow Right'
          />
      </Link>
    )
  }
}
export default List;
