import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Container, Header, Button, Icon, Title, Body, Right} from 'native-base';

import colors from 'styles/_colors';

import MessageList from './MessageList';

class MessageScreen extends Component {

	render () {

		const { navigate } = this.props.navigation;

		return (
			<Container style={{ backgroundColor: colors.colorLight }}>
				<Header style={{ backgroundColor: '#fff', elevation: 1 }}>
					<Body style={{ alignItems: 'flex-start', flex: 1}}>
						<Title style={{ color: colors.colorDark }}>Pesan</Title>
					</Body>
					<Right style={{ position: 'absolute', right: 8 }}>
						<Button transparent dark onPress={() => navigate('Notification')}>
							<Icon name="ios-notifications-outline" />
						</Button>
					</Right>
				</Header>

				<ScrollView>
					<MessageList />
				</ScrollView>

			</Container>
		);
	}

}

export default MessageScreen;
