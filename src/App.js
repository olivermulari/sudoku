import React from 'react';
import './App.css';
import Game from './components/Game';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.difficulties = {
      "easy": 0,
      "medium": 1,
      "hard": 2
    }
    this.state = {
      tileCheck: false
    }
  }

  toggleTileCheck = () => {
    const state = this.state.tileCheck
    this.setState({tileCheck: !state})
  }
  
  render() {
    return (
      <div id="app">
        <div id="settings">
          Tile Helper: <input type="checkbox" id="myCheck"  onClick={this.toggleTileCheck}/>
        </div>
        <Game tileCheck={this.state.tileCheck}/>
      </div>
    )
  }
}

export default App;
