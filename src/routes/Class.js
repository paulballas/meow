import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Suggest from '../components/Suggest';
import Space from '../components/Space';
import ImgZoom from '../components/ImgZoom';
import ReactTooltip from 'react-tooltip';

import IphoneClass from '../images/home/iphone.png';
import ClassScout from '../images/home/classscout.mp4'
import Class1 from '../images/class/class-1.png';
import Class2 from '../images/class/class-2.png';
import Class3 from '../images/class/class-3.png';
import ClassWeb from '../images/class/cs-web.png';

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

  renderImgZoom = () => {
    if (this.state.imgZoom) {
      return <ImgZoom
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

          <div className='row middle-xs'>

            <div className='col-md-6 col-xs-12'>
              <h1 className='zing super'>Class Scout</h1>
              <h2 className='zing'>mental health tracker for schools</h2>
              <p>A consulting project where I designed and a new mobile app that allows teachers to track behaviors of their students, and report back to their parents. The app was adopted by several schools and allows teachers to quickly note positive or negative behavior, and provide detailed reports to the child's family.</p>
              <p className='italic'>Project Deliverables</p>
              <ul>
                <li>Customer and analytics research</li>
                <li>Wireframes and personas</li>
                <li>Code-ready mockups</li>
                <li>Marketing website design</li>
                <li>Animated Promo Video</li>
              </ul>
            </div>

            <div className='col-md-6 col-xs-12'>
              <div className='phone-video'>
                <img
                  alt='ClassScout Promo Video'
                  className='class-video'
                  src={IphoneClass}
                  />
                <video autoPlay loop muted>
                  <source src={ClassScout} />
                </video>
              </div>
            </div>
          </div>

          <Space h='5'/>

          <div className='row center-xs'>
            <div className='col-md-8 col-xs-12'>
              <p className='large'>The mobile app connects a user to our team of travel agents, helping to manage all parts of their trip. The chat experience provides an easy way to communicate to send/receive travel documents and book a trip.</p>
            </div>
          </div>

          <Space h='1'/>

          <div className='row center-xs middle-xs'>
            <div className='col-md-3 col-xs-12'>
              <img
                onClick={ () => this.zoom(Class1) }
                data-tip='Easily slide to record the behavior'
                src={Class1}
                alt='Pana Mockup'
                className='pana-mobile zoomable'/>
            </div>
            <div className='col-md-3 col-xs-12'>
              <img
                onClick={ () => this.zoom(Class2) }
                data-tip='Share patterns with parents and school administrators'
                src={Class2}
                alt='Pana Mockup'
                className='pana-mobile zoomable'/>
            </div>
            <div className='col-md-3 col-xs-12'>
              <img
                onClick={ () => this.zoom(Class3) }
                data-tip='Easily edit behaviors'
                src={Class3}
                alt='Pana Mockup'
                className='pana-mobile zoomable'/>
            </div>
            <ReactTooltip />
          </div>

          <Space h='5'/>

          <div className='row center-xs'>
            <div className='col-md-8 col-xs-12'>
              <p className='large'>In addition to the traditional UX design work, I also created marketing videos for new releases of our products.</p>
            </div>
          </div>

          <Space h='1'/>

          <div className='row center-xs'>
            <div className='col-md-8 col-xs-12'>
              <img
                src={ClassWeb}
                alt='ClassScout Web'
                />
            </div>
          </div>
          <Space h='5'/>
          <Suggest current={5} />

        </div>
        <Footer />
      </div>
    )
  }
}

export default Class;
