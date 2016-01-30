import React from 'react';
import TodoInput from './todo-input';
import TodoList from './todo-list';
import { store } from '../store/todo-store';
import * as Constants from '../constants';

class TodoApp extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (<div><TodoInput addItem={(item) => {
      store.dispatch({ type: Constants.ADD_ITEM, item });
    }
  } /><TodoList /></div>);
  }
}
export default TodoApp;
