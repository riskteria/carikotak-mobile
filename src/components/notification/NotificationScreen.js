import React, { Component } from 'react';
import { ScrollView} from 'react-native';
import { Container, Title, Header, Body, Left, Icon, Button, Content } from 'native-base';

// import styles from './styles';
import colors from 'styles/_colors';

import NotificationList from './NotificationList';

class NotificationScreen extends Component {

	render () {

		const { goBack, navigate } = this.props.navigation;

		return (
			<Container style={{ backgroundColor: colors.colorLight }}>
				<Header style={{ backgroundColor: '#fff', elevation: 1 }}>
					<Left>
						<Button transparent dark onPress={() => goBack()}>
							<Icon name="md-arrow-back" />
						</Button>
					</Left>
					<Body>
						<Title style={{ color: colors.colorDark }}>
							Pemberitahuan
						</Title>
					</Body>
				</Header>

				<Content>
					<ScrollView>
						<NotificationList navigate={navigate} />
					</ScrollView>
				</Content>

			</Container>
		);
	}

}

export default NotificationScreen;
