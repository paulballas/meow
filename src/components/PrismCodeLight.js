import React from 'react';
import Prism from 'prismjs';
import PrismSass from 'prismjs/components/prism-sass.min';

export class PrismCodeLight extends React.Component {
  constructor(props) {
    super(props)
    this.ref = React.createRef()
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

    return (
      <div className='code-section'>
        <pre>
          <div className='code-header'>
            <p>{this.props.langDisplay}</p>
            <p>{this.props.file}</p>
          </div>
          <div className='code-block'>
            <code
              className={'language-' + this.props.language}
              ref={this.ref}>
              {this.props.code}
            </code>
          </div>
        </pre>
      </div>
    )
  }
}
