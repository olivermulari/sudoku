import React from 'react';

class Tile extends React.Component {
  render() {
    if (this.props.value !== 0) {
      return this.tile();
    } else {
      return this.nullTile();
    }
  }

  nullTile = () => (
    <div onClick={this.props.displayOptions} style={this.style}>
      <p style={this.pStyle}></p>
    </div>
  )

  tile = () => (
    <div style={this.style}>
      <p style={this.pStyle}>{ this.props.value }</p>
    </div>
  );

  style = {
    display: 'inline-block',
    position: 'relative',
    textAlign: 'center',
    width: `${this.props.size - 2}px`,
    height: `${this.props.size - 2}px`,
    border: '1px #ccc solid'
  }

  pStyle = {
    margin: 0,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  }
}

export default Tile;