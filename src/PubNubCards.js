import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';

import { Container } from '@material-ui/core';

import PubNubSubmit from './PubNubSubmit'

class PubNubCards extends Component {
    
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
        <Container style={{marginTop: '2em'}}>
            <Grid container spacing={3}>
                <Grid item md={6} xs={6}>
                    <Card>
                        <blockquote className="card-bodyquote">
                        <header>Number of Bids</header>
                        <h1>{this.props.data}</h1>
                        </blockquote>
                    </Card>
                </Grid>
                <Grid item md={6} xs={6}>
                    <Card>
                        <blockquote className="card-bodyquote">
                        <header>Highest bid</header>
                        <h1>{this.props.highest}</h1>
                        </blockquote>
                    </Card>
                </Grid>
                <Grid item md={12} xs={12}>
                    <Card>
                        <blockquote className="card-bodyquote">
                        <PubNubSubmit />
                        </blockquote>
                    </Card>
                </Grid>
            </Grid>
        </Container>
      </div>
    );
  }
}

PubNubCards.propTypes = {
  data: PropTypes.string,
  highest: PropTypes.string,
};

export default PubNubCards;