import React, { Component } from 'react';
import { View } from 'native-base';

import MessageCard from './MessageCard';

class MessageList extends Component {

	render () {

		const navigate = this.props.navigate;

		const MessageNumber = [1];
		const ListMessageCard = MessageNumber.map((data, index) => (
			<MessageCard data={data} key={index} navigate={navigate} />
		));

		return (
			<View>
				{ ListMessageCard }
			</View>
		);
	}

}

export default MessageList;
