import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Suggest from '../components/Suggest';
import Space from '../components/Space';
import ImgZoom from '../components/ImgZoom';
import ReactTooltip from 'react-tooltip';

import ills from '../images/illustrations.json'

class Class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgZoom: false,
      imgSrc: ''
    }
  }

  zoom = (imgVari) => {
    this.setState({
      imgZoom: true,
      imgSrc: imgVari
    })
  }

  zoomClose = () => {
    this.setState({imgZoom: false})
  }

  renderIlls = () => {
    const illList = ills.map((i) => {
      return (
        <div key={i.name} className='col-md-4 col-xs-12'>
          <img
            onClick={ () => this.zoom(i.url) }
            alt={i.alt}
            className='zoomable m-b-1'
            src={i.url}
             />
        </div>
      )
    });
    return illList;
  }

  renderImgZoom = () => {
    if (this.state.imgZoom) {
      return <ImgZoom
        wideZoom={true}
        closeImgZoom={this.zoomClose}
        img={this.state.imgSrc}
        />
    } else {
      return null
    }
  }

  render() {
    return (
      <div className='proj-wrapper'>
        {this.renderImgZoom()}
        <Header />

        <div className='container body-pad'>
          <div className='row'>
            <div className='col-xs-12'>
              <h1 className='zing super'>illustrations</h1>
            </div>
            {this.renderIlls()}
          </div>
          <Space h='5'/>
          <Suggest current={7} />
        </div>
        <Footer />
      </div>
    )
  }
}

export default Class;
