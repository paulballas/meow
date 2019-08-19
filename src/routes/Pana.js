import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Suggest from '../components/Suggest';
import Space from '../components/Space';
import ReactTooltip from 'react-tooltip';

import PanaMobileFull from '../images/pana/pana-mobile-full.png';
import PanaMock1 from '../images/pana/p-mock-1.png';
import PanaMock2 from '../images/pana/p-mock-2.png';
import PanaMock3 from '../images/pana/p-mock-3.png';

class Pana extends React.Component {
  render() {
    return (
      <div className='proj-wrapper'>
        <Header />

        <div className='container body-pad'>

          <div className='row middle-xs'>

            <div className='col-md-6 col-xs-12'>
              <h1 className='zing super'>Pana</h1>
              <h2 className='zing'>Seamless business travel</h2>
              <p>As the Lead Designer and Product Leader at Pana, I created all things UX and visual design, including:</p>
              <ul>
                <li>Customer and analytics research</li>
                <li>Leading customer feedback sessions</li>
                <li>Wireframes, journey maps, and personas</li>
                <li>Code-ready mockups</li>
                <li>Front-end developer (as needed)</li>
              </ul>
            </div>

            <div className='col-md-6 col-xs-12'>
              <img
                alt='Pana Mobile'
                src={PanaMobileFull}
                />
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
                data-tip='Initial wireframe'
                src={PanaMock1}
                alt='Pana Mockup'
                className='pana-mobile'/>
            </div>
            <div className='col-md-3 col-xs-12'>
              <img
                data-tip='Wiframe v2 after customer feedback'
                src={PanaMock2}
                alt='Pana Mockup'
                className='pana-mobile'/>
            </div>
            <div className='col-md-3 col-xs-12'>
              <img
                data-tip='Final mockup ready for code'
                src={PanaMock3}
                alt='Pana Mockup'
                className='pana-mobile'/>
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
              <div className='slide-container y-t'>
                <iframe
                  title='Pana Crosby Video'
                  width='960px'
                  height='569px'
                  max-width='100%'
                  src="https://www.youtube.com/embed/e-p-FqXkgBI"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                </iframe>
              </div>
            </div>
          </div>
          <Space h='5'/>
          <Suggest current={1} />

        </div>
        <Footer />
      </div>
    )
  }
}

export default Pana;
