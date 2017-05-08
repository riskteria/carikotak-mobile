import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Swiper from 'react-native-swiper';

import styles from './styles';


class FeedSwiper extends Component {

	render () {
		return (
			<Swiper style={styles.slideWrapper}
				autoplay={true}
				loop={false}
				height={200}
				loadMinimal={false}>

				<View style={styles.slideInner}>
					<Text style={styles.slideText}>Kotak Hadiah</Text>
				</View>
				<View style={styles.slideInner}>
					<Text style={styles.slideText}>Kotak Terbaik</Text>
				</View>
				<View style={styles.slideInner}>
					<Text style={styles.slideText}>Kotak Untuk Saya</Text>
				</View>
			</Swiper>
		);
	}

}

export default FeedSwiper;
