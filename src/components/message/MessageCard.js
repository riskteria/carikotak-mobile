import React, { Component } from 'react';
import { TouchableNativeFeedback } from 'react-native';
import { Card, CardItem, Left, Thumbnail, Body, Text } from 'native-base';

class MessageCard extends Component {

	render () {
		return (
			<TouchableNativeFeedback background={TouchableNativeFeedback.Ripple()}>
				<Card style={{ elevation: 0, marginBottom: 0, marginTop: 0 }}>
					<CardItem style={{ backgroundColor: 'transparent' }}>
						<Left>
							<Thumbnail source={{ uri: 'https://unsplash.it/300x300?random' }} />
							<Body>
								<Text>Alexander Ackerman</Text>
								<Text numberOfLines={1} note>Hello this is ackerman here, would you like to come to</Text>
							</Body>
						</Left>
					</CardItem>
				</Card>
			</TouchableNativeFeedback>
		);
	}

}

export default MessageCard;
