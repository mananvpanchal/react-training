import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router';
import Login from './login';
import Home from './home';

class Index extends React.Component {
  render() {
    return (<div>
        <ul>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/home">Home</Link></li>
        </ul>
        {this.props.children}
      </div>);
  }
}

ReactDOM.render(<Router>
  <Route path="/" component={Index}>
    <Route path="login" component={Login}/>
    <Route path="home" component={Home}/>
  </Route>
</Router>, document.getElementById('app'));
