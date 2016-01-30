import React from 'react';
import TodoInput from './todo-input';
import TodoList from './todo-list';

class TodoApp extends React.Component {

  constructor() {
    super();
  }

  unsubscribe() {
    this.refs.list.testUnsubscribe();
  }

  subscribe() {
    this.refs.list.testSubscribe();
  }

  render() {
    return (<div><TodoInput unsubscribe={this.unsubscribe.bind(this)} subscribe={this.subscribe.bind(this)}/><TodoList ref="list"/></div>);
  }
}
export default TodoApp;
