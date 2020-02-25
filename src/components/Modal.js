import React from 'react';
import ReactTooltip from 'react-tooltip';
import {Redirect} from 'react-router-dom';
import CloseIcon from '../images/icons/icon-close.svg'

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuth: false,
      passwordError: false,
      passEnter: "",
      isLoggedIn: this.props.isLoggedIn
    }
  }

  renderPasswordError = () => {
    if (this.state.passwordError) {
      return <p className='error zing'>Whoops! That password is not correct... try again.</p>
    }
    else {
      return null
    }
  }

  onPassChange = (event) => {
    this.setState({passEnter: event.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.passEnter === 'Bike') {
      return this.props.isLoggedIn(true)
    }
    else {
      return this.setState({passwordError: true})
    }
  }

  render() {
    if (this.state.isAuth === true) {
      return <Redirect to='/odc' />
    }
    return (
      <div className='modal'>
        <div className='container modal-container'>
          <div className='row'>
            <div className='col-md-6 col-md-offset-3 col-xs-12'>
              <div className='modal-content animated fadeInUp'>
                <div className='modal-body'>
                  <div className='flex middle between'>
                    <p className='zing'>Password Required</p>
                    <img
                      alt='Close Icon'
                      src={CloseIcon}
                      className='close-modal'
                      onClick={this.props.closeModal}
                      data-tip='Close Modal'
                    />
                  </div>
                  <p>Oracle has asked that I do not allow public access to my design work for the company. Sorry <span role='img' aria-label='sad face'>😐</span></p>
                  <p>If you were provided with a password to view my work for Oracle, please enter it below:</p>
                  { this.renderPasswordError() }
                  <label>Password</label>
                  <form onSubmit={this.handleSubmit}>
                    <input
                      type='password'
                      placeholder='Password'
                      onChange={this.onPassChange}
                    />
                    <input type='submit' value='Submit Password' />
                    <ReactTooltip />
                  </form>
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
