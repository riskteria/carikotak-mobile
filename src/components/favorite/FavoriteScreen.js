import React, { Component } from 'react';
import { Container } from 'native-base';

import styles from './styles';
import FavoriteContentTab from './FavoriteContentTab';

class FavoriteScreen extends Component {

	render () {

		const { navigate } = this.props.navigation;

		return (
			<Container>
				<FavoriteContentTab navigate={navigate} />
			</Container>
		);
	}

}

export default FavoriteScreen;
