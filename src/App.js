import React from 'react';
import './App.css';
import Board from './components/Board';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1 style={style}>Sudoku</h1>
        <Board />
      </div>
    )
  }
}

const style = {
  margin: '30px 0 0 0',
  textAlign: "center"
}

export default App;
