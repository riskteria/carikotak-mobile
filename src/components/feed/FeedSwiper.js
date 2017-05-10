import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Swiper from 'react-native-swiper';

import styles from './styles';


class FeedSwiper extends Component {

	render () {
		return (
			<Swiper style={styles.slideWrapper}
				autoplay={true}
				loop={true}
				height={200}
				loadMinimal={true}
				loadMinimalSize={1}
				dotStyle={{ width: 5, height: 5 }}
				dotColor={'rgba(255, 255, 255, 0.2'}>

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
