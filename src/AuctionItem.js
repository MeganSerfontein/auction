import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      marginBottom: theme.spacing(3),
      width: theme.spacing(300),
      height: theme.spacing(30),
      backgroundColor: '#ccc',
      backgroundImage: '/static/test.jpg',
      
    },
  },

  container: {
    marginTop: '5vh'
  },

  Button: {
    width: '100%',
    minHeight: '5vh',
    marginTop: theme.spacing(3),

  }
}));

export default function AuctionItem() {

  const classes = useStyles();

   {/* MODAL CONTROL START */}
   const [open, setOpen] = React.useState(false);

   const handleClickOpen = () => {
     setOpen(true);
   };
 
   const handleClose = () => {
     setOpen(false);
   };
   {/* MODAL CONTROL END */}


  return (
    
    <Container maxWidth="lg" className={classes.container}>
      <div className={classes.root}>
          <Paper />
      </div>
      <Typography gutterBottom variant="h5" component="h2">
            3 Nights for 2 in Mauritius
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
            Bid on 3 Nights for 2 at the Mariposa Hotel in Mauritius, transport and meals included!
      </Typography>
      {/*<Button variant="contained" color="primary" className={classes.Button} onClick={handleClickOpen}>
            Bid Now
          </Button>*/}
      {/* MODAL START */}
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">BID</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To place a Bid, please enter your full name, email address, and Bid!
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="name"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="My Bid"
            type="ZAR"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
      {/* MODAL END */}
    </Container>
  );
}