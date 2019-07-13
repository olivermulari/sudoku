import React from 'react';
import './Tile.css';

class Tile extends React.Component {
  constructor(props) {
    console.log("tile constructed")
    super(props);
    this.state = {
      isStatic: this.props.static[this.props.id[0] - 1][this.props.id[1] - 1],
      pStyle: {
        cursor: this.props.static[this.props.id[0] - 1][this.props.id[1] - 1] ? 'default' : 'pointer',
        margin: 0,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      },
    }
  }

  displayOptions = () => {
    if (!this.state.isStatic) {
      this.props.onDisplayOptions(this.props.id, this.props.isSelected)
    }
  }

  render() {
    if (this.props.id[0] === 1 && this.props.id[1] === 1) console.log("tile render")
    if (this.props.value === 0) {
      return (
        <div onClick={this.displayOptions} style={this.props.style}>
          <p style={this.state.pStyle}></p>
        </div>
      )
    } else {
      return (
        <div style={this.props.style} onClick={this.displayOptions}>
          <p className="noselect" style={this.state.pStyle}>{ this.props.value }</p>
        </div>
      )
    }
  }
}

export default Tile;