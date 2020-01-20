import React, { Component } from 'react'
import PubNubReact from 'pubnub-react';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';

import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';

import InputAdornment from '@material-ui/core/InputAdornment';

export default class PubNubSubmit extends Component {

	constructor(props) {
    	super(props);
    	this.state = {value: ''};
    	this.pubnub = new PubNubReact({
            publishKey: 'pub-c-97fe584c-d4a9-466a-9ada-4919bd6a3478',
            subscribeKey: 'sub-c-c7c1df00-390d-11ea-9443-9e82b35d3d47'
        });
    	this.pubnub.init(this);
    	this.handleChange = this.handleChange.bind(this);
   	 	this.handleSubmit = this.handleSubmit.bind(this);
  	}

  	handleChange(event) {
    	this.setState({value: event.target.value});
  	}

  	handleSubmit(event) {
			var startingBid = 100;
  		// var data =localStorage.getItem('Username');
  		// console.log('localStorage'+data);
  		var message = this.state.value;
        // if (data != null) {
            if(this.state.value > startingBid && this.state.value < 1000000) {
                this.pubnub.publish({
					message: message,
                    channel: 'PubNubSubmit'
                });
			} else {
				alert("Enter value higher than the Starting Bid!");
			}
		// } else {
		// 	alert("Enter username!");
		// }
    	event.preventDefault();
  	}

		componentWillMount() {
         this.pubnub.subscribe({
             channels: ['PubNubSubmit'],
             withPresence: false,
         });
         this.pubnub.getMessage('PubNubSubmit', (msg) => {
         	// var data = localStorage.getItem('username');
             console.log(msg.message);
 						this.last_message = msg.message;
 						console.log('this.last_message 1'+this.last_message);
         });
 				
     }

	render() {   
			const messages = this.pubnub.getMessage('PubNubSubmit');
	    return (
	    	<Container maxWidth="lg">
                <Typography>
                <Grid container>
                    <Grid item md={12}>
				    	<form onSubmit={this.handleSubmit}>
									<h2> Starting Bid is ZAR100 </h2>
                                <FormControl fullWidth variant="filled">
                                    <InputLabel htmlFor="filled-adornment-amount">Amount</InputLabel>
                                    <FilledInput
                                        id="filled-adornment-amount"
                                        value={this.state.value}
                                        onChange={this.handleChange}
                                        startAdornment={<InputAdornment position="start">ZAR</InputAdornment>}
                                    />
                                </FormControl>
							<br />
							<br />
			        		<Button variant="contained" color="primary" type="submit" value="Submit">Place Bid</Button>
			      	    </form>
					</Grid>
                </Grid>
                </Typography>
				<br />
			</Container>
	    );
	}
}