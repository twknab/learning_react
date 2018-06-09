import React from 'react';
import ReactDOM from 'react-dom';


// Greeting for users:
function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

// Greeting for guests:
function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

// Greeting:
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />
  }
  return <GuestGreeting />
}

// Login Button:
function LoginButton(props) {
  return (
    <button onClick={props.onClick}>Login</button>
  )
} 

// Logout Button:
function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>Logout</button>
  )
}

// Login Control class:
class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    const button = isLoggedIn ? (
      <LogoutButton onClick={this.handleLogoutClick} />
    ) : (
      <LoginButton onClick={this.handleLoginClick} />
    );

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
        The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
      </div>
    )
  }
}

// Let's create a mailbox
function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  // Note that the bit after the && below only displays if the first evalutes to true
  return (
    <div>
      {unreadMessages.length > 0 &&
        <p>You have {unreadMessages.length} unread messages.</p>
      }
    </div>
  )
}
// Will be used to count messages..just some dummy data
const messages = ['React', 'Re: React', 'Re:Re: React'];

// We can create another component, a warning banner, and pass in Null if we don't want something to show:
function WarningBanner(props) {
  if (!props.warn) {
    return null; // null is returned rather than an element
  }

  return (
    <div className="warning">
      Warning!
    </div>
  );
}

// Page calls on WarningBanner above and if null is detected component is not shown
class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true};
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(prevState => ({
      showWarning: !prevState.showWarning
    }));
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    )
  };
}



// Elements to write to DOM:
const elements = (
  <div>
    <LoginControl />
    <Mailbox unreadMessages={messages} />
    <Page />
  </div>
);

// Write to React DOM:
ReactDOM.render(elements, document.getElementById('root'));

