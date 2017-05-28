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
				<View style={{ flex: 1, height: 250 }}>
					<Image style={{ flex: 1}} source={{ uri: 'https://unsplash.it/300x300?random' }} />
					<Icon name="ios-heart" style={{ position: 'absolute', right: 8, top: 8, color: 'rgba(255, 255, 255, 0.8)', fontSize: 40 }} />
				</View>
				<View style={styles.cardStoryFooter}>
					<Text numberOfLines={4} style={styles.cardStoryTitle}>Aliquam dolorum! Dolores, blanditiis, excepturi. Quas officiis, id.</Text>
					<Text numberOfLines={4} style={styles.cardStoryDescription}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam quisquam amet tenetur numquam cupiditate incidunt maxime quibusdam, modi suscipit porro vitae accusantium, aliquam dolorum! Dolores, blanditiis, excepturi. Quas officiis, id.</Text>
				</View>
			</View>
		);
	}

}

export default CardStory;
