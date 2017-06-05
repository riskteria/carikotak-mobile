import React, { Component } from 'react';
import { Container, Header, Title, Body, Right} from 'native-base';

import styles from './styles';
import colors from 'styles/_colors';

class CreateScreen extends Component {

	render () {
		return (
			<Container>
				<Header style={{ backgroundColor: '#fff', elevation: 1 }}>
					<Body style={{ alignItems: 'flex-start', flex: 1}}>
						<Title style={{ color: colors.colorDark }}>Kiriman Baru</Title>
					</Body>
				</Header>
			</Container>
		);
	}

}

export default CreateScreen;
