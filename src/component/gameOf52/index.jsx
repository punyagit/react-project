import React, { Component } from 'react';
import '../../styles/game52.css';
class GameFiftyTwo extends Component {
  state = {
    one: '',
    three: 5,
    seven: 5,
    twelve: '',
    twentyFive: 10,
    fiftyTwo: 10,
  };
  render() {
    return (
      <div>
        <h1>Game of 52</h1>
        <div>
          <div className="grid-container">
            <div className="grid-item">One</div>
            <div className="grid-item">Three</div>
            <div className="grid-item">Seven</div>
            <div className="grid-item">Twelve</div>
            <div className="grid-item">TwentyFive</div>
            <div className="grid-item">FiftyTwo</div>
            <div className="grid-item1">
              <div className="div-inside">Start</div>
              <div className="div-inside">Total</div>
              <div className="div-inside">Count</div>
            </div>
            <div className="grid-item1">
              <div className="div-inside">Start</div>
              <div className="div-inside">Total</div>
              <div className="div-inside">Count</div>
            </div>
            <div className="grid-item1">
              <div className="div-inside">Start</div>
              <div className="div-inside">Total</div>
              <div className="div-inside">Count</div>
            </div>
            <div className="grid-item1">
              <div className="div-inside">Start</div>
              <div className="div-inside">Total</div>
              <div className="div-inside">Count</div>
            </div>
            <div className="grid-item1">
              <div className="div-inside">Start</div>
              <div className="div-inside">Total</div>
              <div className="div-inside">Count</div>
            </div>
            <div className="grid-item1">
              <div className="div-inside">Start</div>
              <div className="div-inside">Total</div>
              <div className="div-inside">Count</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GameFiftyTwo;
