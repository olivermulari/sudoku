import React from 'react';
import './App.css';
import GameSelect from './components/GameSelect';
import Game from './components/Game';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tileCheck: false,
      gameStarted: false,
      difficulty: undefined, 
    }
  }

  /* problem migth be that this doesn't actually start the game but
  *  changes app 
  *  
  */
  startGame = (difficulty) => {
    this.setState({
      gameStarted: true,
      difficulty: difficulty
    })
  }

  toggleTileCheck = () => {
    const state = this.state.tileCheck
    this.setState({tileCheck: !state})
  }
  
  render() {
    if (this.state.gameStarted) {
      return (
        <div id="app">
          <div id="settings">
            Tile Helper: <input type="checkbox" id="myCheck"  onClick={this.toggleTileCheck}/>
          </div>
          <Game
          tileCheck={this.state.tileCheck}
          difficulty={this.difficulty}/>
        </div>
      )
    } else {
      return (
        <div id="app">
          <GameSelect 
          startGame={this.startGame}/>
        </div>
      )
    }
  }
}

export default App;
