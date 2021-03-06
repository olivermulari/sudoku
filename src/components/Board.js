import React from 'react';
import { setBoard } from '../scripts/difficulty';
import Tile from './Tile';
import OptionsRow from './OptionsRow';
import HoverBoard from './HoverBoard';
import './Board.css';
import { isFilled, tileIsValid, isValid } from '../scripts/check.js';

import noteIcon from '../assets/img/notes.png';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.board = setBoard(this.props.difficulty);
        this.static = this.mapStaticBoard(this.board);
        this.state = {
            tiles: this.board,
            notes: this.board.map((row) => row.map((val) => [])),
            selected: [0, 0],
            incorrectTiles : [],
            showOptions: false,
            writingNotes: false,
        }
        this.init()
    }

    init() {
        // check initially if game happens to be correct
        this.props.setGameState(isValid(this.state.tiles), isFilled(this.state.tiles))
    }

    mapStaticBoard = (arr) => {
        const newArr = arr.map((row) => row.map((val) => val !== 0));
        return newArr;
    }

    toggleNoteWrite = () => {
        this.setState({ writingNotes: !this.state.writingNotes })
    }

    // double click sets value to 0
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
            if (this.state.writingNotes) {
                const newNotes = this.state.notes;
                const prevNotes = this.state.notes[tile[0] - 1][tile[1] - 1];
                if (prevNotes.includes(value)) {
                    newNotes[tile[0] - 1][tile[1] - 1].splice(prevNotes.indexOf(value), 1);
                } else {
                    newNotes[tile[0] - 1][tile[1] - 1].push(value);
                }
                this.setState({notes: newNotes})
            } else {
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
    }

    check() {
        const correct = this.checkAllTiles()
        const filled = isFilled(this.state.tiles)
        this.props.setGameState(correct, filled)
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
        const selectedColor = () => this.isSelected(row, col) ? 'rgb(22, 237, 245)' : '' // no property
        const staticColor = () => this.static[row - 1][col - 1] ? 'rgb(230, 230, 230)' : selectedColor()
        return staticColor()
    }

    confiqHelperClass(row, col) {
        if (this.props.tileHelper) {
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
        }
        return Object.assign(style, this.confiqBorders(row, col));
    }
  
    render() {
        let row = 1;
        let col = 0;
        const board = () =>
            <div id="board"> {
                this.state.tiles.flat().map((value) => {
                    if (col === 9) {
                        col = 0;
                        row++;
                    }
                    col++;
                    return (
                        <Tile 
                        id={[row, col]}
                        key={[row, col]}
                        class={this.confiqHelperClass(row, col)}
                        style={this.getTileStyle(row, col)}
                        static={this.static}
                        isSelected={this.isSelected(row, col)}
                        onDisplayOptions={this.displayOptions}
                        enableNotes={this.props.enableNotes}
                        notes={this.state.notes[row - 1][col - 1]}
                        value={value}
                        tileSize={this.state.size}/>
                    )
                })
            }
                <HoverBoard 
                selected={this.state.selected}/>
            </div>

        const options = () => {
            if (this.state.writingNotes || this.state.showOptions) {
                const notes = () => this.state.selected[0] !== 0 ? this.state.notes[this.state.selected[0] - 1][this.state.selected[1] - 1] : [];
                const selectedVal = () => this.state.selected[0] !== 0 ? this.state.tiles[this.state.selected[0] - 1][this.state.selected[1] - 1] : null;
                return (
                    <div>
                        <OptionsRow
                        id={10}
                        key={10}
                        setValue={this.setValue}
                        selected={this.state.selected}
                        selectedValue={selectedVal()}
                        selectedNotes={notes()}
                        writingNotes={this.state.writingNotes}
                        tiles={[1, 2, 3, 4, 5, 6, 7, 8, 9]}/>
                    </div>
                )
            }
        }

        const notesButton = () => {
            const color = () => this.state.writingNotes ? {backgroundColor: 'rgb(22, 237, 245)'} : {backgroundColor: 'white'}
            if (this.props.enableNotes) {
                return (
                    <button style={Object.assign({}, {position: 'relative', top: '0', width: '30px', height: '30px'}, color())}
                        onClick={this.toggleNoteWrite}>
                        <img src={noteIcon} style={{width: '100%'}} alt="Notes" />
                    </button>
                )
            }
        }

        const buttonRow = () => {
            return (
                <div id="button-row" style={{height: '30px'}}>
                    {notesButton()}
                </div>
            )
        }

        return (
            <div className="container">
                {buttonRow()}
                {board()}
                {options()}
            </div>
        )
    }
}

export default Board;
