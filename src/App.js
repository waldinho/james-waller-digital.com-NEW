import React, { Component } from 'react';
import './App.css';

import Homepage from './components/homepage'
import Nav from './components/nav'

class App extends Component {
  render() {
    return (
      <div>
        <Nav /> 
        <Homepage />
      </div>
    );
  }
}

export default App;
