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
      showing: 'GAME'
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

  showOptions = () => {
    this.setState({showing: 'OPTIONS'})
  }

  showGame = () => {
    this.setState({showing: 'GAME'})
  }
  
  render() {
    const game = () => {
      if (this.state.gameStarted) {
        return (
          <Game
          tileHelper={this.state.tileHelper}
          enableNotes={this.state.enableNotes}
          difficulty={this.state.difficulty}/>
        )
      } else {
        return (
          <GameSelect startGame={this.startGame}/>
        )
      }
    }

    const options = () => {
      return (
        <div id="settings">
          <div style={{marginTop: '150px'}}>
            <p>Tile Helper: </p>
            <input type="checkbox" id="tile-helper" checked={this.state.tileHelper} onClick={this.toggleTileHelper}/>
          </div>
          <div>
            <p>Enable notes: </p>
            <input type="checkbox" id="enable-notes" checked={this.state.enableNotes} onClick={this.toggleEnableNotes}/>
          </div>
        </div>
      )
    }

    const navBar = () => {
      return (
        <ul id="nav-bar">
          <li onClick={this.showGame}><h3 className="noselect">Game</h3></li>
          <li onClick={this.showOptions}><h3 className="noselect">Options</h3></li>
        </ul>
      )
    }

    const content = () => {
      switch (this.state.showing) {
        case 'GAME':
          return game()
        case 'OPTIONS':
          return options()
        default:
          return {};
      }
    }

    return (
      <div id="app">
        {content()}
        {navBar()}
      </div>
    )
  }
}

export default App;
