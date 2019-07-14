import React from 'react';
import './App.css';
import Game from './components/Game';

class App extends React.Component {
  render() {
    return (
      <div id="app">
        <Game />
      </div>
    )
  }
}

export default App;
