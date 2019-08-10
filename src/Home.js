import React from 'react';
import { Link } from 'react-router-dom'

import PaulBallasHero from './images/PaulBallas.svg'
import MedStar from  './images/home/medstar-wise.png'
import Usac from  './images/home/usac.png'
import Odc from  './images/home/odc.png'
import DgDrywall from  './images/home/dg-drywall.png'
import Illustrations from './images/home/pink-bear.png'
import PhoneClip from './images/home/iphone-clip.png'
import VideoPana from './images/home/pana-video.mp4'
import ClassScout from './images/home/classscout.mp4'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeHover: ''
    }
  }

  projectFooter = (name) => {
    return (
      <div className='proj-footer animated slideInUp a-2'>
        <p className='zing'>{name}</p>
      </div>
    )
  }

  render() {
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
                <p>👋 <br/>Hey there! I'm a designer based in Denver, CO specializing in web and mobile app design. On the side, I also create illustrations and comics.</p>
                <p>Want to chat? <a href='mailto:paul@sudodigital.com'>Drop me a line</a>.</p>
              </div>
            </div>

            <div className='col-md-6'>

              <Link
                to='/pana'
                className='proj proj--a proj--v'
                onMouseEnter={() => this.setState({activeHover: 'pana'})}
                onMouseLeave={() => this.setState({activeHover: !this.state.activeHover})}>
                <img src={PhoneClip} alt='iPhone' />
                <video autoPlay loop muted>
                  <source src={VideoPana} />
                </video>

                {this.state.activeHover === 'pana'? <div className='project-hover animated fadeIn' /> : null}
                {this.state.activeHover === 'pana'? this.projectFooter('Pana - seamless business travel') : null}
              </Link>

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
    )
  }
}

export default Home;
