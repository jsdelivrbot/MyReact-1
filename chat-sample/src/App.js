import React, { Component, Fragment } from 'react';
import { Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

import Login from './screens/Login';
import Menu from './screens/Menu';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/menu" component={Menu} />
      </Switch>
    );
  }
}

export default App;
