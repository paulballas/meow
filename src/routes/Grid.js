import React from 'react';
import classNames from 'classnames/bind';
import Space from '../components/Space.js'
import MeowTable from '../components/MeowTable.js'
import { PrismCodeLight } from '../components/PrismCodeLight'

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
    const gridCode =(
`<div class='row ` + this.state.justification + `-xs ` + this.state.alignment + `-xs '></div>`
    )

    const grid1 =`<div class='container'><div>`
    const grid2 =(
`<div class='container'>
  <div class='row between-xs middle-xs'></div>
<div>`
)
    const grid3 = (
`<div class='container'>
  <div class='row between-xs middle-xs'>
    <div class='col-md-4 col-xs-12'></div>
    <div class='col-md-4 col-xs-12'></div>
    <div class='col-md-4 col-xs-12'></div>
    <div class='col-md-4 col-xs-12'></div>
  </div>
<div>`
    )

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

              <p className='lg'>Meow's grid is a mobile-first, 12 column, responsive framework for creating uniform layouts.  The grid is built with <a href='https://css-tricks.com/snippets/css/a-guide-to-flexbox/'>flexbox</a> rather than floats for an adjustable layout.</p>

              <p className='lg'>We're not reinventing the wheel - our grid is heavily based on <a href='https://getbootstrap.com/docs/4.4/layout/grid/'>Bootstrap's grid</a>. The breakpoints are as follows:</p>
            </div>
          </div>

          <div className='row m-b-2-xs'>
            <div className='col-md-6 col-md-offset-3 col-xs-12'>
              <MeowTable
                tableHeaders={['Name', 'Breakpoint']}
                tableRows={[
                  ['xs', '287px'],
                  ['sm', '464px'],
                  ['md', '752px'],
                  ['lg', '1216px'],
                  ['xl', '1967px']
                ]}
                singleRow={true}
                centered={true}
              />
            </div>
          </div>

          <div className='row'>
            <div className='col-xs-12'>
              <p><code>{gridCode}</code></p>
              <label className='grid-label'>
                justification: <span>{this.state.justification}</span>
              </label>
              <div className='tabs'>
                <p
                  onClick={ () => this.setGridClass(1, 'start') }
                  className={
                    this.state.justification === 'start'?
                    'tab active'
                    : 'tab'
                  }>flex-start
                </p>
                <p
                  onClick={ () => this.setGridClass(1, 'center') }
                  className={
                    this.state.justification === 'center'?
                    'tab active'
                    : 'tab'
                  }>center
                </p>
                <p
                  onClick={ () => this.setGridClass(1, 'end') }
                  className={
                    this.state.justification === 'end'?
                    'tab active'
                    : 'tab'
                  }>flex-end
                </p>
                <p
                  onClick={ () => this.setGridClass(1, 'around') }
                  className={
                    this.state.justification === 'around'?
                    'tab active'
                    : 'tab'
                  }>space-around
                </p>
                <p
                  onClick={ () => this.setGridClass(1, 'between') }
                  className={
                    this.state.justification === 'between'?
                    'tab active'
                    : 'tab'
                  }>space-between
                </p>
              </div>
              <label className='grid-label'>alignment: <span>{this.state.alignment}</span></label>
              <div className='tabs'>
                <p
                  onClick={ () => this.setGridClass(2, 'top') }
                  className={
                    this.state.alignment === 'top'?
                    'tab active'
                    : 'tab'
                  }>flex-start
                </p>
                <p
                  onClick={ () => this.setGridClass(2, 'middle') }
                  className={
                    this.state.alignment === 'middle'?
                    'tab active'
                    : 'tab'
                  }>center
                </p>
                <p
                  onClick={ () => this.setGridClass(2, 'bottom') }
                  className={
                    this.state.alignment === 'bottom'?
                    'tab active'
                    : 'tab'
                  }>flex-end
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

          <Space h={2} />

          <div className='row'>
            <div className='col-xs-12'>
              <p className='lg'>Start with the <code>.container</code> class, which by default has <code>2rems</code> of padding. Adding full to the container <code>.container .full</code> eliminates the padding, giving the container 100% width.</p>
              <PrismCodeLight
                code={grid1}
                language='jsx'
                file='index.html'
              />
            <p className='lg'>Inside the <code>.container</code> add a <code>.row</code> for each speparte row of content. Rows are flex-based and can have any of the above classes added to it: <code>.row .between-xs .middle-xs</code></p>
              <PrismCodeLight
                code={grid2}
                language='html'
                file='index.html'
              />
            <p className='lg'>Add a column to space out content inside of a row. Example column for 4 pieces of columns: <code>.col-md-4 .col-xs-12</code>.</p>
              <PrismCodeLight
                code={grid3}
                langDisplay={'HTML'}
                language='html'
                file='index.html'
              />
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Grid;
