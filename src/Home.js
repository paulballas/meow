import React from 'react';
import { Link } from 'react-router-dom'

import PaulBallasHero from './images/PaulBallas.svg'
import Dribbble from './images/dribbble-ball-icon.svg'
import LinkedIn from './images/linkedin.svg'
import Medium from './images/medium.svg'

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
      <div className='proj-footer animated slideInDown a-2'>
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
                <p>
                  <Link to='/about'>Learn more about Paul</Link>
                </p>

                <div className='flex port'>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://dribbble.com/paulballas'>
                    <img
                      src={Dribbble}
                      alt='Dribbble Logo'
                      className='port-link'
                      />
                  </a>
                  <a
                    target='_blank'
                    rel="noopener noreferrer"
                    href='https://www.linkedin.com/in/paulballas'>
                    <img
                      src={LinkedIn}
                      alt='LinkedIn Logo'
                      className='port-link'
                      />
                  </a>
                  <a
                    target='_blank'
                    rel="noopener noreferrer"
                    href='https://medium.com/@paulballas'>
                    <img
                      src={Medium}
                      alt='Medium Logo'
                      className='port-link'
                      />
                  </a>
                </div>

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

              <Link
                to='/medstar'
                className='proj proj--b'
                onMouseEnter={() => this.setState({activeHover: 'medstar'})}
                onMouseLeave={() => this.setState({activeHover: !this.state.activeHover})}>
                <img src={MedStar} alt='MedStar' />

                {
                  this.state.activeHover === 'medstar'?
                  <div className='project-hover animated fadeIn' />
                  : null
                }
                {
                  this.state.activeHover === 'medstar'?
                  this.projectFooter('Medstar - mental wellness for schools')
                  : null
                }
              </Link>

              <Link
                to='/usac'
                className='proj proj--c'
                onMouseEnter={() => this.setState({activeHover: 'usac'})}
                onMouseLeave={() => this.setState({activeHover: !this.state.activeHover})}>
                <img src={Usac} alt='USAC' />

                {
                  this.state.activeHover === 'usac'?
                  <div className='project-hover animated fadeIn' />
                  : null
                }
                {
                  this.state.activeHover === 'usac'?
                  this.projectFooter('USA Cycling')
                  : null
                }
              </Link>

              <Link
                to='/odc'
                className='proj proj--d'
                onMouseEnter={() => this.setState({activeHover: 'odc'})}
                onMouseLeave={() => this.setState({activeHover: !this.state.activeHover})}>
                <img src={Odc} alt='ODC' />

                {
                  this.state.activeHover === 'odc'?
                  <div className='project-hover animated fadeIn' />
                  : null
                }
                {
                  this.state.activeHover === 'odc'?
                  this.projectFooter('ODC')
                  : null
                }
              </Link>

              <Link
                to='/class-scout'
                className='proj proj--e proj--v'
                onMouseEnter={() => this.setState({activeHover: 'class'})}
                onMouseLeave={() => this.setState({activeHover: !this.state.activeHover})}>
                <img src={PhoneClip} alt='iPhone' />
                <video autoPlay loop muted>
                  <source src={ClassScout} />
                </video>

                {
                  this.state.activeHover === 'class'?
                  <div className='project-hover animated fadeIn' />
                  : null
                }
                {
                  this.state.activeHover === 'class'?
                  this.projectFooter('Class Scout - Mental health tracker for schools')
                  : null
                }
              </Link>

              <Link
                to='/dangray'
                className='proj proj--f'
                onMouseEnter={() => this.setState({activeHover: 'dangray'})}
                onMouseLeave={() => this.setState({activeHover: !this.state.activeHover})}>
                <img src={DgDrywall} alt='Dan Gray Drywall' />

                {
                  this.state.activeHover === 'dangray'?
                  <div className='project-hover animated fadeIn' />
                  : null
                }
                {
                  this.state.activeHover === 'dangray'?
                  this.projectFooter('Dan Gray Drywall')
                  : null
                }
              </Link>

              <Link
                to='/illustrations'
                className='proj proj--g'
                onMouseEnter={() => this.setState({activeHover: 'illustrations'})}
                onMouseLeave={() => this.setState({activeHover: !this.state.activeHover})}>
                <img src={Illustrations} alt='Illustrations' />

                {
                  this.state.activeHover === 'illustrations'?
                  <div className='project-hover animated fadeIn' />
                  : null
                }
                {
                  this.state.activeHover === 'illustrations'?
                  this.projectFooter('Illustrations')
                  : null
                }
              </Link>

            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Home;
