import React, { Component } from 'react';
import './App.css';
//import Fifteen from './component/gameOfFIfteen/fifteen';
// import CreateId from './component/cretaeId/createId'
import UseCam from './component/common/useCam'
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Fifteen /> */}
        {/* <CreateId /> */}
        <UseCam />
      </div>
    );
  }
}

export default App;
