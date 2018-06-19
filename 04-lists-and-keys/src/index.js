import React from 'react';
import ReactDOM from 'react-dom';

let numbers = [1,2,3,4,5];

// Note: Keys must be unique, and most often we use the `id` of data

// If you don't have an ID, by default you can use the index value of the array item (see: https://reactjs.org/docs/lists-and-keys.html#keys)

// According to docs, "default" key, if not specified, is index value

// However docs warn AGAINST using default index value as this can cause problems later on if the list items change -- as the former IDs might be locked to various states

// Also note, if you really need a key to be avail to a component (not just for React to properly manage your states), pass along an `id` props with the same value. The `props.id` will be availiable while the `props.key` will not.

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.value = props.value;
  }

  render() {
    return (
      <li>{this.value}</li>
    )
  }
  
}

class NumbersList extends React.Component {
  constructor(props) {
    super(props);
    this.numbers = props.numbers;
  }

  render() {
    return (
      <ul>
        {this.numbers.map((number) =>
          <ListItem value={number} key={number.toString()} />
        )}
      </ul>
    )
  }
}

const elements = (
  <div>
    <NumbersList numbers={numbers} />
  </div>
);



ReactDOM.render(elements, document.getElementById('root'));
