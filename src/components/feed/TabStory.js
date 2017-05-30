import React, { Component } from 'react';
import { View } from 'react-native';

import CardStory from './CardStory';
import styles from './styles';

class TabStory extends Component {

	render () {
		const storyNumber = [1, 2, 3, 4, 5];
		const storyCard = storyNumber.map((number, index) => (
			<CardStory key={number} />
		));

		return (

			<View style={styles.tabSection}>
				{ storyCard }
			</View>
		);
	}

}

export default TabStory;
