import React, { Component } from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Homepage from './components/homepage-new'
import Nav from './components/nav'
import About from './containers/about';
import Services from './containers/services';
import Portfolio from './containers/portfolio';
import Resume from './containers/resume';

class App extends Component {
    state = {
      loading: true
    };
    componentDidMount() {
      setTimeout(() => this.setState({ loading: false }), 1500); // simulates an async action, and hides the spinner
    }
    render() {
    const { loading } = this.state;
    if(loading) { // if your component doesn't have to wait for an async action, remove this block 
      return null; // render null when app is not ready
    }
    return (
      <div>
        <Nav />
          <Route exact path="/" component={Homepage} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/resume" component={Resume} />
      </div>
    );
  }
}

export default App;
