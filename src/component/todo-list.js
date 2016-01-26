import React from 'react';
import TodoStore from '../store/todo-store';

class TodoList extends React.Component {

  constructor() {
    super();
    this.state = { items: TodoStore.getTodoList() };
  }

  componentWillMount() {
    TodoStore.addChangeListener(this.addItem.bind(this));
  }

  componentWillUnmount() {
    TodoStore.removeChangeListener(this.addItem.bind(this));
  }

  createItem(item) {
    return (<li>{ item }</li>);
  }

  addItem() {
    this.setState({ items: TodoStore.getTodoList() });
  }

  render() {
    return (<div><ul>{ this.state.items.map(this.createItem) }</ul></div>);
  }
}
export default TodoList;
