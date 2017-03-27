import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Router = require('react-router').Router;
const Route = require('react-router').Route;
const browserHistory = require('react-router').browserHistory;

import Navbar from './Navbar';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        <Router history={browserHistory}>
          <Route path="/" component={Home}/>
        </Router>
      </div>
    );
  }
}

export default App;
