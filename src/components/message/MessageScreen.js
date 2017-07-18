import React, { Component } from 'react';
import { Container } from 'native-base';
import { GiftedChat } from 'react-native-gifted-chat';

class MessageScreen extends Component {

	constructor(props) {
		super(props);

		this.state = {
			messages: [{
				_id: 1,
				text: 'Hello developer',
				createdAt: new Date(),
				user: {
					_id: 2,
					name: 'React Native',
					avatar: 'https://facebook.github.io/react/img/logo_og.png',
				},
			}]
		};

	}

	onSend(messages = []) {
		this.setState((previousState) => ({
			messages: GiftedChat.append(previousState.messages, messages),
		}));
	}

	render() {
		return (
			<Container>
				<GiftedChat
					messages={this.state.messages}
					onSend={(messages) => this.onSend(messages)}
					user={{
						_id: 1,
					}}
				/>
			</Container>
		);
	}

}

export default MessageScreen;
