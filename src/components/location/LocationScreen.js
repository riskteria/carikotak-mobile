import React, { Component } from 'react';
import {
	Container,
	Left,
	Body,
	Right,
	Header,
	Button,
	Icon,
	Title
} from 'native-base';

import colors from 'styles/_colors';


class LocationScreen extends Component {

	render () {

		const { goBack } = this.props.navigation;

		return (
			<Container>
				<Header style={{ backgroundColor: colors.colorLight, elevation: 1 }}>
					<Left style={{ flex: 0.16 }}>
						<Button transparent dark onPress={() => goBack()}>
							<Icon name="md-close" />
						</Button>
					</Left>
					<Body>
						<Title style={{ color: colors.colorDark }}>Select your location</Title>
					</Body>
				</Header>
			</Container>
		);

	}

}

export default LocationScreen;
