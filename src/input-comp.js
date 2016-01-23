import React from 'react';

class InputComp extends React.Component {

  constructor() {
    super();
  }

  changeInput() {
    console.log('Hello');
  }

  render() {
    return (<input type="text" onChange={this.changeInput}/>);
  }
}
export default InputComp;
