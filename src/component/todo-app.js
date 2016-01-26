import React from 'react';
import TodoInput from './todo-input';
import TodoList from './todo-list';

class TodoApp extends React.Component {

  constructor() {
    super();
  }

  addItem() {
    const value = this.refs.input.getTodoValue();
    this.refs.list.addItem(value);
  }
  render() {
    return (<div><TodoInput ref="input" addItem={this.addItem.bind(this)} /><TodoList ref="list" /></div>);
  }
}
export default TodoApp;
