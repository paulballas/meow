import React from 'react';
import classNames from 'classnames/bind';

class Grid extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      justification: 'between',
      alignment: 'middle'
    }
  }

  setGridClass = (id, c) => {
    if (id === 1) {
      this.setState({justification: c})
    } else if ( id === 2) {
      this.setState({alignment: c})
    }
  }

  render() {
    const gridClasses = classNames(
      'grid-demo',
      {
        'start': this.state.justification === 'start',
        'center': this.state.justification === 'center',
        'end': this.state.justification === 'end',
        'around': this.state.justification === 'around',
        'between': this.state.justification === 'between',
        'top': this.state.alignment === 'top',
        'middle': this.state.alignment === 'middle',
        'bottom': this.state.alignment === 'bottom',
      }
    )
    return (
      <div className='col-md-9 col-xs-12 bg--inner'>
        <div className='container'>
          <div className='row'>
            <div className='col-xs-12'>
              <div className='sub-title-line' />
              <h2 className='title'>Grid</h2>
              <h5>Responsive grid based on flexbox.</h5>
            </div>
          </div>

          <div className='row'>
            <div className='col-xs-12'>
              <label className='grid-label'>justification: <span>{this.state.justification}</span></label>
              <div className='tabs'>
                <p
                  onClick={ () => this.setGridClass(1, 'start') }
                  className='tab'>flex-start
                </p>
                <p
                  onClick={ () => this.setGridClass(1, 'center') }
                  className='tab'>center
                </p>
                <p
                  onClick={ () => this.setGridClass(1, 'end') }
                  className='tab'>flex-end
                </p>
                <p
                  onClick={ () => this.setGridClass(1, 'around') }
                  className='tab'>space-around
                </p>
                <p
                  onClick={ () => this.setGridClass(1, 'between') }
                  className='tab'>space-between
                </p>
              </div>
              <label className='grid-label'>alignment: <span>{this.state.alignment}</span></label>
              <div className='tabs'>
                <p
                  onClick={ () => this.setGridClass(2, 'top') }
                  className='tab'>flex-start
                </p>
                <p
                  onClick={ () => this.setGridClass(2, 'middle') }
                  className='tab'>center
                </p>
                <p
                  onClick={ () => this.setGridClass(2, 'bottom') }
                  className='tab'>flex-end
                </p>
              </div>
              <div className={gridClasses}>
                <div className='block'/>
                <div className='block'/>
                <div className='block'/>
                <div className='block'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Grid;
