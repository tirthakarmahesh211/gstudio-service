import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import nav2 from './components/nav2';


class App extends Component {
  render() {
    return (
      <div>
        <nav2/>
        <div className="container">
          
        </div>
      </div>
    );
  }
}

export default App;
