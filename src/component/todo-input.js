import React from 'react';
import TodoAction from '../action/todo-action';

class TodoInput extends React.Component {

  constructor(props) {
    super(props);
  }

  addItem() {
    TodoAction.addItem(this.refs.inp.value);
  }

  render() {
    return (<div><input type="text" ref="inp"/><button onClick={this.addItem.bind(this)}>Add</button><button onClick={this.props.unsubscribe}>Unsubscribe</button><button onClick={this.props.subscribe}>Subscribe</button></div>);
  }
}
export default TodoInput;
