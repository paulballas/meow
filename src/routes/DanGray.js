import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Suggest from '../components/Suggest';
import Space from '../components/Space';

import DanGray1 from '../images/dg/dg-1.png';
import DanGrayLogo from '../images/dg/dg-logo.svg';
import DanGrayLogo2 from '../images/dg/dg-logo2.svg';

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

class DanGray extends React.Component {
  render() {
    return (
      <div className='proj-wrapper'>
        <Header />

        <div className='container body-pad'>

          <div className='row middle-xs'>

            <div className='col-md-6 col-xs-12'>

              <h1 className='zing super'>Dan Gray Dywall</h1>
              <h2 className='zing'>custom contractor website</h2>

              <p>USA Cycling needed help with a new design system, which was to be implemented by another software development agency. I coordinated with both USAC and the dev agency to understand the needs and constraints for the new design system.</p>

              <p className='italic'>Project deliverables:</p>
              <ul>
                <li>Research and discovery with USAC team</li>
                <li>Iconography</li>
                <li>Design elements (colors, typography, style)</li>
                <li>Voice and tone</li>
                <li>Sketch components (buttons, inputs, etc.)</li>
                <li>Resdesign of key pages with new design system</li>
              </ul>
            </div>

            <div className='col-md-6 col-xs-12'>
              <img
                alt='Dan Gray Drywall'
                src={DanGray1}
                className='border'
                />
            </div>
          </div>

          <Space h='5'/>

          <div className='row center-xs'>
            <div className='col-md-8 col-xs-12'>
              <p className='large'>Custom logo</p>
            </div>
          </div>

          <Space h='1'/>

          <div className='row center-xs'>
            <div className='col-md-4 col-xs-12'>
              <div className='dg-logos'>
                <img src={DanGrayLogo} alt='Dang Gray Logo' />
              </div>
            </div>
            <div className='col-md-4 col-xs-12'>
              <div className='dg-logos dg-logos--b'>
                <img src={DanGrayLogo2} alt='Dang Gray Logo' />
              </div>
            </div>
          </div>

          <Space h='5'/>

          <div className='row center-xs'>
            <div className='col-md-8 col-xs-12'>
              <p className='large'>Using the design system, I mocked up a few keys screens across the website and internal application.</p>
            </div>
          </div>

          <Space h='1'/>

          <div className='row center-xs'>
            <div className='col-md-6 col-xs-12'>
              <img src={UsacScreen1} alt='USAC Components' className='border m-b-1'/>
            </div>
            <div className='col-md-6 col-xs-12'>
              <img src={UsacScreen2} alt='USAC Components' className='border m-b-1'/>
            </div>
            <div className='col-md-6 col-xs-12'>
              <img src={UsacScreen3} alt='USAC Components' className='border m-b-1'/>
            </div>
            <div className='col-md-6 col-xs-12'>
              <img src={UsacScreen4} alt='USAC Components' className='border m-b-1'/>
            </div>
          </div>
          <Space h='5'/>
          <Suggest current={6} />

        </div>
        <Footer />
      </div>
    )
  }
}

export default DanGray;
