import React, { Component } from 'react';
import Navbar from './components/common/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import Story from './components/story/Story';

import './main.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <React.Fragment>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/story" component={Story} />
            </Switch>
          </React.Fragment>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
