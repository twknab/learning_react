import React from 'react';
import ReactDOM from 'react-dom';

// You could create a regular form, but then we can't have react manage our states

// BASIC INPUT FIELDS
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    // set initial state to nothing:
    this.state = {value: ''};

    // handle submit and change:
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted ' + this.state.value);
    // prevent form submission:
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit"/>
      </form>
    )
  }
}

// TEXTAREA
class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    // set initial state to nothing:
    this.state = {value: ''};

    // handle submit:
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('An essay has been submitted ' + this.state.value);
    // prevent form submission
    event.preventDefault();

  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Essay:
          <textarea value={this.state.value} onChange={this.handleChange}></textarea>
        </label>
        <input type="submit" value="Submit"/>
      </form>
    )
  }
}

// SELECT FIELD 
class SelectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'mango'};

    // Setup bindings:
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert("You've chosen: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grape">Grape</option>
            <option value="strawberry">Strawberry</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit"/>
      </form>
    )
  }
}

/*
Note: You can pass an array into the value attribute, allowing you to select multiple options in a select tag:

<select multiple={true} value={['B', 'C']}>
*/


// If you have a form with multiple inputs, give them a `name` attribute and you can check if submitted in your function (see `handleInputChange()`):
class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    // if `checkbox` is true, then set value as `target.checked`, otherwise set to `target.value`
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
}



const elements = (
  <div>
    <NameForm />
    <EssayForm />
    <SelectForm />
    <input type="file" />
    <p>Note: File input fields are UNCONTROLLED by react</p>
    <Reservation />
  </div>
)

ReactDOM.render(elements, document.getElementById('root'));

// Note: can also use uncontrolled components:
// https://reactjs.org/docs/uncontrolled-components.html