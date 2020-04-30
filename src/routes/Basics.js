import React from 'react';
import List from '../components/List'

class Basics extends React.Component {
  render() {
    return (
      <div className='col-md-9 col-xs-12 bg--inner'>
        <div className='container'>
          <div className='row'>
            <div className='col-xs-12'>
              <div className='sub-title-line' />
              <h2 className='title'>Basics</h2>
              <h5>The fundamental building blocks of meow: 12 column grid, spacing, and typography.</h5>
            </div>
          </div>
          <div className='row'>
            <div className='col-xs-12'>
              <List
                title='Colors: '
                location='/basics/colors'
                large={true}
                content='The color spectrum of meow.'
                />
            </div>
            <div className='col-xs-12'>
              <List
                title='Grid: '
                location='/basics/grid'
                large={true}
                content='12 column grid built with flexbox and a lightweight design.'
                />
            </div>
            <div className='col-xs-12'>
              <List
                title='Spacing: '
                location='/basics/spacing'
                large={true}
                content='Consistent alignment via margin, padding, height, and width.'
                />
            </div>
            <div className='col-xs-12'>
              <List
                title='Typography: '
                location='/basics/typography'
                large={true}
                content='We know you are just here for the typeface.'
                />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Basics;
