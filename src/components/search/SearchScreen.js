import React, { Component } from 'react';
import {
	Container,
	Header,
	Body,
	Left,
	Button,
	Icon,
	Title,
	Subtitle
} from 'native-base';

import colors from 'styles/_colors';

class SearchScreen extends Component {

	render () {

		const { goBack, navigate } = this.props.navigation;

		return (
			<Container>
				<Header style={{ backgroundColor: colors.colorLight, elevation: 1 }}>
					<Left style={{ flex: 0.16 }}>
						<Button transparent dark onPress={() => goBack()}>
							<Icon name="md-arrow-back" />
						</Button>
					</Left>
					<Body>
						<Title onPress={() => navigate('Location')} style={{ color: colors.colorDark }}>Your location</Title>
						<Subtitle onPress={() => navigate('Location')}>Select your location</Subtitle>
					</Body>
				</Header>
			</Container>
		);
	}

}

export default SearchScreen;
