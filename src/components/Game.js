import React from "react";
import "../App.css";
import Board from "./Board";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCorrect: true,
      isFilled: false,
      isCompleted: false,
      difficulty: this.props.difficulty
    };
    this.headerStyle = {
      color: "white",
      textAlign: "center"
    };
  }

  setGameState = (isCorrect, isFilled) => {
    this.setState(
      {
        isCorrect: isCorrect,
        isFilled: isFilled
      },
      () => {
        this.setState({
          isCompleted: this.state.isCorrect && this.state.isFilled
        });
      }
    );
  };

  gameStyle = () => {
    if (this.state.isFilled) {
      if (this.state.isCompleted) {
        return { background: "green" };
      } else {
        return { background: "red" };
      }
    } else {
      return;
    }
  };

  render() {
    return (
      <div className="sudoku-game" style={this.gameStyle()}>
        <h1 style={this.headerStyle}>
          {this.state.isFilled
            ? this.state.isCompleted
              ? "Completed!"
              : "Try again!"
            : "Sudoku"}
        </h1>
        <Board
          tileHelper={this.props.tileHelper}
          enableNotes={this.props.enableNotes}
          difficulty={this.props.difficulty}
          setGameState={this.setGameState}
        />
      </div>
    );
  }
}

export default Game;
