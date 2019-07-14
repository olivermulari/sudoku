import React from 'react';
import './Game.css';
import Board from './Board';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          isCorrect: true,
          isCompleted: false,
          difficulty: this.props.difficulty
        }
        this.headerStyle = {
          padding: '30px 0 0 0',
          textAlign: "center"
        }
    }

    setBackground = (tileIsCorrect, isCompleted) => {
        this.setState({isCorrect: tileIsCorrect}, () => {
            this.setState({isCompleted: isCompleted})
        })
    }

    gameStyle = () => {
        if (this.state.isCorrect) {
            if (this.state.isCompleted) {
                return {backgroundColor: 'green'}
            } else {
                return {backgroundColor: 'lightblue'}
            }
        } else {
          return {backgroundColor: 'lightblue'} //red
        }
    }

    render() {
        return (
            <div className="sudoku-game" style={this.gameStyle()}>
                <h1 style={this.headerStyle}>
                    {this.state.isCompleted ? 'Completed!' : 'Sudoku'}
                </h1>
                <Board 
                tileCheck={this.props.tileCheck}
                difficulty= {this.props.difficulty}
                setGameBackground={this.setBackground}/>
            </div>
        )
    }
}

export default Game;