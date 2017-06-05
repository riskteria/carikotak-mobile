import React, { Component } from 'react';
import { Container, Header, Button, Icon, Title, Body, Right} from 'native-base';

import colors from 'styles/_colors';

class MessageScreen extends Component {

	render () {

		const { navigate } = this.props.navigation;

		return (
			<Container>
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
			</Container>
		);
	}

}

export default MessageScreen;
