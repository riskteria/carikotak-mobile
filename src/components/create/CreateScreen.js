import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';

import styles from './styles';

class CreateScreen extends Component {

	render () {
		return (
			<ScrollView style={styles.parentView}>
				<Text>Create Screen</Text>
			</ScrollView>
		);
	}

}

export default CreateScreen;
