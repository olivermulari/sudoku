import React from 'react';
import './App.css';
import GameSelect from './components/GameSelect';
import Game from './components/Game';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tileHelper: false,
      enableNotes: false,
      gameStarted: false,
      difficulty: 'init', 
    }
  }

  /* problem migth be that this doesn't actually start the game but
  *  changes app state
  *  
  */
  startGame = (difficulty) => {
    this.setState({
      gameStarted: true,
      difficulty: difficulty
    })
  }

  toggleEnableNotes = () => {
    const state = this.state.enableNotes
    this.setState({enableNotes: !state})
  }

  toggleTileHelper = () => {
    const state = this.state.tileHelper
    this.setState({tileHelper: !state})
  }
  
  render() {
    if (this.state.gameStarted) {
      return (
        <div id="app">
          <div id="settings">
            Tile Helper: <input type="checkbox" id="tile-helper"  onClick={this.toggleTileHelper}/>
            Enable notes: <input type="checkbox" id="enable-notes"  onClick={this.toggleEnableNotes}/>
          </div>
          <Game
          tileHelper={this.state.tileHelper}
          enableNotes={this.state.enableNotes}
          difficulty={this.state.difficulty}/>
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
