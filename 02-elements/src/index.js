import React from 'react';
import ReactDOM from 'react-dom';

// Let's write something simple to the DOM:
// This is how we can create a basic element:
const element = <h1> Hello, world </h1>;

const HeadlineComponent = (data) => {
  return React.createElement('h1', null, 'Hello Dojo!');
}

// We can use functions to create a Timer for example:
// Here's how we can write a function in JSX:
function tick() {
  const element = ( 
    <div>
    <h1> Hello, world! </h1> 
    <h2> It is { new Date().toLocaleTimeString() }.</h2>
    </div>
  );
  // Note this is bad juju when rendering to DOM in interval,
  // but helps show the example:
  ReactDOM.render(element, document.getElementById('root'));
  // Notice that although we're re-writing the entire DOM every second, ONLY the data that changes is actually changed
}
// And call that function to write DOM elements every second:
setInterval(tick, 1000);


// ===============
ReactDOM.render(element, document.getElementById('root'));
