import React from 'react';
import { randomize } from '../scripts/randomize.js';
import Tile from './Tile';
import OptionsRow from './OptionsRow';
import './Board.css';

class Board extends React.Component {
    constructor(props) {
        console.log("constructed")
        super(props);
        this.board = randomize();
        this.static = this.mapStaticBoard(this.board);
        this.state = {
            tiles: this.board,
            selected: [0, 0],
            showOptions: false,
            size: 30 //px
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
        const newBoard = this.state.tiles;
        newBoard[tile[0] - 1][tile[1] - 1] = value;
        this.setState({
            tiles: newBoard
        })
    }
  
    render() {
        console.log("render")
        let id1 = 1;
        let id2 = 0;
        const board = (
            <div id="board" style={this.style}>{
                this.state.tiles.flat().map((value) => {
                    if (id2 === 9) {
                        id2 = 0;
                        id1++;
                    }
                    id2++;
                    return(
                    <Tile 
                    id={[id1, id2]}
                    key={[id1, id2]}
                    static={this.static}
                    selected={this.state.selected}
                    onDisplayOptions={this.displayOptions}
                    value={value}
                    tileSize={this.state.size}/>
                )})
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
