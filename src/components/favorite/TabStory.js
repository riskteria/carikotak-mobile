import React, { Component } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';

import CardStory from './CardStory';
import styles from './styles';

class TabStory extends Component {

	render () {

		const navigate = this.props.navigate;
		const storyNumber = [1, 2, 3, 4, 5];

		const storyCard = storyNumber.map((number, index) => (
			<TouchableOpacity
				activeOpacity={0.9}
				key={index}
				onPress={() => navigate('Story')}>
				<CardStory key={index} />
			</TouchableOpacity>
		));

		return (
			<ScrollView style={styles.tabSection}>
				{ storyCard }
			</ScrollView>
		);
	}

}

export default TabStory;
