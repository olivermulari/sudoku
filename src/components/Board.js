import React from 'react';
import Row from './Row';

const initRow = () => {
    return Array(9).fill(Array(9).fill(0));
} 

class Board extends React.Component {
    state = {
        rows: initRow(),
        size: 30 //px
    }
  
    render() {
        console.log(this.state.rows)
        return (
            <div style={this.style}>{
                this.state.rows.map((row) => (
                    <Row tiles={row} tileSize={this.state.size}/>
                ))
            }</div>
        )
    }

    style = {
        margin: '30px 0 0 0'
    }
}

export default Board;
