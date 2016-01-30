import React from 'react';
import { store } from '../store/todo-store';

class TodoList extends React.Component {

  constructor() {
    super();
    this.state = { items: store.getState() };
    this.addItem = this.addItem.bind(this);
  }

  componentWillMount() {
    store.subscribe(this.addItem);
  }

  componentWillUnmount() {
    store.unsubscribe(this.addItem);
  }

  testUnsubscribe() {
    store.unsubscribe(this.addItem);
  }

  testSubscribe() {
    store.subscribe(this.addItem);
  }

  addItem() {
    this.setState({ items: store.getState() });
  }

  createItem(item) {
    return (<li key={item}>{ item }</li>);
  }

  render() {
    return (<div><ul>{ this.state.items.map(this.createItem) }</ul></div>);
  }
}
export default TodoList;
