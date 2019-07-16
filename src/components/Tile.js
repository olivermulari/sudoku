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
    const hoverColor = 'rgb(22, 237, 245)'
    if (this.state.isStatic) {
      return {};
    } else {
      let linkStyle = {backgroundColor: this.props.style.backgroundColor};
      if (this.state.hover) {
        linkStyle = {backgroundColor: hoverColor}
      } else if (this.state.active) {
        linkStyle = {backgroundColor: hoverColor}
      } else if (this.state.focus) {
        linkStyle = {backgroundColor: hoverColor}
      }
      return linkStyle
    }
  }
  
  // Options bar to select tiles value
  displayOptions = () => {
    if (!this.state.isStatic) {
      this.props.onDisplayOptions(this.props.id, this.props.isSelected)
    }
  }

  confiqClassName() {
    if (this.state.isStatic || this.props.value === 0) {
      return 'tile'
    } else {
      return 'tile ' + this.props.class
    }
  }

  render() {
    if (this.row === 1 && this.col === 1) {
      console.log("tile render");
    }
    return (
      <div 
        className={this.confiqClassName()}
        onClick={this.displayOptions}
        // combinign two style objects into a new empty object
        style={Object.assign({}, this.props.style, this.renderHover())}
        onMouseOver={this.toggleHover} 
        onMouseOut={this.toggleHover} 
        onMouseUp={this.toggleActive} 
        onMouseDown={this.toggleActive} 
        onFocus={this.toggleFocus}>
        <p className="noselect" style={this.state.pStyle}>{
          this.props.value === 0 ? '' : this.props.value
        }</p>
      </div>
    )
  }
}

export default Tile;