import React from 'react';

class ListComp extends React.Component {

  constructor() {
    super();
    this.state = { items: [] };
  }

  createItem(item) {
    return (<li>{ item }</li>);
  }

  addItem(item) {
    this.state.items.push(item);
    this.setState({ items: this.state.items });
  }

  render() {
    return (<ul>{ this.state.items.map(this.createItem) }</ul>);
  }
}
export default ListComp;
