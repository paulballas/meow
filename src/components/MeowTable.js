import React from 'react';
import classNames from 'classnames/bind';
import MeowTableHeader from './MeowTableHeader'

class MeowTable extends React.Component {

  renderTableHeaders = () => {
    const th = this.props.tableHeaders
    return (
      th.map((name) => {
        return (
          <MeowTableHeader key={name} name={name} />
        )
      })
    )
  }

  renderTableRows = () => {
    const tr = this.props.tableRows
    return (
      tr.map((rows) => {
        return (
          <div key={rows} className='meow-tr'>
            {
              rows.map((data)=> {
                return (
                  <div key={data} className='meow-td'>{data}</div>
                )
              })
            }
          </div>
        )
      })
    )
  }


  render() {
    const tableClasses = classNames(
      'meow-table',
      {
        'single-row': this.props.singleRow,
        'centered': this.props.centered,
        'x-scroll': this.props.xScroll
      }
    )
    return (
      <div className={tableClasses}>
        <div className='meow-tr'>
          { this.renderTableHeaders() }
        </div>
        { this.renderTableRows() }
      </div>
    )
  }
}

export default MeowTable;
