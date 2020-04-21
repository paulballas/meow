import React from 'react';
import Button from '../components/Button'
import Space from  '../components/Space'
import Prism from 'prismjs';
import PrismJsx from 'prismjs/components/prism-jsx.min';
import { PrismCode } from '../components/PrismCode'


const helloWorld = `renderThis = () => { return 'yay!'}`

const btnCodeJsx = (
`<Button
  data='action!'
  type='primary'
  margin='m-r-1-xs'
  large={false}
/>`
)

const btnCodeHtml = (`<button class='btn primary m-r-1-xs'>action!</button>`)


class Buttons extends React.Component {
  componentDidMount() {
    Prism.highlightAll();
  }
//
  render() {
    return (
      <div className='col-md-9 col-xs-12 bg--inner'>
        <div className='container'>
          <div className='row'>
            <div className='col-xs-12'>
              <div className='sub-title-line' />
              <h2 className='title'>Buttons</h2>
              <h5>Don't push my button.</h5>
            </div>
          </div>

          <div className='row'>
            <div className='col-xs-12'>
              <PrismCode
                codeJsx={btnCodeJsx}
                codeHtml={btnCodeHtml}
                language='jsx'
                file='Button.js'
              />
            </div>
          </div>

          <div className='row'>
            <div className='col-xs-12'>
              <h4>Default</h4>
              <div className='content-card'>
                <Button
                  data='action!'
                  type='primary'
                  margin='m-r-1-xs'
                />
                <Button
                  data='action!'
                  type='secondary'
                  margin='m-r-1-xs'
                />
                <Button
                  data='action!'
                  type='tertiary'
                  margin='m-r-1-xs'
                />
                <Button
                  data='action!'
                  type='warning'
                  margin='m-r-1-xs'
                />
                <Button
                  data='action!'
                  type='danger'
                  margin='m-r-1-xs'
                />
                <Button
                  data='action!'
                  type='fun'
                />

              </div>

              <h4>Outlined</h4>
              <div className='content-card'>
                <Button
                  data='action!'
                  type='primary'
                  margin='m-r-1-xs'
                  outlined={true} />
                <Button
                  data='action!'
                  type='secondary'
                  margin='m-r-1-xs'
                  outlined={true} />
                <Button
                  data='action!'
                  type='tertiary'
                  margin='m-r-1-xs'
                  outlined={true} />
                <Button
                  data='action!'
                  type='warning'
                  margin='m-r-1-xs'
                  outlined={true} />
                <Button
                  data='action!'
                  type='danger'
                  margin='m-r-1-xs'
                  outlined={true} />
                <Button
                  data='action!'
                  type='fun'
                  outlined={true} />
              </div>

              <h4>Icon</h4>
              <div className='content-card'>
                <Button
                  data='action!'
                  type='primary'
                  margin='m-r-1-xs'
                  icon='ChevronDown' />
                <Button
                  data='action!'
                  type='secondary'
                  margin='m-r-1-xs'
                  icon='ChevronDown' />
                <Button
                  data='action!'
                  type='tertiary'
                  margin='m-r-1-xs'
                  icon='ChevronDown' />
                <Button
                  data='action!'
                  type='warning'
                  margin='m-r-1-xs'
                  icon='ChevronDown' />
                <Button
                  data='action!'
                  type='danger'
                  margin='m-r-1-xs'
                  icon='ChevronDown' />
                <Button
                  data='action!'
                  type='fun'
                  icon='ChevronDown' />
              </div>


              <h4>Large</h4>
              <div className='content-card'>
                <Button
                  data='action!'
                  type='primary'
                  margin='m-r-1-xs'
                  large={true} />
                <Button
                  data='action!'
                  type='secondary'
                  margin='m-r-1-xs'
                  large={true} />
                <Button
                  data='action!'
                  type='tertiary'
                  margin='m-r-1-xs'
                  large={true} />
                <Button
                  data='action!'
                  type='warning'
                  margin='m-r-1-xs'
                  large={true} />
                <Button
                  data='action!'
                  type='danger'
                  margin='m-r-1-xs'
                  large={true} />
                <Button
                  data='action!'
                  type='fun'
                  large={true} />

              </div>
              <h4>Small</h4>
              <div className='content-card'>
                <Button
                  data='action!'
                  type='primary'
                  margin='m-r-1-xs'
                  small={true} />
                <Button
                  data='action!'
                  type='secondary'
                  margin='m-r-1-xs'
                  small={true} />
                <Button
                  data='action!'
                  type='tertiary'
                  margin='m-r-1-xs'
                  small={true} />
                <Button
                  data='action!'
                  type='warning'
                  margin='m-r-1-xs'
                  small={true} />
                <Button
                  data='action!'
                  type='danger'
                  margin='m-r-1-xs'
                  small={true} />
                <Button
                  data='action!'
                  type='fun'
                  small={true} />
              </div>

              <h4>100% width</h4>
              <div className='content-card'>
                <Button
                  data='action!'
                  type='primary'
                  full={true} />
                <Button
                  data='action!'
                  type='secondary'
                  full={true} />
                <Button
                  data='action!'
                  type='tertiary'
                  full={true} />
                <Button
                  data='action!'
                  type='warning'
                  full={true} />
                <Button
                  data='action!'
                  type='danger'
                  full={true} />
                <Button
                  data='action!'
                  type='fun'
                  full={true} />
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}
export default Buttons;
