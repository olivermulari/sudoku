import React from 'react';
import './App.css';
import Board from './components/Board';

class App extends React.Component {
  render() {
    return (
      <div id="sudoku-game">
        <h1 style={style}>Sudoku</h1>
        <Board />
      </div>
    )
  }
}

const style = {
  padding: '30px 0 0 0',
  textAlign: "center"
}

export default App;
