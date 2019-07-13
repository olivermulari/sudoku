import React from 'react';
import Tile from './Tile';

class Row extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.selected
    }
  }
  render() {
    let id = 0;
    return (
      <div style={this.style}>{
        this.props.tiles.map((num) => {
          if (id === 9) id = 0;
          id++;
          return(
            <Tile
            id={[this.props.id, id]}
            key={[this.props.id, id]}
            static={this.props.static}
            isSelected={this.isSelected(this.props.id, id)}
            onDisplayOptions={this.onDisplayOptions} 
            value={num} 
            size={this.props.tileSize}/>
          )})
        }
      </div>
    )
  }

  componentWillReceiveProps(props) {
    this.setState({
      selected: props.selected
    })
  }

  isSelected = (r, c) => {
    return this.props.selected[0] === r && this.props.selected[1] === c;
  }

  onDisplayOptions = (id, isSelected) => {
    this.props.onDisplayOptions(id, isSelected)
  }

  style = {
      margin: 'auto',
      width: `${this.props.tileSize * 9}px`,
      height: `${this.props.tileSize}px`,
  }
}

export default Row;
