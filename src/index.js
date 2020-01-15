import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './index.css';

import App from './App';
import Auctions from './Auctions';
import Users from './Users';
import BidTest from './BidTest';
import Notfound from './notfound';

import AppBar from './AppBar';

const routing = (
    <Router>
      <div>
        <AppBar />
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/Auctions" component={Auctions} />
            <Route path="/Users" component={Users} />
            <Route path="/BidTest" component={BidTest} />
            <Route component={Notfound} />
        </Switch>
      </div>
    </Router>
  );
  
  ReactDOM.render(routing, document.getElementById('root'))
