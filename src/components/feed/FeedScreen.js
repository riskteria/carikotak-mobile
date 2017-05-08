import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Icon } from 'native-base';

import styles from './styles';

class FeedScreen extends Component {

	static navigationOptions = ({ navigation }) => {
		return {
			headerTintColor: '#000',
			headerRight: (
				<Button light transparent onPress={() => {}}>
					<Icon style={{ color: '#000' }} name="ios-search-outline" />
				</Button>
			)
		};
	}

	render () {
		return (
			<View><Text>Feed View</Text></View>
		);
	}

}

export default FeedScreen;
