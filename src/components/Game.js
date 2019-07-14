import React from 'react';
import './Game.css';
import Board from './Board';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          isCorrect: true,
          isCompleted: false
        }
        this.headerStyle = {
          padding: '30px 0 0 0',
          textAlign: "center"
        }
        this.state = {
            isCorrect: true
        }
    }

    setBackground = (isCorrect, isCompleted) => {
        this.setState({isCorrect: isCorrect}, () => {
            this.setState({isCompleted: isCompleted})
        })
    }

    gameStyle = () => {
        if (this.state.isCorrect) {
            if (this.state.isCompleted) {
                return {backgroundColor: 'green'}
            } else {
                return {backgroundColor: 'white'}
            }
        } else {
          return {backgroundColor: 'red'}
        }
    }

    render() {
        return (
            <div className="sudoku-game" style={this.gameStyle()}>
                <h1 style={this.headerStyle}>Sudoku</h1>
                <Board 
                tileCheck={this.props.tileCheck}
                setGameBackground={this.setBackground}/>
            </div>
        )
    }
}

export default Game;