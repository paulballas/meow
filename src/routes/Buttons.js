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
  color='primary'
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
      <div className='container'>
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
        <h3>Default</h3>
        <Button
          data='action!'
          color='primary'
          margin='m-r-1-xs'
          large={false} />
        <Button
          data='action!'
          color='secondary'
          margin='m-r-1-xs'
          large={false} />
        <Button
          data='action!'
          color='tertiary'
          margin='m-r-1-xs'
          large={false} />
        <Button
          data='action!'
          color='quaternary'
          margin={false}
          large={false} />
        <Space h={2}/>

        <h3>Outlined</h3>
        <Button
          data='action!'
          color='primary'
          margin='m-r-1-xs'
          outlined={true} />
        <Button
          data='action!'
          color='secondary'
          margin='m-r-1-xs'
          outlined={true} />
        <Button
          data='action!'
          color='tertiary'
          margin='m-r-1-xs'
          outlined={true} />
        <Button
          data='action!'
          color='quaternary'
          margin={false}
          outlined={true} />
        <Space h={2}/>

        <h3>Large</h3>
        <Button
          data='action!'
          color='primary'
          margin='m-r-1-xs'
          large={true} />
        <Button
          data='action!'
          color='secondary'
          margin='m-r-1-xs'
          large={true} />
        <Button
          data='action!'
          color='tertiary'
          margin='m-r-1-xs'
          large={true} />
        <Button
          data='action!'
          color='quaternary'
          margin={false} />
        <Space h={2}/>

        <h3>Small</h3>
        <Button
          data='action!'
          color='primary'
          margin='m-r-1-xs'
          small={true} />
        <Button
          data='action!'
          color='secondary'
          margin='m-r-1-xs'
          small={true} />
        <Button
          data='action!'
          color='tertiary'
          margin='m-r-1-xs'
          small={true} />
        <Button
          data='action!'
          color='quaternary'
          margin={false}
          small={true} />
        <Space h={2}/>

        <h3>Full Width</h3>
        <Button
          data='action!'
          color='primary'
          margin={false}
          full={true} />
        <Button
          data='action!'
          color='secondary'
          margin={false}
          full={true} />
        <Button
          data='action!'
          color='tertiary'
          margin={false}
          full={true} />
        <Button
          data='action!'
          color='quaternary'
          margin={false}
          full={true} />
      </div>
    )
  }
}
export default Buttons;
