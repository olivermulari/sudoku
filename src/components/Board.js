import React from 'react';
import { randomize } from '../scripts/randomize.js';
import Tile from './Tile';
import OptionsRow from './OptionsRow';
import './Board.css';

class Board extends React.Component {
    constructor(props) {
        console.log("Board constructed!")
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

    isSelected(row, col) {
        return this.state.selected[0] === row && this.state.selected[1] === col
    }

    getTileStyle(row, col) {
        const selectedColor = () => this.isSelected(row, col) ? 'green' : 'white';
        const color = this.static[row - 1][col - 1] ? 'rgb(230, 230, 230)' : selectedColor();
        const style = {
            backgroundColor: color,
            cursor: this.static[row - 1][col - 1] ? 'default' : 'pointer',
            width: `${this.state.size - 2}px`,
            height: `${this.state.size - 2}px`,
            border: '1px #ccc solid',
        }
        return style;
    }
  
    render() {
        console.log("board render")
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
                    style={this.getTileStyle(id1, id2)}
                    static={this.static}
                    isSelected={this.isSelected(id1, id2)}
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
