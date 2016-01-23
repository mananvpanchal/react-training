import React from 'react';
import ReactDOM from 'react-dom';
import InputComp from './input-comp';

class MainComp extends React.Component {

  clickButton() {
      alert('Hello');
  }

  render() {
    return (<div><InputComp/><button onClick={this.clickButton}>Click</button></div>);
  }
}

ReactDOM.render(<MainComp />, document.getElementById('app'));
