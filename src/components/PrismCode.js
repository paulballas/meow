import React from 'react';
import Prism from 'prismjs';
import Button from './Button'

export class PrismCode extends React.Component {
  constructor(props) {
    super(props)
    this.ref = React.createRef()
    this.state = {
      jsx: true
    }
  }

  componentDidMount() {
    this.highlight()
  }
  componentDidUpdate() {
    this.highlight()
  }
  highlight = () => {
    if (this.ref && this.ref.current) {
      Prism.highlightElement(this.ref.current)
    }
  }
  render() {
    const { codeJsx, codeHtml, plugins, language } = this.props
    return (
      <div className='code-section'>
        <Button
          data='JSX'
          small={true}
          color={this.state.jsx? 'primary': 'quaternary' }
          margin={false}
          onClick={ () => this.setState({jsx: true}) }
        />
        <Button
          data='HTML'
          small={true}
          color={this.state.jsx === false? 'primary': 'quaternary' }
          margin={false}
          onClick={ () => this.setState({jsx: !this.state.jsx}) }
        />
        <pre>
          <div className='code-header'>
            <p>{this.state.jsx? 'JSX' : 'HTML'}</p>
            <p>{this.props.file}</p>
          </div>
          <div className='code-block'>
            <code ref={this.ref} className={`language-${language}`}>
              {this.state.jsx? codeJsx : codeHtml}
            </code>
          </div>
        </pre>
      </div>
    )
  }
}
