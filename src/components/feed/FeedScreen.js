import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Container } from 'native-base';

import styles from './styles';
import FeedSwiper from './FeedSwiper';
import FeedFindMyBox from './FeedFindMyBox';
import FeedContentTab from './FeedContentTab';

class FeedScreen extends Component {

	render () {
		const { navigate } = this.props.navigation;

		return (
			<ScrollView style={styles.parentView}>
				<FeedSwiper />
				<FeedFindMyBox navigate={navigate} />
				<View style={{ flex: 1 }}>
					<FeedContentTab />
				</View>
			</ScrollView>
		);
	}

}

export default FeedScreen;
