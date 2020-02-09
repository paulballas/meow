import React from 'react';

class Modal extends React.Component {
  render() {
    return (
      <div onClick={this.props.closeModal} className='modal'>
        <div className='container modal-container'>
          <div className='row'>
            <div className='col-md-8 col-md-offset-2 col-xs-12'>
              <div className='modal-content animated fadeInUp'>
                <div className='modal-body'>
                  <p>Oracle has asked that I do not allow public access to my design work there. Sorry 😐</p>
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
