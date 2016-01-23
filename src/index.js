import React from 'react';
import ReactDOM from 'react-dom';
import InputComp from './input-comp';

class MainComp extends React.Component {

  constructor() {
    super();
  }

  clickButton() {
      alert({this.refs.inp1.refs.inp.value});
  }

  render() {
    return (<div><InputComp ref="inp1"/><button onClick={this.clickButton}>Click</button></div>);
  }
}

ReactDOM.render(<MainComp />, document.getElementById('app'));
