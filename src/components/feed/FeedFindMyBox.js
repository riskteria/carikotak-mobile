import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Icon } from 'native-base';
import { NavigationActions } from 'react-navigation';

import styles from './styles';

class FeedFindMyBox extends Component {

	render () {

		const navigate = this.props.navigate;

		return (
			<View style={ styles.sectionFindMyBox }>
				<Button
					iconLeft iconRight full large rounded bordered dark
					style={{ borderColor: '#c4c4c4' }}
					onPress={() => navigate('Find')}>
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
