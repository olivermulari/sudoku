import React from 'react';
import { randomize } from '../scripts/randomize.js';
import Row from './Row';

const base = () => (
    [[1, 2, 3, 4, 5, 6, 7, 8, 9],
    [4, 5, 6, 7, 8, 9, 1, 2, 3],
    [7, 8, 9, 1, 2, 3, 4, 5, 6],
    [2, 1, 4, 3, 6, 5, 8, 9, 7],
    [3, 6, 5, 8, 9, 7, 2, 1, 4],
    [8, 9, 7, 2, 1, 4, 3, 6, 5],
    [5, 3, 1, 6, 4, 2, 9, 7, 8],
    [6, 4, 2, 9, 7, 8, 5, 3, 1],
    [9, 7, 8, 5, 3, 1, 6, 4, 2]]
);

class Board extends React.Component {
    state = {
        rows: base(),
        size: 30 //px
    }
  
    render() {
        randomize(this.state.rows, 10);
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
