import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text, Icon } from 'native-base';

import styles from './styles';

class FeedFindMyBox extends Component {

	render () {
		return (
			<View>
				<Button iconLeft iconRight full large rounded bordered dark>
					<Icon name="md-search" style={{ color: '#4d4d4d' }} />
					<View style={styles.buttonFindTextInside}>
						<Text style={StyleSheet.flatten(styles.buttonFindTextTitle)}>Temukan kotak</Text>
						<Text style={StyleSheet.flatten(styles.buttonFindTextSubtitle)}>Temukan kotak kebutuhan anda</Text>
					</View>
					<Icon name="ios-arrow-forward" style={{ color: '#4d4d4d' }} />
				</Button>
			</View>
		);
	}

}

export default FeedFindMyBox;
