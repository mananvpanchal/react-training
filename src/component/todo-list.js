import React from 'react';
import { store } from '../store/todo-store';

class TodoList extends React.Component {

  constructor() {
    super();
    this.state = { items: store.getState() };
  }

  componentWillMount() {
    this.removeListener = store.subscribe(() => {
      this.setState({ items: store.getState() });
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  createItem(item) {
    return (<li>{ item }</li>);
  }

  render() {
    return (<div><ul>{ this.state.items.map((item, i) => {
      return (<li key={i}>{item}</li>);
    }) }</ul></div>);
  }
}
export default TodoList;
