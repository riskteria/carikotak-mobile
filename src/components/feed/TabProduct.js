import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';

import CardProduct from './CardProduct';

class TabStory extends Component {

	render () {
		return (
			<View>
				<ScrollView horizontal automaticallyAdjustContentInsets={false}>
					<CardProduct />
					<CardProduct />
					<CardProduct />
					<CardProduct />
				</ScrollView>
			</View>
		)
	}

}

export default TabStory;
