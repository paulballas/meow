import React from 'react';

class Spacing extends React.Component {
  render() {
    const container = `<div class='container'/>`
    const button = `<button class='btn'/>`
    const margin = `m-{direction}-{size}-{breakpoint}`
    const padding = `p-{direction}-{size}-{breakpoint}`
    const margin2 = `<div class='m-b-1-xs' />`
    const padding2 = `<div class='p-b-1-xs' />`
    const direction = `{direction}`
    const breakpoint = `{breakpoint}`
    const size = `{size}`
    return (
      <div className='col-md-9 col-xs-12 bg--inner'>
        <div className='container'>
          <div className='row'>
            <div className='col-xs-12'>
              <div className='sub-title-line' />
              <h2 className='title'>Spacing</h2>
              <h5>8px grid system... because that's what the cool kids do.</h5>
            </div>
          </div>

          <div className='row m-b-1-xs'>
            <div className='col-xs-12'>
              <p className='lg'>Evey part of meow is spaced it terms of rem's: <code>1rem = 16px</code>. Such as...</p>
              <ul>
                <li className='lg'>The <code>{container}</code> class has a padding of 3rems - <code>padding: 3rem</code>.</li>
                <li className='lg'>Buttons <code>{button}</code> has 0.7rems of padding on top and bottom, and 1rem of padding of the left and right- <code>padding: 0.75rem 1rem</code>.</li>
              </ul>
            </div>
          </div>

          <div className='row m-b-1-xs'>
            <div className='col-xs-12'>
              <h4>Reference Guide</h4>
              <div className='content-card'>
                <p className='lg'>0.25rem = 4px</p>
                <p className='lg'>0.5rem = 8px</p>
                <p className='lg'>0.75rem = 12px</p>
                <p className='lg'>0.875rem = 14px</p>
                <p className='lg'><b>1rem = 16px</b></p>
                <p className='lg'>1.25rem = 20px</p>
                <p className='lg'>1.5rem = 24px</p>
                <p className='lg'>2rem = 32px</p>
              </div>
            </div>
          </div>

          <div className='row m-b-1-xs'>
            <div className='col-xs-12'>
              <h4>Margin</h4>
              <div className='content-card'>
                <p className='lg'>Margin can be applied anywhere in the application and can dynamically change based on the grid breakpoints. Just follow this pattern: <code>{margin}</code></p>
                <p className='lg'>Example: <code>{margin2}</code> (1rem of margin on the bottom at the xs breakpoint).</p>
                <ul>
                  <li className='lg'><code>{direction}</code>: t: top  /  r: right  /  b: bottom)  /  l: left</li>
                  <li className='lg'><code>{size}</code>: 1: 1rem  /  2: 2rem  /  3: 3rem  /  4: 4rem</li>
                  <li className='lg'><code>{breakpoint}</code>: xs: 287px  /  sm: 464px  /  md: 752px  /  lg: 1216px  /  xl: 1967px</li>
                </ul>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-xs-12'>
              <h4>Padding</h4>
              <div className='content-card'>
                <p className='lg'>Just like margin, padding can be applied anywhere in the application and can dynamically change based on the grid breakpoints. Just follow this pattern: <code>{padding}</code></p>
                <p className='lg'>Example: <code>{padding2}</code> (1rem of margin on the bottom at the xs breakpoint).</p>
                <ul>
                  <li className='lg'><code>{direction}</code>: t: top  /  r: right  /  b: bottom)  /  l: left</li>
                  <li className='lg'><code>{size}</code>: 1: 1rem  /  2: 2rem  /  3: 3rem  /  4: 4rem</li>
                  <li className='lg'><code>{breakpoint}</code>: xs: 287px  /  sm: 464px  /  md: 752px  /  lg: 1216px  /  xl: 1967px</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Spacing;
