import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';

import styles from './styles';
import FavoriteContentTab from './FavoriteContentTab';

class FavoriteScreen extends Component {

	render () {
		return (
			<ScrollView style={styles.parentView}>
				<FavoriteContentTab />
			</ScrollView>
		);
	}

}

export default FavoriteScreen;
