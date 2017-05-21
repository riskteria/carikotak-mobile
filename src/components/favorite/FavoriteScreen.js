import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';

import styles from './styles';

class FavoriteScreen extends Component {

	render () {
		return (
			<ScrollView style={styles.parentView}>
				<Text>Favorite Screen</Text>
			</ScrollView>
		);
	}

}

export default FavoriteScreen;
