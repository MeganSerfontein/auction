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
				publishKey: 'pub-c-97fe584c-d4a9-466a-9ada-4919bd6a3478',
				subscribeKey: 'sub-c-c7c1df00-390d-11ea-9443-9e82b35d3d47'
			});
			this.pubnub.init(this);
				// this.state = { highest : 0 };
				console.log({ pubnub: this.pubnub });

		}

		componentWillMount() {
			this.pubnub.subscribe({
					channels: ['PubNubTest'],
					withPresence: true
			});
			this.pubnub.getMessage('PubNubTest', (msg) => {
					console.log('***'+msg.message);
					//this.last_message = msg.message;
					this.setState ({
						highest: msg.message
					});
			});
			this.pubnub.hereNow({
				channels: ["PubNubTest"],
				includeState: true
			},(status,response)=> {
				console.log(response.totalOccupancy);
				this.setState ({
					people: response.totalOccupancy
				});
			});

		}

	render() {		
		const messages = this.pubnub.getMessage('PubNubTest');

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
				</Container>
				);
	}
}