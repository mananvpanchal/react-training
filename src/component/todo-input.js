import React from 'react';
// import TodoAction from '../action/todo-action';

const TodoInput = ({ addItem }) => {
  let input;
  return (<div><input type="text" ref={(node) => { input = node; }}/><button onClick={() => { addItem(input.value); }}>Add</button></div>);
};
/* class TodoInput extends React.Component {

  constructor() {
    super();
  }

  addItem() {
    TodoAction.addItem(this.refs.inp.value);
  }

  render() {
    return (<div><input type="text" ref="inp"/><button onClick={this.addItem.bind(this)}>Add</button></div>);
  }
}*/
export default TodoInput;
