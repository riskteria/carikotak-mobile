import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import CardStory from './CardStory';
import styles from './styles';

class TabStory extends Component {

	render () {

		const storyNumber = [1, 2, 3, 4, 5];
		const storyCard = storyNumber.map((number, index) => (
			<CardStory key={index} />
		));

		return (
			<ScrollView style={styles.tabSection}>
				{ storyCard }
			</ScrollView>
		);
	}

}

export default TabStory;
