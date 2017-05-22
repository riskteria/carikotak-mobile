import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button, Icon } from 'native-base';

import styles from './styles';

class FeedFindMyBox extends Component {

	render () {
		return (
			<View style={ styles.sectionFindMyBox }>
				<Button iconLeft iconRight full large rounded bordered dark style={{ borderColor: '#c4c4c4' }}>
					<Icon name="md-search" style={{ color: '#c4c4c4' }} />
					<View style={styles.buttonFindTextInside}>
						<Text style={ styles.buttonFindTextTitle }>Temukan kotak</Text>
						<Text style={ styles.buttonFindTextSubtitle }>Temukan kotak kebutuhan anda</Text>
					</View>
					<Icon name="ios-arrow-forward" style={{ color: '#c4c4c4' }} />
				</Button>
			</View>
		);
	}

}

export default FeedFindMyBox;
