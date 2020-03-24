import React, { Component } from 'react';
import numbers from './number';
import multipleValue from './array';
import '../../styles/guessNext.css';

class GuessNext extends Component {
  state = {
    numberHolder: [],
    output: 0,
  };

  handleClick(value, object) {
    let numberHolder = this.state.numberHolder;
    let output = multipleValue(this.state.numberHolder, value);
    numberHolder.push(value);
    this.setState({ numberHolder });
    this.setState({ output });
    console.log(numberHolder);
    console.log(output);
  }
  render() {
    return (
      <div>
        <p> {this.state.output}</p>
        <div className="flexy-container">
          {numbers.map((number, key) => (
            <div
              key={key}
              className={`flexy-box ${number.color}`}
              style={{ backgroundColor: number.color }}
              onClick={() => this.handleClick(key, number)}
            >
              {key}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default GuessNext;
