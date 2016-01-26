import React from 'react';
import TodoInput from './todo-input';
import TodoList from './todo-list';

class TodoApp extends React.Component {
  render() {
    return (<div><TodoInput /><TodoList /></div>);
  }
}
export default TodoApp;
