import React from 'react';
import ReactTooltip from 'react-tooltip';
import {Redirect} from 'react-router-dom';
import Icon from './Icon'

class Modal extends React.Component {
  render() {
    return (
      <div className='modal'>
        <div className='container modal-container'>
          <div className='row'>
            <div className='col-md-6 col-md-offset-3 col-xs-12'>
              <div className='modal-content animated fadeInUp'>
                <div className='modal-body'>
                  <div className='flex middle between'>
                    <h4>Why is meow awesome?</h4>
                      <Icon
                        onClick={this.props.closeClick}
                        name='CircleClose'
                        iconClass='lg neutral'
                        label='Close Modal'
                      />
                  </div>
                  <p>Let me count the ways...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal;
