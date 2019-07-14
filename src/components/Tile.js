import React from 'react';
import './Tile.css';

class Tile extends React.Component {
  constructor(props) {
    console.log("tile constructed")
    super(props);
    this.row = this.props.id[0]
    this.col = this.props.id[1]
    this.state = {
      isStatic: this.props.static[this.row - 1][this.col - 1],
      hover: false,
      active: false,
      focus: false,
      pStyle: {
        cursor: this.props.static[this.row - 1][this.col - 1] ? 'default' : 'pointer',
        margin: 0,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      },
    }
  }

  // Trying to implement hover and focus
  toggleHover = () => {
    this.setState({hover: !this.state.hover})
  }

  toggleActive = () => {
    this.setState({active: !this.state.active})
  }

  toggleFocus = () => {
    this.setState({focus: !this.state.focus})
  }

  renderHover = () => {
    let linkStyle = {backgroundColor: this.props.style.backgroundColor};
    if (this.state.hover) {
      linkStyle = {backgroundColor: 'green'}
    } else if (this.state.active) {
      linkStyle = {backgroundColor: 'green'}
    } else if (this.state.focus) {
      linkStyle = {backgroundColor: 'green'}
    }
    return linkStyle
  }
  
  // Options bar to select tiles value
  displayOptions = () => {
    if (!this.state.isStatic) {
      this.props.onDisplayOptions(this.props.id, this.props.isSelected)
    }
  }

  render() {
    if (this.row === 1 && this.col === 1) console.log("tile render");
    if (this.props.value === 0) {
      return (
        <div 
          className="tile" 
          onClick={this.displayOptions}
          // combinign two style objects into a new empty object
          style={Object.assign({}, this.props.style, this.renderHover())}
          onMouseOver={this.toggleHover} 
          onMouseOut={this.toggleHover} 
          onMouseUp={this.toggleActive} 
          onMouseDown={this.toggleActive} 
          onFocus={this.toggleFocus}>
          <p style={this.state.pStyle}></p>
        </div>
      )
    } else {
      return (
        <div className="tile" style={this.props.style} onClick={this.displayOptions}>
          <p className="noselect" style={this.state.pStyle}>{ this.props.value }</p>
        </div>
      )
    }
  }
}

export default Tile;