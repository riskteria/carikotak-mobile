import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Container } from 'native-base';

import styles from './styles';
import FavoriteContentTab from './FavoriteContentTab';

class FavoriteScreen extends Component {

	render () {
		return (
			<Container>
				<FavoriteContentTab />
			</Container>
		);
	}

}

export default FavoriteScreen;
