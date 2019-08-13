import React from 'react';

class Space extends React.Component {
  render() {
    const height = 'space space--'+ this.props.h
    return (
      <div className={height} />
    )
  }
}

export default Space;
