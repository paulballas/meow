import React from 'react';
import classNames from 'classnames/bind';
import Icon from '../components/Icon'
import Space from '../components/Space'

class Type extends React.Component {
  render() {

    const codeType1 = `<a>`

    return (
      <div className='col-md-9 col-xs-12 bg--inner'>
        <div className='container'>
          <div className='row'>
            <div className='col-xs-12'>
              <div className='sub-title-line' />
              <h2 className='title'>Typography</h2>
              <h5>Mere color, unspoiled by meaning, and unallied with definite form, can speak to the soul in a thousand different ways.</h5>
            </div>
          </div>

          <div className='row'>
            <div className='col-xs-12'>

              <div className='content-card'>
                <p className='content-card-label'>headings</p>
                <h1>h1: Be here, now!</h1>
                <h2>h2: Be here, now!</h2>
                <h3>h3: Be here, now!</h3>
                <h4>h4: Be here, now!</h4>
                <h5>h5: Be here, now!</h5>
                <h6 className='m-b-0-xs'>h6: Be here, now!</h6>
              </div>

              <div className='content-card'>
                <p className='content-card-label'>paragraphs</p>
                <p>p: We're all just walking each other home.</p>
                <p className='lg m-b-0-xs'>p: (large) We're all just walking each other home.</p>
              </div>

              <div className='content-card'>
                <p className='content-card-label'>links</p>
                <a>a: Muddy water is best cleared...</a>
                <a>a: by leaving it alone</a>

                <Space h={1} />
                <a className='lg'>a: (large) Muddy water is best cleared...</a>
                <a className='lg'>a: (large) by leaving it alone</a>

                <Space h={1} />
                <a className='block'>a: (block) Muddy water is best cleared...</a>
                <a className='block'>a: (block) by leaving it alone</a>

                <p>Just as true humor is laughter at oneself, <a>true humanity</a> is knowledge of oneself.</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Type;
