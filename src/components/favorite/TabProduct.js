import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import CardProduct from './CardProduct';

class TabStory extends Component {

	render () {
		const ProductNumber = [1, 2, 3, 4, 5];

		const ProductCard = ProductNumber.map((number, index) => (
			<CardProduct key={index} />
		));

		return (
			<ScrollView>

				{ ProductCard }

			</ScrollView>
		);
	}

}

export default TabStory;
