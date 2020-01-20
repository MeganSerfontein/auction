import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import './index.css';

import App from './App';
import Notfound from './notfound';

import AppBar from './AppBar';

const routing = (
    <Router>
      <div>
        <AppBar />
        <Switch>
            <Route exact path="/" component={App} />
            <Route component={Notfound} />
        </Switch>
      </div>
    </Router>
  );
  
  ReactDOM.render(routing, document.getElementById('root'))
