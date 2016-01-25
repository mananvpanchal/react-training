import React from 'react';
import ReactDOM from 'react-dom';
import InputComp from './input-comp';
import ListComp from './list-comp';

class MainComp extends React.Component {

  constructor() {
    super();
    this.clickButton = this.clickButton.bind(this);
  }

  clickButton() {
    //  alert(this.refs.inp1.refs.inp.value);
    this.refs.list.addItem(this.refs.inp1.refs.inp.value);
  }

  render() {
    return (<div><ListComp ref="list"/><InputComp ref="inp1"/><button onClick={this.clickButton}>Click</button></div>);
  }
}

ReactDOM.render(<MainComp />, document.getElementById('app'));
