import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Home from './components/homepage/Home';
import PP1 from './components/profilepage/PP1/PP1';
import FP1 from './components/filterpage/FP1/FP1';
import Login from './components/Login/login';
import Fan from './components/Login/fan';
import Sartist from './components/Login/Sartist';
class App extends Component {
  componentDidMount() {
    // Jquery here $(...)...
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" render={props => (
            <React.Fragment>
              <Home />
            </React.Fragment>
          )} />
          <Route path="/pp1" component={PP1} />
          <Route path="/fp1" component={FP1} />
          <Route path='/login' component={Login} />
          <Route path='/Fan' component={Fan} />
          <Route path='/Sartist' component={Sartist} />  

      </div>
      </Router>
    );
  }
}

export default App;
