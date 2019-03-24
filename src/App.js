import React, { Component } from 'react';
import './App.css';
import Fifteen from './components/gameOfFIfteen/fifteen';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Fifteen />
      </div>
    );
  }
}

export default App;
