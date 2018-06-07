import React from 'react'; // imports React 
import ReactDOM from 'react-dom'; // imports React DOM

// Let's write something simple to the DOM:
// This is how we can create a basic element:
const element = <h1> Hello, world </h1>;
// Note: this element does not get invoked

// We can use functions to create a Timer for example:
// Here's how we can write a function in JSX:
function tick() {
  const element = ( 
    <div>
    <h1> Hello, world! </h1> 
    <Welcome name="Tim"/>
    <WelcomeAgain name="TK"/>
    <HeadlineComponent/>
    <hr/>
    <h2> It is { new Date().toLocaleTimeString() }.</h2>
    <hr/>
    <SayHello5Times/>
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







// =====================================
// Actually Renders to `element` to DOM:
// =====================================
ReactDOM.render(element, document.getElementById('root'));

// We can also render a component alone to the DOM w/o needing to save it as a var first:
// ReactDOM.render(<SayHello5Times />, document.getElementById('root'));
