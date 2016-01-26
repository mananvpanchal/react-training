import React from 'react';

class TodoList extends React.Component {

  constructor() {
    super();
    this.state = { items: [] };
  }

  createItem(item) {
    return (<li>{ item }</li>);
  }

  addItem(item) {
    console.log(item);
    this.state.items.push(item);
    this.setState({ items: this.state.items });
  }

  render() {
    return (<div><ul>{ this.state.items.map(this.createItem) }</ul></div>);
  }
}
export default TodoList;
