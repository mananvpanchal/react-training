import React from 'react';

class TodoList extends React.Component {

  constructor() {
    super();
    this.state = { items: [] };
  }

  render() {
    return (<div><ul><li>Hello</li></ul></div>);
  }
}
export default TodoList;
