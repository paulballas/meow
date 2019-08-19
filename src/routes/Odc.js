import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Suggest from '../components/Suggest';
import Space from '../components/Space';
import ReactTooltip from 'react-tooltip';

import OdcHero from '../images/home/odc.png';
import UsacBtns from '../images/usac/usac-btns.png';
import UsacColors from '../images/usac/usac-colors.png';
import UsacMobile from '../images/usac/usac-mobile.png';
import UsacMobile2 from '../images/usac/usac-mobile2.png';
import UsacTables from '../images/usac/usac-tables.png';
import UsacType from '../images/usac/usac-type.png';
import UsacScreen1 from '../images/usac/usac-screen1.png';
import UsacScreen2 from '../images/usac/usac-screen2.png';
import UsacScreen3 from '../images/usac/usac-screen3.png';
import UsacScreen4 from '../images/usac/usac-screen4.png';

class Odc extends React.Component {
  render() {
    return (
      <div className='proj-wrapper'>
        <Header />

        <div className='container body-pad'>

          <div className='row middle-xs'>

            <div className='col-md-6 col-xs-12'>

              <h1 className='zing super'>ODC</h1>
              <h2 className='zing'>B2B Enterprise Products</h2>

              <p>As a Senior Product Designer at ODC, I've worked across a number of large scale products that serve thousands of customers and even more users. Due to the internal rules of Oracle, I'm not allowed to share most of my work—below are a few public screens.</p>

              <p className='italic'>Responsiblities:</p>
              <ul>
                <li>Customer reseach and discovery</li>
                <li>Working with multiple dev and product teams</li>
                <li>Wireframes and code-ready mockups</li>
                <li>Build and implement the design system</li>
                <li>Limited front-end development</li>
              </ul>
            </div>

            <div className='col-md-6 col-xs-12'>
              <img
                alt='ODC Hero'
                src={OdcHero}
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

          <div className='row center-xs'>
            <div className='col-md-6 col-xs-12'>
              <img src={UsacBtns} alt='USAC Components' className='border m-b-1'/>
            </div>
            <div className='col-md-6 col-xs-12'>
              <img src={UsacColors} alt='USAC Components' className='border m-b-1'/>
            </div>
            <div className='col-md-6 col-xs-12'>
              <img src={UsacMobile} alt='USAC Components' className='border m-b-1'/>
            </div>
            <div className='col-md-6 col-xs-12'>
              <img src={UsacMobile2} alt='USAC Components' className='border m-b-1'/>
            </div>
            <div className='col-md-6 col-xs-12'>
              <img src={UsacTables} alt='USAC Components' className='border m-b-1'/>
            </div>
            <div className='col-md-6 col-xs-12'>
              <img src={UsacType} alt='USAC Components' className='border m-b-1'/>
            </div>
          </div>

          <Space h='5'/>

          <Suggest current={4} />

        </div>
        <Footer />
      </div>
    )
  }
}

export default Odc;
