import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      marginBottom: theme.spacing(3),
      marginTop: theme.spacing(3),
      width: theme.spacing(500),
      height: theme.spacing(10),
      backgroundColor: '#5fa3d3',
      
    },
  },

  container: {
    marginTop: '5vh'
  },

  margins: {
      margin: theme.spacing(3), 
  },

  Button: {
    width: '100%',
    minHeight: '5vh',
    marginTop: theme.spacing(3),

  }
}));

export default function CurrentBid() {
  const classes = useStyles();

  return (
      <div className={classes.root}>
          <Paper>
            <Typography gutterBottom variant="h5" component="h2" className={classes.margins}>
                No Bids Yet
            </Typography>
          </Paper>
      </div>
  );
}