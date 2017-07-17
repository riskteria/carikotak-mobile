import React, { Component } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';

import CardProduct from './CardProduct';

class TabStory extends Component {

	render () {
		const navigate = this.props.navigate;
		const ProductNumber = [1, 2, 3, 4, 5];

		const ProductCard = ProductNumber.map((number, index) => (
			<TouchableOpacity
				activeOpacity={0.9}
				key={index}
				onPress={() => navigate('Product')}>
				<CardProduct key={index} />
			</TouchableOpacity>
		));

		return (
			<ScrollView>

				{ ProductCard }

			</ScrollView>
		);
	}

}

export default TabStory;
