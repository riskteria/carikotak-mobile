import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';

import CardProduct from './CardProduct';
import styles from './styles';

class TabStory extends Component {

	render () {
		return (
			<View>
				<View style={styles.tabProductSection}>
					<View style={styles.tabProductSectionTop}>
						<Text>Kotak Product</Text>
						<Text style={styles.tabProductSectionLink}>Lihat Semua</Text>
					</View>
					<ScrollView horizontal automaticallyAdjustContentInsets={false} showsHorizontalScrollIndicator={false}>
						<CardProduct />
						<CardProduct />
						<CardProduct />
						<CardProduct />
					</ScrollView>
				</View>
				<View style={styles.tabProductSection}>
					<View style={styles.tabProductSectionTop}>
						<Text>Kotak Product</Text>
						<Text style={styles.tabProductSectionLink}>Lihat Semua</Text>
					</View>
					<ScrollView horizontal automaticallyAdjustContentInsets={false} showsHorizontalScrollIndicator={false}>
						<CardProduct />
						<CardProduct />
						<CardProduct />
						<CardProduct />
					</ScrollView>
				</View>
				<View style={styles.tabProductSection}>
					<View style={styles.tabProductSectionTop}>
						<Text>Kotak Product</Text>
						<Text style={styles.tabProductSectionLink}>Lihat Semua</Text>
					</View>
					<ScrollView horizontal automaticallyAdjustContentInsets={false} showsHorizontalScrollIndicator={false}>
						<CardProduct />
						<CardProduct />
						<CardProduct />
						<CardProduct />
					</ScrollView>
				</View>
			</View>
		)
	}

}

export default TabStory;
