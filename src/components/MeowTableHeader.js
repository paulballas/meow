import React from 'react';
import classNames from 'classnames/bind';
import Icon from './Icon'

class MeowTableHeader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      flipArrow: false
    }
  }

  renderArrowIcon = () => {
    if (this.state.flipArrow) {
      return 'ArrowDown'
    } else {
      return 'ArrowUp'
    }
  }

  flipArrow = (e) => {
    console.log('clicked the ');
    this.setState({
      flipArrow: !this.state.flipArrow
    })
  }
  render() {
    return (
      <div
        className='meow-th'
        onClick={ () => this.flipArrow()}>
        {this.props.name}
        <Icon
          name={this.renderArrowIcon()}
          iconClass='sm white'
          label={this.props.arrowDirection}
        />
    </div>
    )
  }

}
export default MeowTableHeader;
