import React from 'react';

class InputComp extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (<input type="text" ref="inp"/>);
  }
}
export default InputComp;
