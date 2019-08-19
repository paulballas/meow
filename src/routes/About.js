import React from 'react';
import { Link } from 'react-router-dom'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Space from '../components/Space';

import AboutPaul from '../images/about/about-paul.png';
import Books from '../images/about/books.png'

class About extends React.Component {
  render() {
    return (
      <div className='paul-about'>

        <Header/>

        <div className='container body-pad'>

          <div className='row middle-xs'>
            <div className='col-md-4 col-xs-12 p-b-1'>
              <img
                alt='Paul Ballas'
                src={AboutPaul}
                className='border'
                />
            </div>
            <div className='col-md-8 col-xs-12 p-b-1 p-l-xs-2'>
              <h1 className='zing'>hey there!</h1>
              <p>I'm Paul, a designer, and developer living in Denver, CO. I specialize in UX design for web and mobile applications but have a also have extensive experience in visual and animation design. I also love UX research and learning more about how to to make technology products improve the lives of users.</p>
              <p>Outside of my design work, I'm an avid cyclist and can typically be found on one of my (too many) bikes, or drawing <Link to='/illustrations'>illustrations</Link>.</p>
            </div>
          </div>

          <Space h='3'/>

          <div className='row middle-xs center-xs'>
            <div className='col-xs-12'>
              <h2 className='zing'>Book Contributions</h2>
            </div>
            <div className='col-md-3 col-xs-10'>
              <img
                alt='Hooked By Nir Eyal / Designing for Behavior Change by Stephen Wendel PhD'
                className='m-b-xs-1'
                src={Books}
                />
            </div>
            <div className='col-md-6 col-xs-12 text-left'>
              <p>I've made two (small) book contributions. Both books discuss behavioral psychology and how to nurture user engagement:</p>
              <p><a
                className='book-link'
                target='_blank'
                rel='noopener noreferrer'
                href='https://www.amazon.com/Hooked-How-Build-Habit-Forming-Products/dp/1591847788/'>
                Hooked</a> by Nir Eyal</p>
              <p><a
                className='book-link'
                target='_blank'
                rel='noopener noreferrer'
                href='https://www.amazon.com/Designing-Behavior-Change-Psychology-Behavioral/dp/1449367623'>
                Designing for Behavior Change</a> by Stephen Wendell, PhD</p>
            </div>
          </div>

          <Space h='3'/>

          <div className='row center-xs'>
            <div className='col-xs-12'>
              <h2 className='zing'>design process</h2>
            </div>
            <div className='col-md-8 col-xs-12'>
              <div className='slide-container'>
                <iframe
                  title='Paul Ballas Design Process'
                  src="https://docs.google.com/presentation/d/e/2PACX-1vQfyubCyBws-JRMWcfwgDMHXZvaj978xoVWnAX5IESESuxmStgzUn8o_fRfgOy1AP7YDCXNKGJElYWg/embed?start=false&loop=false&delayms=3000"
                  frameBorder="0"
                  width='960px'
                  height='569px'
                  max-width='100%'
                  allowFullScreen={true}
                  mozallowfullscreen="true"
                  webkitallowfullscreen="true">
                </iframe>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default About;
