import React from 'react';
import ReactDOM from 'react-dom';
import InputComp from './input-comp';

class MainComp extends React.Component {
  render() {
    return (<div><InputComp/></div>);
  }
}

ReactDOM.render(<MainComp />, document.getElementById('app'));
