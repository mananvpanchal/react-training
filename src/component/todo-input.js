import React from 'react';

class TodoInput extends React.Component {

  constructor() {
    super();
  }

  getTodoValue() {
    return this.refs.inp.value;
  }

  render() {
    return (<div><input type="text" ref="inp"/><button onClick={this.props.addItem}>Add</button></div>);
  }
}
export default TodoInput;
