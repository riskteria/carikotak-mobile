import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Thumbnail, Icon } from 'native-base';

import styles from './styles';

class CardStory extends Component {

	render () {
		return (
			<View style={styles.cardContainer}>
				<View style={styles.cardStoryHeader}>
					<Thumbnail circle small source={{ uri: 'https://unsplash.it/300x300?random' }} />
					<Text style={styles.cardStoryHeaderName}>John Artileri</Text>
				</View>
				<View style={styles.cardStoryFooter}>
					<Text numberOfLines={4} style={styles.cardStoryTitle}>Aliquam dolorum! Dolores, blanditiis, excepturi. Quas officiis, id.</Text>
				</View>
			</View>
		)
	}

}

export default CardStory;
