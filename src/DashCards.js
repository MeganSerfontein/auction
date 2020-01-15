import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';

class DashCards extends Component {
    
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Container>
            <Grid container spacing={3}>
                <Grid item md={4} xs={12}>
                    <Card>
                        <blockquote className="card-bodyquote">
                        <header>Number of Bids</header>
                        <h1>{this.props.data}</h1>
                        </blockquote>
                    </Card>
                </Grid>
                <Grid item md={4} xs={12}>
                    <Card>
                        <blockquote className="card-bodyquote">
                        <header>Highest bid</header>
                        <h1>{this.props.highest}</h1>
                        </blockquote>
                    </Card>
                </Grid>
                <Grid item md={4} xs={12}>
                    <Card>
                        <blockquote className="card-bodyquote">
                        <header>Users online</header>
                        <h1>{this.props.people}</h1>
                        </blockquote>
                    </Card>
                </Grid>
            </Grid>
        </Container>
      </div>
    );
  }
}

DashCards.propTypes = {
  data: PropTypes.string,
  highest: PropTypes.string,
  people: PropTypes.string
};

export default DashCards;