import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import TextField from '@material-ui/core/TextField';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },

  title: {
    flexGrow: 1,
    textColor: '#fff',
  },
  muiButton: {
      color: '#fff'
  },

}));

export default function ButtonAppBar() {
  const classes = useStyles();

  {/* MODAL CONTROL START */}
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    setOpen(false);
 }

  {/* MODAL CONTROL END */}

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
            <Typography variant="h6" className={classes.title}>
              AUCTION PORTAL
            </Typography>
            <Typography variant="h6">
              <ul>
                  <Link to="/">
                    <Button >Auction</Button>
                  </Link>
                  
                  <Button variant="contained" color="primary" className={classes.Button} onClick={handleClickOpen}>
                        Register
                  </Button>


              </ul>
            </Typography>
            {/* MODAL START */}
              <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Register</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    To sign up for this platform, please enter your Email Address
                  </DialogContentText>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email Address"
                    type="email"
                    fullWidth
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="primary">
                    Cancel
                  </Button>
                  <Button onClick={handleSubmit} color="primary">
                    Subscribe
                  </Button>
                </DialogActions>
              </Dialog>
            {/* MODAL END */}
        </Toolbar>
      </AppBar>
    </div>
  );
}