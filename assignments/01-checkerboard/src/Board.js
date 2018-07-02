import React, { Component } from 'react';
import './Board.css';
import logo from './logo.svg';

// We need to gather a desired matrix size for user for the dimensions of our checkerboard:
let matrixSize = prompt('Choose your matrix size:');
let arr = [];

// Note: This lives outside of any class, this may or may not be the best place for it, but I'm still learning React so that's where it's at now.

// Make sure anything less than 5, greater than 15, or anything that is a string is not accepted. (otherwise our checkerboard is going to become a frankenstein-browser-monster):
while (matrixSize < 5 || matrixSize > 15 || matrixSize === null || isNaN(matrixSize) === true) {
  matrixSize = prompt('Matrix size must be at least 5 and less than 15. Please choose a matrix size:');
} 

// Take our user's matrixSize input and push into array, so we can use map() function and iterate out our React components below:
for (let i = 1; i <= matrixSize; i++) {
  arr.push(i);
}

// Our Board Component:
class Board extends Component {

  render() {
    return (
      <div>

        <div className="Board">
          <h5>Powered By</h5>
          <img src={logo} className="App-logo" alt="logo" />
          {
            arr.map((number) => <Row value={number} key={number.toString()} />)
          }
        </div>
      </div>
    );
  }
}

// Our Row Component
class Row extends Component {
  render() {
    return (
      <div className="row">
        {
          arr.map((number) => <Cell value={number} key={number.toString()} />)
        }
      </div>
    )
  }
}

// Our Cell Component
class Cell extends Component {
  render() {
    return (
      <div className="cell"></div>
    )
  }
}

export default Board;
