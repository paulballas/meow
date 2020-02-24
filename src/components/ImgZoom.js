import React from 'react';

class ImgZoom extends React.Component {
  render() {
    return (
      <div onClick={this.props.closeImgZoom} className='modal'>
        <div className='container modal-container'>
          <div className='row'>
            <div className='col-xs-12'>
              <div className='modal-content animated fadeInUp'>
                <img
                  alt='name'
                  className={this.props.wideZoom? 'wide-zoom' : null}
                  src={this.props.img}
                  />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ImgZoom;
