import React from 'react';

class Tile extends React.Component {  
  render() {
    return (
      <div style={this.style}>
          <p>{ this.props.value }</p>
      </div>
    )
  }

  style = {
    display: 'inline-block',
    textAlign: 'center',
    width: `${this.props.size - 2}px`,
    height: `${this.props.size - 2}px`,
    border: '1px #ccc solid'
  }
}

export default Tile;