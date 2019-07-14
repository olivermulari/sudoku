import React from 'react';
import { randomize } from '../scripts/randomize.js';
import Tile from './Tile';
import OptionsRow from './OptionsRow';
import './Board.css';
import { isComplete, tileIsValid, isValid } from '../scripts/check.js';

class Board extends React.Component {
    constructor(props) {
        console.log("Board constructed!")
        super(props);
        this.board = randomize();
        this.static = this.mapStaticBoard(this.board);
        this.state = {
            tiles: this.board,
            selected: [0, 0],
            incorrectTiles : [],
            showOptions: false,
            size: 30 //px
        }
        this.init()
    }

    init() {
        // check initially if game happens to be correct
        this.props.setGameBackground(isValid(this.state.tiles), isComplete(this.state.tiles))
    }

    mapStaticBoard = (arr) => {
        const newArr = arr.map((row) => row.map((val) => val !== 0));
        return newArr;
    }

    displayOptions = (id, isSelected) => {
        this.setState({
            showOptions: !isSelected,
            selected: id
        }, () => {
            if (isSelected) {
                this.setValue(0, id);
            }
        })
    }

    setValue = (value, tile) => {
        if (!this.isSelected(0, 0)) {
            const newBoard = this.state.tiles;
            newBoard[tile[0] - 1][tile[1] - 1] = value;
            this.setState({
                showOptions: false,
                selected: [0, 0],
                tiles: newBoard
            }, () => {
                this.check(tile)
            })
        }
    }

    check() {
        const correct = this.checkAllTiles()
        const isCompleted = isComplete(this.state.tiles)
        this.props.setGameBackground(correct, isCompleted)
    }

    checkAllTiles() {
        let correct = true;
        for (let row = 1; row <= 9; row++) {
            for (let col = 1; col <= 9; col++) {
                if (!this.static[row - 1][col - 1] 
                &&   this.state.tiles[row - 1][col - 1] !== 0) {

                    const isOK = this.checkTile([row, col])
                    if (!isOK) correct = isOK
                }
            }
        }
        return correct;
    }

    checkTile(tile) {
        const isOK = tileIsValid(this.state.tiles, tile[0], tile[1])
        this.updateIncorrectTiles(tile, !isOK)
        return isOK;
    }

    updateIncorrectTiles(tile, push) {
        const index = this.incorrectIndex(tile[0], tile[1])
        if (push) {
            if (index === -1) {
                this.state.incorrectTiles.push(tile)
            }
        } else {
            if (index !== -1) {
                this.state.incorrectTiles.splice(index, 1)
            }
        }
    }

    // returns -1 if is not in incorrect tiles
    incorrectIndex(row, col) {
        return this.state.incorrectTiles.findIndex((x) => x[0] === row && x[1] === col)
    }

    isSelected(row, col) {
        return this.state.selected[0] === row && this.state.selected[1] === col
    }

    confiqColor(row, col) {
        const selectedColor = () => this.isSelected(row, col) ? 'green' : '' // no property
        const staticColor = () => this.static[row - 1][col - 1] ? 'rgb(230, 230, 230)' : selectedColor()
        return staticColor()
    }

    confiqHelperClass(row, col) {
        if (this.props.tileCheck) {
            return this.incorrectIndex(row, col) === -1 ? 'correct-tile' : 'incorrect-tile'
        } else {
            return '';
        }
    }

    confiqBorders(row, col) {
        const top = row % 3 === 1 ? 'black' : '#ccc'
        const right = col % 3 === 0 ? 'black' : '#ccc'
        const bottom = row % 3 === 0 ? 'black' : '#ccc'
        const left = col % 3 === 1 ? 'black' : '#ccc'
        const borderObj = {
            borderWidth: '1px',
            borderStyle:  'solid',
            borderColor:  `${top} ${right} ${bottom} ${left}`
        }
        return borderObj
    }

    getTileStyle(row, col) {
        const style = {
            backgroundColor: this.confiqColor(row, col),
            cursor: this.static[row - 1][col - 1] ? 'default' : 'pointer',
            width: `${this.state.size}px`,
            height: `${this.state.size}px`,
        }
        return Object.assign(style, this.confiqBorders(row, col));
    }
  
    render() {
        console.log("board render")
        let row = 1;
        let col = 0;
        const board = (
            <div id="board" style={this.style}>{
                this.state.tiles.flat().map((value) => {
                    if (col === 9) {
                        col = 0;
                        row++;
                    }
                    col++;
                    return(
                    <Tile 
                    id={[row, col]}
                    key={[row, col]}
                    class={this.confiqHelperClass(row, col)}
                    style={this.getTileStyle(row, col)}
                    static={this.static}
                    isSelected={this.isSelected(row, col)}
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
