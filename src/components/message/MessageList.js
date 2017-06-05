import React, { Component } from 'react';
import { View } from 'native-base';

import MessageCard from './MessageCard';

class MessageList extends Component {

	render () {

		const ListMessageCard = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((data, index) => <MessageCard data={data} key={index} />);

		return (
			<View>
				{ ListMessageCard }
			</View>
		);
	}

}

export default MessageList;
