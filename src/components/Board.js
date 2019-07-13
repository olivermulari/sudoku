import React from 'react';
import { randomize } from '../scripts/randomize.js';
import Row from './Row';
import OptionsRow from './OptionsRow';

class Board extends React.Component {
    constructor(props) {
        console.log("constructed")
        super(props);
        this.board = randomize();
        this.static = this.mapStaticBoard(this.board);
        this.state = {
            rows: this.board,
            selected: [0, 0],
            showOptions: false,
            size: 30 //px
        }
        this.style = { 
            margin: '30px 0 0 0'
        }
    }

    mapStaticBoard = (arr) => {
        const newArr = arr.map((row) => row.map((val) => val !== 0));
        return newArr;
    }

    displayOptions = (id, isSelected) => {
        console.log(id, isSelected)
        this.setState({
            showOptions: !isSelected,
            selected: !isSelected ? id : [0, 0]
        })
    }

    setValue = (value, tile) => {
        const newBoard = this.state.rows;
        newBoard[tile[0] - 1][tile[1] - 1] = value;
        this.setState({
            rows: newBoard
        })
    }
  
    render() {
        console.log("render")
        const board = (
            <div style={this.style}>{
                this.state.rows.map((row) => (
                    <Row 
                    id={this.state.rows.indexOf(row) + 1}
                    key={this.state.rows.indexOf(row) + 1}
                    static={this.static}
                    selected={this.state.selected}
                    onDisplayOptions={this.displayOptions} 
                    tiles={row} 
                    tileSize={this.state.size}/>
                ))
            }</div>
        )
        const options = (
            <div>
                <OptionsRow
                id={10}
                key={10}
                setValue={this.setValue}
                selected={this.state.selected}
                tiles={[1, 2, 3, 4, 5, 6, 7, 8, 9]} 
                tileSize={this.state.size} />
            </div>
        )

        if (this.state.showOptions) {
            return (
                <div>
                    {board}
                    {options}
                </div>
            )
        } else {
            return board
        }
    }
}

export default Board;
