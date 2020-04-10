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
    return (
      <div className='container'>
        {}
        <div className='row'>
          <div className='col-xs-12'>
            <h3>Modals!</h3>
              <Button
                onClick={ () => this.setState({modal: true}) }
                data='go go modal'
                color='primary'
              />
            {
              modal?
              <Modal
                closeClick={ () => this.setState({modal: !this.state.modal}) }
              />
              : null}
          </div>
        </div>
      </div>
    )
  }
}

export default Modals;
