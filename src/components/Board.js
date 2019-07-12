import React from 'react';
import { randomize } from '../scripts/randomize.js';
import Row from './Row';

class Board extends React.Component {
    state = {
        rows: randomize(),
        displayOptions: true,
        size: 30 //px
    }

    displayOptions = () => {
        this.setState(this.displayOptions, true);
    }
  
    render() {
        const board = (
            <div style={this.style}>{
                this.state.rows.map((row) => (
                    <Row id={(this.state.rows.indexOf(row) + 1) * 9} onClick={this.displayOptions} tiles={row} tileSize={this.state.size}/>
                ))
            }</div>
        )
        const options = (
            <div>
                <Row tiles={[1, 2, 3, 4, 5, 6, 7, 8, 9]} tileSize={this.state.size} />
            </div>
        )
        if (this.state.displayOptions) {
            return (
                <div>
                    {board}
                    {options}
                </div>
            )
        } else {
            return board;
        }
    }

    style = {
        margin: '30px 0 0 0'
    }
}

export default Board;
