import React from 'react';
import classNames from 'classnames/bind';
import Icon from '../components/Icon'
import Button from '../components/Button'
import Modal from '../components/Modal'

class Modals extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false
    }
  }

  closeModal = () => {
    console.log('hello');
    this.setState({
      modal: false
    })
  }

  render() {
    const modal = this.state.modal
    const renderModal = (
      this.state.modal?
      <Modal closeClick={ () => this.setState({modal: !this.state.modal}) }/>
      : null
    )

    return (
      <div className='col-md-9 col-xs-12 bg--inner'>
        {renderModal}
        <div className='container'>
          <div className='row'>
            <div className='col-xs-12'>
              <div className='sub-title-line' />
              <h2 className='title'>Modals</h2>
              <h5>Modals...</h5>
            </div>
          </div>

          <div className='row'>
            <div className='col-xs-12'>
              <Button
                onClick={ () => this.setState({modal: true}) }
                data='go go modal'
                type='primary'/>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Modals;
