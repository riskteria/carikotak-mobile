import React, { Component } from 'react';
import { Container, Text } from 'native-base';

class MessageScreen extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Container>
				<Text>This is the message screen</Text>
			</Container>
		);
	}

}

export default MessageScreen;
