import React from 'react';
import logo from './logo.svg';
import './styles/meow.sass'

import PaulBallasHero from './images/PaulBallas.svg'
import MedStar from  './images/home/medstar-wise.png'
import Usac from  './images/home/usac.png'
import Odc from  './images/home/odc.png'
import DgDrywall from  './images/home/dg-drywall.png'
import Illustrations from './images/home/pink-bear.png'
import PhoneClip from './images/home/iphone-clip.png'
import VideoPana from './images/home/pana-video.mp4'
import ClassScout from './images/home/classscout.mp4'

function App() {
  return (
    <div className='paul-home'>

      <div className='container'>
        <div className='row'>

          <div className='col-md-6'>
            <div className='left fixed'>
              <img
                src={PaulBallasHero}
                alt='Paul Ballas'
                className='p-hero'
                />
              <h2 className='zing whale-2'>designer / developer / cyclist</h2>
              <p>👋 <br/>Hey there! I'm a designer based in Denver, CO specializing in web and mobile app design. On the side, I also create illustrations and comics. Want to chat? <a href='mailto:paul@sudodigital.com'>Drop me a line</a>.</p>
            </div>
          </div>

          <div className='col-md-6'>

            <div className='proj proj--a proj--v'>
              <img src={PhoneClip} alt='iPhone' />
              <video autoPlay loop muted>
                <source src={VideoPana} />
              </video>
            </div>

            <div className='proj proj--b'>
              <img
                src={MedStar}
                alt='MedStar'
                />
            </div>

            <div className='proj proj--c'>
              <img
                src={Usac}
                alt='MedStar'
                />
            </div>

            <div className='proj proj--d'>
              <img
                src={Odc}
                alt='ODC'
                />
            </div>

            <div className='proj proj--e proj--v'>
              <img src={PhoneClip} alt='iPhone' />
              <video autoPlay loop muted>
                <source src={ClassScout} />
              </video>
            </div>

            <div className='proj proj--f'>
              <img
                src={DgDrywall}
                alt='Dan Gray Drywall'
                />
            </div>

            <div className='proj proj--g'>
              <img
                src={Illustrations}
                alt='Pink Bear Illustrations'
                />
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

export default App;
