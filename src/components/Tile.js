import React from 'react';
import './Tile.css';

class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
      isSelected: this.props.isSelected,
      isStatic: this.props.static[this.props.id[0] - 1][this.props.id[1] - 1],
      style: {
        backgroundColor: this.props.static[this.props.id[0] - 1][this.props.id[1] - 1] ? 'rgb(230, 230, 230)' : this.props.isSelected ? 'green' : 'white',
        cursor: this.props.static[this.props.id[0] - 1][this.props.id[1] - 1] ? 'default' : 'pointer',
        display: 'inline-block',
        position: 'relative',
        textAlign: 'center',
        width: `${this.props.size - 2}px`,
        height: `${this.props.size - 2}px`,
        border: '1px #ccc solid',
      },
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

  componentWillReceiveProps(props) {
    if (this.state.isSelected) {console.log(props); console.log(this.state)}
    this.setState({
      value: props.value,
      isSelected: props.isSelected,
      style: {
        backgroundColor: this.confiqColor(),
        cursor: this.props.static[this.props.id[0] - 1][this.props.id[1] - 1] ? 'default' : 'pointer',
        display: 'inline-block',
        position: 'relative',
        textAlign: 'center',
        width: `${this.props.size - 2}px`,
        height: `${this.props.size - 2}px`,
        border: '1px #ccc solid',
      }
    }, () => {this.render()})
  }

  selectedColor = () => this.state.isSelected ? 'green' : 'white';
  confiqColor = () => this.state.isStatic ? 'rgb(230, 230, 230)' : this.selectedColor();

  displayOptions = () => {
    if (!this.state.isStatic) {
      this.props.onDisplayOptions(this.props.id, this.state.isSelected)
    }
  }

  render() {
    if (this.state.value === 0) {
      return (
        <div onClick={this.displayOptions} style={this.state.style}>
          <p style={this.state.pStyle}></p>
        </div>
      )
    } else {
      return (
        <div style={this.state.style} onClick={this.displayOptions}>
          <p className="noselect" style={this.state.pStyle}>{ this.state.value }</p>
        </div>
      )
    }
  }
}

export default Tile;