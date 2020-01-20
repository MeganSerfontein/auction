import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import AuctionListing from './AuctionListing'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },

  container: {
    marginTop: '5vh'
  }
}));

export default function Auctions() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={3}>
            <AuctionListing className={classes.paper} />
          </Grid>
          <Grid item xs={12} sm={3}>
            <AuctionListing className={classes.paper} />
          </Grid>
          <Grid item xs={12} sm={3}>
           <AuctionListing className={classes.paper} />
          </Grid>
          <Grid item xs={12} sm={3}>
            <AuctionListing className={classes.paper} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}