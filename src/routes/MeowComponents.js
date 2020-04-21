import React from 'react';
import List from '../components/List'

class MeowComponents extends React.Component {
  render() {
    return (
      <div className='col-md-9 col-xs-12 bg--inner'>
        <div className='container'>
          <div className='row'>
            <div className='col-xs-12'>
              <div className='sub-title-line' />
              <h2 className='title'>Components</h2>
              <h5>The lego pieces of meow.</h5>
            </div>
          </div>
          <div className='row'>
            <div className='col-xs-12'>
              <List
                title='Alerts: '
                location='/components/alerts'
                large={true}
                content='Alerted!'
                />
            </div>
            <div className='col-xs-12'>
              <List
                title='Buttons: '
                location='/components/buttons'
                large={true}
                content='Button down the hatches.'
                />
            </div>
            <div className='col-xs-12'>
              <List
                title='Cards: '
                location='/components/cards'
                large={true}
                content='House of cards.'
                />
            </div>
            <div className='col-xs-12'>
              <List
                title='Dropdowns: '
                location='/components/dropdowns'
                large={true}
                content='Drop it like it is hot.'
                />
            </div>
            <div className='col-xs-12'>
              <List
                title='Forms: '
                location='/components/forms'
                large={true}
                content='Inputs and things.'
                />
            </div>
            <div className='col-xs-12'>
              <List
                title='Lists: '
                location='/components/lists'
                large={true}
                content='this, this, and this.'
                />
            </div>
            <div className='col-xs-12'>
              <List
                title='Modals: '
                location='/components/modals'
                large={true}
                content='page takeover'
                />
            </div>
            <div className='col-xs-12'>
              <List
                title='Pagination: '
                location='/components/pagination'
                large={true}
                content='page by page'
                />
            </div>
            <div className='col-xs-12'>
              <List
                title='Tables: '
                location='/components/tables'
                large={true}
                content='Data tables'
                />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MeowComponents;
