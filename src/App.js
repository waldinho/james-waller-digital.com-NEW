import React, { Component } from 'react';
import { Route } from "react-router-dom";
import './App.css';

import Homepage from './components/homepage'
import Nav from './components/nav'
import About from "./containers/about";
import Services from "./containers/services";
import Portfolio from "./containers/portfolio";
import Resume from "./containers/resume";

class App extends Component {
  render() {
    return (
      <div>
          <div>
            <Route exact path="/" component={Homepage} />
            <Route path="/about" component={About} />
            <Route path="/services" component={Services} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/resume" component={Resume} />
          </div>
        <Nav /> 
      </div>
    );
  }
}

export default App;
