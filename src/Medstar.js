import React from 'react';
import { Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Suggest from './components/Suggest';
import Space from './components/Space';
import ReactTooltip from 'react-tooltip';

import MedStarFull from './images/medstar/medstar-full.png';
import MedStarMap from './images/medstar/medstar-map.png';
import MedStarCTA from './images/medstar/med-cta.png';
import PanaMock3 from './images/pana/p-mock-3.png';

class Medstar extends React.Component {
  render() {
    return (
      <div className='paul-pana'>
        <Header />

        <div className='container body-pad'>

          <div className='row middle-xs'>

            <div className='col-md-6 col-xs-12'>
              <h1 className='zing super'>MedStar</h1>
              <h2 className='zing'>Comprehensive approaches for mental wellness in schools</h2>
              <p>A consulting project where I designed and coded the website for the MedStar Georgetown Center for Wellbeing in School Environments (WISE). The center supports multiple mental health initiatives for school children.</p>
              <p className='emphasize'><a target='_blank' rel='noopener noreferrer' href='https://www.medstarwise.org/'>Checkout the site at medstarwise.org</a></p>
              <p className='italic'>Project deliverables:</p>
              <ul>
                <li>Custom logo</li>
                <li>Collecting customer research and data</li>
                <li>Wireframes</li>
                <li>Code-ready mockups</li>
                <li>Coded in React</li>
              </ul>
            </div>

            <div className='col-md-6 col-xs-12'>
              <img
                alt='MedStar WISE'
                src={MedStarFull}
                className='border'
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
            <div className='col-md-8 col-xs-12'>
              <img
                src={MedStarMap}
                alt='Interactive MedStar Map'
                className='border'
                />
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
                src={MedStarCTA}
                alt='Medstar WISE'
                className='border'
                />
            </div>
          </div>
          <Space h='5'/>
          <Suggest current={2} />

        </div>
        <Footer />
      </div>
    )
  }
}

export default Medstar;
