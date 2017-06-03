import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';

import styles from './styles';

class CardProduct extends Component {

	render () {
		return (
			<TouchableOpacity activeOpacity={0.9} style={styles.cardProductContainer}>
				<View style={{ height: 200 }}>
					<Image style={{ flex: 1}} source={{ uri: 'https://unsplash.it/300x300?random' }} />
					<Icon name="ios-heart" style={{ position: 'absolute', right: 8, top: 8, color: 'rgba(255, 255, 255, 0.8)' }} />
				</View>
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
			</TouchableOpacity>
		)
	}

}

export default CardProduct;
