import React from 'react';
import classNames from 'classnames/bind';
import MeowTableHeader from './MeowTableHeader'

class MeowTable extends React.Component {
  render() {
    const tableClasses = classNames(
      'meow-table',
      {
        'single-row': this.props.singleRow,
        'x-scroll': this.props.xScroll
      }
    )
    return (
      <div className={tableClasses}>
        <div className='meow-tr'>
          <MeowTableHeader name='Name' />
          <MeowTableHeader name='Breed' />
          <MeowTableHeader name='Other' />
          <MeowTableHeader name='alpha' />
          <MeowTableHeader name='beta' />
        </div>
        <div className='meow-tr'>
          <div className='meow-td'>Mittens</div>
          <div className='meow-td'>Persian</div>
          <div className='meow-td'>Likes</div>
          <div className='meow-td'>alpha</div>
          <div className='meow-td'>beta</div>
        </div>
        <div className='meow-tr'>
          <div className='meow-td'>Mittens</div>
          <div className='meow-td'>Persian</div>
          <div className='meow-td'>Likes</div>
          <div className='meow-td'>alpha</div>
          <div className='meow-td'>beta</div>
        </div>
        <div className='meow-tr'>
          <div className='meow-td'>Mittens</div>
          <div className='meow-td'>Persian</div>
          <div className='meow-td'>Likes</div>
          <div className='meow-td'>alpha</div>
          <div className='meow-td'>beta</div>
        </div>
      </div>
    )
  }
}

export default MeowTable;
