import React from 'react';
import classNames from 'classnames/bind';
import Icon from './Icon'

class Card extends React.Component {

  renderButton = () => {
    if (this.props.buttons === 1) {
      return (
        <button>{this.props.buttonTitle1}</button>
      )
    } else if (this.props.buttons === 2) {
      return (
        <div className='card-btn-group'>
          <button>{this.props.buttonTitle1}</button>
          <button>{this.props.buttonTitle2}</button>
        </div>
      )
    } else {
      return null
    }
  }

  renderImg = () => {
    if (this.props.imgSrc && !this.props.imgCover) {
      return <img src={this.props.imgSrc}/>
    } else if (this.props.imgSrc && this.props.imgCover) {
      return (
        <div className='card-img'>
          <div className='card-cover' />
          <img src={this.props.imgSrc}/>
        </div>
      )
    } else {
      return null
    }
  }

  render() {
    const badge = (
      this.props.badge?
      <p className='card-badge'>{this.props.badge}</p>
      :null
    )
    const renderCard = (
      this.props.clickable?
      <a className='card'>
        { this.renderImg() }
        {badge}
        <p className='card-title'>{this.props.title}</p>
        <p className='card-body'>{this.props.body}</p>
        { this.renderButton() }
      </a>
      :
      <div className='card'>
        { this.renderImg() }
        {badge}
        <p className='card-title'>{this.props.title}</p>
        <p className='card-body'>{this.props.body}</p>
        { this.renderButton() }
      </div>
    )
    return (
      <div className='card'>
        { this.renderImg() }
        {badge}
        <p className='card-title'>{this.props.title}</p>
        <p className='card-body'>{this.props.body}</p>
        { this.renderButton() }
      </div>
    )
  }
}
export default Card;
