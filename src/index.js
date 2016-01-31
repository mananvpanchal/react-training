
import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './component/todo-app';
import { Provider } from 'react-redux';
import { store } from './store/todo-store';

ReactDOM.render(<Provider store={store}><TodoApp /></Provider>, document.getElementById('app'));
