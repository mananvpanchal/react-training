import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router';
import Login from './login';
import Home from './home';

class Index extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  tranitionButtonClick() {
    this.context.router.transitionTo('/home');
  }

  render() {
    return (<div>
        <ul>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/home">Home</Link></li>
        </ul>
        <button onClick={this.tranitionButtonClick.bind(this)}>Transition to Home</button>
        {this.props.children}
      </div>);
  }
}

Index.contextTypes = {
  router: React.PropTypes.func.isRequired
};

ReactDOM.render(<Router>
  <Route path="/" component={Index}>
    <Route path="login" component={Login}/>
    <Route path="home" component={Home}/>
  </Route>
</Router>, document.getElementById('app'));
