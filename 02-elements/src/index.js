import React from 'react'; // imports React 
import ReactDOM from 'react-dom'; // imports React DOM

// Let's write something simple to the DOM:
// This is how we can create a basic element:
const element = <h1> Hello, world </h1>;
// Note: this element does not get invoked

// This is a ES6 class, which will be used in our tick() function. Notice that every component class is a child of React.Component, and also has a render() method wich runs, and inside a return() statement which includes your components.
class Clock extends React.Component {
  constructor(props) {
    super(props); // necessary to pass props to base constructor
    // Our state property instantly gives our clock a time:
    // however, once it mounts, componentDidMount() will run,
    // which will update the DOM ever second
    this.state = {date: new Date()};
  }

  // These special methods will run when component output is rendered to DOM:
  // Let's setup a timer here for our clock:
  // Will build timer ID and run tick every 1 second
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );

  }

  // Will tear down the timerID
  componentWillUnmount() {
    clearInterval(this.timerID); // will clear the set interval function
  }

  // Will set current time
  tick() {
    // Set State is a built-in method to update this.state:
    // NEVER MODIFY STATE DIRECTLY
    // React uses immutable objects so you can't!
    this.setState({
      date: new Date()
    });
  }

  // Here's our render method to render the component
  render() {
    return (
      <h2> It is {this.state.date.toLocaleTimeString()}.</h2>
    );
  }
}
// See https://reactjs.org/docs/state-and-lifecycle.html#converting-a-function-to-a-class for converting a function to a class:

// We can use functions to create a Timer for example:
// Here's how we can write a function in JSX:
function tick() {
  const element = ( 
    <div>
      <h1> Hello, world! </h1> 
      <h2>Call a few components:</h2>
      <hr/>
      <Welcome name="Tim"/>
      <WelcomeAgain name="TK"/>
      <HeadlineComponent/>
      <hr/>
      <h2>Creating a clock:</h2>
      <Clock />
      <hr/>
      <h2>Re-using components:</h2>
      <SayHello5Times/>
      <hr/>
      <h2>Playing with states:</h2>
      <Toggle />
      <hr/>
    </div>
  );
  // Note this is bad juju when rendering to DOM in interval,
  // but helps show the example:
  ReactDOM.render(element, document.getElementById('root'));
  // Notice that although we're re-writing the entire DOM every second, ONLY the data that changes is actually changed
}

// And call that function to write DOM elements every second:
setInterval(tick, 1000);

// We can create components by writing functions:
function Welcome(props) {
  return <h2>Hi, {props.name}!</h2>;
}

// We can write it as ES6 syntax:
class WelcomeAgain extends React.Component {
  render() {
   return <h2>Hi (again), {this.props.name}!</h2>;
  }
}

// We can also use an arrow function and use the `createElement` method within React:
const HeadlineComponent = (props) => {
  return React.createElement('h3', null, 'Hello Dojo!');
}

// Here we can create a component which we'll call numerous times in another component below!
function Hello(props) {
  return <h1>Hello {props.name}</h1>;
}

// Here's the component:
function SayHello5Times() {
  return (
    <div>
        <Hello name="t" />
        <Hello name="tim" />
        <Hello name="Tim" />
        <Hello name="TIM" />
        <Hello name="TIMMAH" />
    </div>
  )
}

// We can also break components down into smaller pieces.
// For example, let's take a Comment component and build 2 more components that nest inside of it:

// Create Avatar component to be used inside of comment:
function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}

// Create User Info compontent which uses Avatar!
function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}

// Now we can actually build the Comment component and use the components above:
function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {/* Do stuff */}
      </div>
    </div>
  );
}

// Let's create a button which can handle some click events:
class Toggle extends React.Component {
  // Our constructor:
  constructor(props) {
    super(props);
    this.state = {isToggleOn : true};
    // Need to setup a binding to make `this` work on callback:
    this.handleClick = this.handleClick.bind(this);
  }


  // Our HandeClick method:
  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  // Our render method:
  render() {
    return (
      <button onClick={this.handleClick}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button>
    )
  }
}







// =====================================
// Actually Renders to `element` to DOM:
// =====================================
ReactDOM.render(element, document.getElementById('root'));

// We can also render a component alone to the DOM w/o needing to save it as a var first:
// ReactDOM.render(<SayHello5Times />, document.getElementById('root'));
