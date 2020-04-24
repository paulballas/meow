import React from 'react';
import colors from '../colors/colors.json'
import {PrismCodeLight} from '../components/PrismCodeLight'

class Colors extends React.Component {

  renderColors = (group) => {
    return (
      colors.colors[group].map((c) => {
        return (
          <div
            key={c.vari}
            className='color-display-container'>
            <div
              style={{background: c.hex}}
              className='color-display'
              />
            <p><b>Name:</b> ${c.vari}</p>
            <p><b>Hex:</b> {c.hex}</p>
          </div>
        )
      })
    )
  }

  render() {

    const sassVariCode = (
`// Typography
$text-primary: $currant-4
$text-secondary: $wood-4
$text-light-1: $currant-2
$text-light-2: $wood-2
$link: $eggplant-3

// Backgrounds & Boxes
$background-primary: $salt-1
$background-secondary: $lily-1
$background-active: $gigas-3
$border-active: $gigas-4
$border-primary: $salt-3
$border-light-1: $lily-2
$border-light-2: $lily-3

// Statuses
$status-success: $gigas-3
$status-warning: $pomegranate-3
$status-danger: $razz-4
$status-neutral: $lily-4
$status-fun: $razz-2

// Buttons
$btn-primary: $gigas-3
$btn-secondary: $wood-3
$btn-tertiary: $lily-4
$btn-warning: $pomegranate-3
$btn-danger: $razz-4
$btn-fun: $razz-2

// Icons
$icon-light: $white
$icon-dark: $currant-4
$icon-pop-1: $razz-3
$icon-pop-2: $gigas-3
$icon-danger: $pomegranate-3

// Modals
$modal-background: rgba($gigas-4, 0.6)

// Other
$divider: $razz-2
`)

    return (
      <div className='col-md-9 col-xs-12 bg--inner'>
        <div className='container'>
          <div className='row'>
            <div className='col-xs-12'>
              <div className='sub-title-line' />
              <h2 className='title'>Colors</h2>
              <h5 className='text-light-1'>Mere color, unspoiled by meaning, and unallied with definite form, can speak to the soul in a thousand different ways.</h5>
            </div>
          </div>

          <div className='row m-b-1-xs'>
            <div className='col-xs-12'>
              <div className='content-card'>
                <h5>Eggplant</h5>
                <div className='flex middle between'>
                  {this.renderColors('eggplant')}
                </div>
              </div>
            </div>
          </div>

          <div className='row m-b-1-xs'>
            <div className='col-xs-12'>
              <div className='content-card'>
                <h5>Razz</h5>
                <div className='flex middle between'>
                  {this.renderColors('razz')}
                </div>
              </div>
            </div>
          </div>

          <div className='row m-b-1-xs'>
            <div className='col-xs-12'>
              <div className='content-card'>
                <h5>Gigas</h5>
                <div className='flex middle between'>
                  {this.renderColors('gigas')}
                </div>
              </div>
            </div>
          </div>

          <div className='row m-b-1-xs'>
            <div className='col-xs-12'>
              <div className='content-card'>
                <h5>Lily</h5>
                <div className='flex middle between'>
                  {this.renderColors('lily')}
                </div>
              </div>
            </div>
          </div>

          <div className='row m-b-1-xs'>
            <div className='col-xs-12'>
              <div className='content-card'>
                <h5>Wood</h5>
                <div className='flex middle between'>
                  {this.renderColors('wood')}
                </div>
              </div>
            </div>
          </div>

          <div className='row m-b-1-xs'>
            <div className='col-xs-12'>
              <div className='content-card'>
                <h5>Pomegranate</h5>
                <div className='flex middle between'>
                  {this.renderColors('pomegranate')}
                </div>
              </div>
            </div>
          </div>

          <div className='row m-b-1-xs'>
            <div className='col-xs-12'>
              <div className='content-card'>
                <h5>Salt</h5>
                <div className='flex middle between'>
                  {this.renderColors('salt')}
                </div>
              </div>
            </div>
          </div>

          <div className='row m-b-1-xs'>
            <div className='col-xs-12'>
              <div className='content-card'>
                <h5>Currant</h5>
                <div className='flex middle between'>
                  {this.renderColors('currant')}
                </div>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-xs-12'>
              <PrismCodeLight
                code={sassVariCode}
                langDisplay={'SASS'}
                language='Sass'
                file='_variables.sass'
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Colors;
