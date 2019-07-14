import React from 'react';
import '../App.css';

class GameSelect extends React.Component {
    constructor(props) {
        super(props);
        this.difficulty = {
            easy: 'easy',
            medium: 'medium',
            hard: 'hard',
            extreme: 'extreme'
        }
    }

    startEasyGame = () => {
        this.props.startGame('easy')
    }

    startMediumGame = () => {
        this.props.startGame('medium')
    }

    startHardGame = () => {
        this.props.startGame('hard')
    }

    startExtremeGame = () => {
        this.props.startGame('extreme')
    }

    render() {
        return (
            <div id="game-select" className="noselect">
                <button onClick={this.startEasyGame}>Easy</button>
                <button onClick={this.startMediumGame}>Medium</button>
                <button onClick={this.startHardGame}>Hard</button>
                <button onClick={this.startExtremeGame}>Extreme</button>
            </div>
        )
    }
}

export default GameSelect;