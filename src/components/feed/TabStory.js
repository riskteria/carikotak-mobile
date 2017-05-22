import React, { Component } from 'react';
import { View } from 'react-native';

import CardStory from './CardStory';
import styles from './styles';

class TabStory extends Component {

	render () {
		return (
			<View style={styles.tabSection}>
				<CardStory />
				<CardStory />
				<CardStory />
				<CardStory />
				<CardStory />
			</View>
		)
	}

}

export default TabStory;
