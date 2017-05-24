import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Icon } from 'native-base';

import styles from './styles';

class CardProduct extends Component {

	render () {
		return (
			<View style={styles.cardProductContainer}>
				<View style={styles.cardProductFooter}>
					<Text style={styles.cardProductName} numberOfLines={2}>This is a great of sample box product</Text>
					<View style={styles.cardProductFooterCol}>
						<Text style={styles.cardProductOwner}>Riskteria</Text>
						<Text style={styles.cardProductStatus}>Jual</Text>
					</View>
					<View style={styles.cardProductFooterCol}>
						<Text style={styles.cardProductPrice}>Rp. 150.000</Text>
						<Text style={styles.cardProductLocation}>Medan</Text>
					</View>
				</View>
			</View>
		)
	}

}

export default CardProduct;
