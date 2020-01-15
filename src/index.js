import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './index.css';

import App from './App';
import Main from './Main';
import Users from './Users';
import Contact from './Contact';
import Register from './Register';
import Notfound from './notfound';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const routing = (
    <Router>
      <div>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="h6" className= "title">
              BIDDING PORTAL
            </Typography>
            <Typography variant="h6">
              <ul>
                  <Link to="/">
                    <Button color="default" >Home</Button>
                  </Link>

                  <Link to="/Main"> 
                    <Button color="default" >Auctions</Button>
                  </Link>

                  <Link to="/Users">
                    <Button color="default" >Users</Button>
                  </Link>
                  
                  <Link to="/Contact">
                    <Button color="default" >Contact</Button>
                  </Link>
                  
                  <Link to="/Register">
                    <Button color="default" >Register</Button>
                  </Link>
              </ul>
            </Typography>
          </Toolbar>
        </AppBar>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/Main" component={Main} />
            <Route path="/Users" component={Users} />
            <Route path="/Contact" component={Contact} />
            <Route path="/Register" component={Register} />
            <Route component={Notfound} />
        </Switch>
      </div>
    </Router>
  );
  
  ReactDOM.render(routing, document.getElementById('root'))
