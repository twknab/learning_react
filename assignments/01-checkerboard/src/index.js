import React from 'react';
import ReactDOM from 'react-dom';
import s from './css/styles.css';

class CheckerBoard extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {matrixSize: prompt("Checkboard size?")};

    this.state.numbers = [];
    for (let i = 0; i < this.state.matrixSize; i++) {
      this.state.numbers.push(i);
    }

    console.log(this.state.numbers)

  }

  render(){
    return (
      <div>
        <div id="wrapper">
          {
            this.state.numbers.map((number) => <Row value={number} />)
          }
        </div>
      </div>
    )
  }
};

class Row extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: props.val};
  }

  render() {
    return (
      <div></div>
    )
  }

}

class Cell extends React.Component {

  render() {
    return (
      <p>X</p>
    )
  }
}


const elements = (
  <div>
    <CheckerBoard />
  </div>
)

// Write to React DOM:
ReactDOM.render(elements, document.getElementById('root'));