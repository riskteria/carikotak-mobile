import React, { Component } from 'react';
import { View } from 'react-native';

import CardStory from './CardStory';

class TabStory extends Component {

	render () {
		return (
			<View>
				<CardStory />
				<CardStory />
				<CardStory />
				<CardStory />
				<CardStory />
			</View>
		)
	}

}

export default TabStory;
