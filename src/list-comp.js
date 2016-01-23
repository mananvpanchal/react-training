import React from 'react';

class ListComp extends React.Component {

  constructor() {
    super();
  }
  render() {
    return (<span>{this.props.value}</span>);
  }
}
