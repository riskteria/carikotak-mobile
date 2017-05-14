import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Button, Icon } from 'native-base';

import styles from './styles';
import FeedSwiper from './FeedSwiper';
import FeedFindMyBox from './FeedFindMyBox';

class FeedScreen extends Component {

	/*static navigationOptions = ({ navigation }) => {
		return {
			headerTintColor: '#000',
			headerRight: (
				<Button light transparent onPress={() => {}}>
					<Icon style={{ color: '#000' }} name="ios-search-outline" />
				</Button>
			)
		};
	}*/

	render () {
		return (
			<ScrollView>
				<FeedSwiper />
				<FeedFindMyBox />
			</ScrollView>
		);
	}

}

export default FeedScreen;
