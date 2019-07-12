import React from 'react';
import Tile from './Tile';

class Row extends React.Component {  
  render() {
    return (
        <div style={this.style}>{
            this.props.tiles.map((num) => (
                <Tile onClick={this.props.displayOptions} value={num} size={this.props.tileSize}/>
            ))
        }
        </div>
    )
  }

  style = {
      margin: 'auto',
      width: `${this.props.tileSize * 9}px`,
      height: `${this.props.tileSize}px`,
  }
}

export default Row;
