import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button, Icon } from 'native-base';

import styles from './styles';

class FeedFindMyBox extends Component {

	render () {
		return (
			<View style={ styles.sectionContent }>
				<Button iconLeft iconRight full large rounded bordered dark>
					<Icon name="md-search" style={{ color: '#4d4d4d' }} />
					<View style={styles.buttonFindTextInside}>
						<Text style={ styles.buttonFindTextTitle }>Temukan kotak</Text>
						<Text style={ styles.buttonFindTextSubtitle }>Temukan kotak kebutuhan anda</Text>
					</View>
					<Icon name="ios-arrow-forward" style={{ color: '#4d4d4d' }} />
				</Button>
			</View>
		);
	}

}

export default FeedFindMyBox;
