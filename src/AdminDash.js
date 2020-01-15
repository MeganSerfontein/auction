import React, { Component } from 'react';
import PubNubReact from 'pubnub-react';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText';

import { Container } from '@material-ui/core';
import DashCards from './DashCards';
  

export default class AdminDash extends Component {

		constructor(props) {
			super(props);
				this.state = {highest: 0, people: 0};
				//this.last_message = 0;
			this.pubnub = new PubNubReact({
				publishKey: 'pub-c-603262c0-7c8f-4d4f-95dc-9d61c9f62ec5',
				subscribeKey: 'sub-c-2f01ead6-338a-11ea-a657-76e5f2bf83fc'
			});
			this.pubnub.init(this);
				// this.state = { highest : 0 };
				console.log({ pubnub: this.pubnub });

		}

		componentWillMount() {
			this.pubnub.subscribe({
					channels: ['BidTest'],
					withPresence: true
			});
			this.pubnub.getMessage('BidTest', (msg) => {
					console.log('***'+msg.message);
					//this.last_message = msg.message;
					this.setState ({
						highest: msg.message
					});
			});
			this.pubnub.hereNow({
				channels: ["BidTest"],
				includeState: true
			},(status,response)=> {
				console.log(response.totalOccupancy);
				this.setState ({
					people: response.totalOccupancy
				});
			});

		}

	render() {		
		const messages = this.pubnub.getMessage('BidTest');

	    return (
	    		<Container>
					<DashCards data={messages.length} highest={this.state.highest} people={this.state.people}/>
						<br/>
						<br/>
                        <div>
                            <List component="nav" aria-label="main mailbox folders" flush>
                                {messages.map((m, index) =><ListItem><h1 key={'message' + index}>{m.message}</h1></ListItem>)}
                            </List>
                        </div>
						<List flush>{messages.map((m, index) => <ListItemText><h1 key={'message' + index}>{m.message}</h1></ListItemText>)}</List>
				</Container>
				);
	}
}