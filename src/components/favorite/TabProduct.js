import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { Icon } from 'native-base';

import CardProduct from './CardProduct';
import styles from './styles';

class TabStory extends Component {

	render () {
		const ProductNumber = [1, 2, 3, 4, 5];

		const ProductCard = ProductNumber.map((number, index) => (
			<CardProduct />
		));

		return (
			<View>

				{ ProductCard }

			</View>
		)
	}

}

export default TabStory;
