import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Navigation from './components/Navigation';


class App extends Component {
  render() {
    return (
      <div>
        <Navigation/>
        <div className="container">
          
        </div>
      </div>
    );
  }
}

export default App;
