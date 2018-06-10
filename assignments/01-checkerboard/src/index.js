import React from 'react';
import ReactDOM from 'react-dom';

class CheckerBoard extends React.Component {
 
  constructor(props) {
    super(props);
    this.state ={matrixSize: prompt("Checkboard size?")};
  }

  render(){
    return (
      <div>
        <div id="wrapper">
          {/* Do Stuff} */}
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
    return true;
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