import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';

import CardProduct from './CardProduct';
import styles from './styles';

class TabStory extends Component {

	render () {

		const ProductSectionNumber = [1, 2, 3, 4, 5];
		const ProductNumber = [1, 2, 3, 4, 5];

		const ProductCard = ProductNumber.map((number, index) => (
			<CardProduct key={index} />
		));

		const ScrollProduct = ProductSectionNumber.map((number, index) => (
			<View style={styles.tabSection} key={index}>
				<View style={styles.tabProductSectionTop}>
					<Text style={styles.tabProductSectionLabel}>Kotak Produk</Text>
					<Text style={styles.tabProductSectionLink}>Lihat Semua</Text>
				</View>
				<ScrollView
					horizontal
					automaticallyAdjustContentInsets={false}
					showsHorizontalScrollIndicator={false}>
					<View style={styles.productListHorizontal}>
						{ ProductCard }
					</View>
				</ScrollView>
			</View>
		));

		return (
			<View>

				{ ScrollProduct }

			</View>
		);
	}

}

export default TabStory;
