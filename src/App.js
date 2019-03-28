import React, { Component } from 'react';
import './App.css';
import Fifteen from './component/gameOfFIfteen/fifteen';
import CreateId from './component/cretaeId/createId'
class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Fifteen />
        </div>
        <div>
          <CreateId />

        </div>

      </div>
    );
  }
}

export default App;
