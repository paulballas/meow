import React from 'react';
import Icon from './Icon'

const pages = [1, 2, 3, 4, 5]

class Paginator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activePage: 3
    }
  }

  renderPages = () => {
    return (
      pages.map((page) => {
        return (
          <div
            aria-label={'Page ' + page}
            className={
              this.state.activePage === page?
              'page active'
              : 'page'
            }>
            {page}
          </div>
        )
      })
    )
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12'>
            <div className='paginator'>
              <Icon
                name='BackArrows'
                iconClass='lg dark'
                label='Back Arrows'
              />
              { this.renderPages() }
              <Icon
                name='NextArrows'
                iconClass='lg dark'
                label='Next Arrows'
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Paginator;
