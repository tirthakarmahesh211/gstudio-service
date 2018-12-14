import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Vertical_nav from './components/Vertical_nav';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation/>
        <div className="container-fluid">
          <div className="row">
            <div className="col-1">
              
            </div>
            <div className="col-10">
              <Vertical_nav/>
            </div>
            <div className="col-1">
              
            </div>  
          </div>
        </div>
      </div>
    );
  }
}

export default App;
