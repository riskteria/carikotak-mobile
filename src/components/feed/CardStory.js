import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Thumbnail } from 'native-base';

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
				</View>
				<View style={styles.cardStoryFooter}>
					<Text style={styles.cardStoryTitle}>This is kotak</Text>
					<Text numberOfLines={1} style={styles.cardStoryDescription}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod blanditiis maiores, itaque, sapiente minus voluptates?</Text>
				</View>
			</View>
		)
	}

}

export default CardStory;
