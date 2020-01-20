import React, { Component } from 'react';
import PubNubReact from 'pubnub-react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import { Container } from '@material-ui/core';

import PubNubCards from './PubNubCards';
import AuctionItem from './AuctionItem';  

export default class Auction extends Component {

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
					channels: ['PubNubSubmit'],
					withPresence: true
			});
			this.pubnub.getMessage('PubNubSubmit', (msg) => {
					console.log('***'+msg.message);
					//this.last_message = msg.message;
					this.setState ({
						highest: msg.message
					});
			});
			this.pubnub.hereNow({
				channels: ["PubNubSubmit"],
				includeState: true
			},(status,response)=> {
				console.log(response.totalOccupancy);
				this.setState ({
					people: response.totalOccupancy
				});
			});

		}

	render() {		
		const messages = this.pubnub.getMessage('PubNubSubmit');

	    return (
	    		<Container Container style={{marginBottom: '2em'}}>
					<AuctionItem />
					<PubNubCards data={messages.length} highest={this.state.highest} people={this.state.people}/>
				</Container>
				);
	}
}