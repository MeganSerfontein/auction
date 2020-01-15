import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css';

import App from './App';
import Main from './Main';
import Users from './Users';
import Contact from './Contact';
import Notfound from './notfound';

const routing = (
    <Router>
      <div>
        <ul>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/Main">Dash</Link>
            </li>
            <li>
            <Link to="/Users">Users</Link>
            </li>
            <li>
            <Link to="/Contact">Contact</Link>
            </li>
        </ul>
        <Switch>
        <Route exact path="/" component={App} />
            <Route path="/Main" component={Main} />
            <Route path="/Users" component={Users} />
            <Route path="/Contact" component={Contact} />
            <Route component={Notfound} />
        </Switch>
      </div>
    </Router>
  )

  ReactDOM.render(routing, document.getElementById('root'))
