import React from 'react';
import './Tile.css';
import Note from './Note'

class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.row = this.props.id[0]
    this.col = this.props.id[1]
    this.state = {
      isStatic: this.props.static[this.row - 1][this.col - 1],
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
    const inside = () => {
      if (this.props.enableNotes && this.props.value === 0) {
        return (
          <Note id={this.props.id} notes={this.props.notes}/>
        )
      } else {
        return (
          <p className="noselect" style={this.state.pStyle}>{
            this.props.value === 0 ? '' : this.props.value
          }</p>
        )
      }
    }

    return (
      <div 
        className={this.confiqClassName()}
        onClick={this.displayOptions}
        // combinign two style objects into a new empty object
        style={this.props.style}>
        { inside() }
      </div>
    )
  }
}

export default Tile;