import React, { Component } from 'react';
import {
	Container,
	Content,
	Header,
	Body,
	View,
	Left,
	Button,
	Icon,
	Text,
	Title,
	Item,
	Subtitle,
	InputGroup,
	Input
} from 'native-base';

import colors from 'styles/_colors';

class SearchScreen extends Component {

	render () {

		const { goBack, navigate } = this.props.navigation;

		return (
			<Container>
				<Header style={{ backgroundColor: colors.colorLight, elevation: 1 }}>
					<Left style={{ flex: 0.16 }}>
						<Button transparent dark onPress={() => goBack()}>
							<Icon name="md-arrow-back" />
						</Button>
					</Left>
					<Body>
						<Title onPress={() => navigate('Location')} style={{ color: colors.colorDark }}>Your location</Title>
						<Subtitle onPress={() => navigate('Location')}>Select your location</Subtitle>
					</Body>
				</Header>

				<Content>

					<View style={{ padding: 16 }}>
						<Item rounded style={{ backgroundColor: '#fff', paddingLeft: 8, paddingRight: 8 }}>
							<Icon name="ios-search-outline" />
							<Input placeholder="Cari sesuatu" />
							<Icon name="md-close-circle" style={{ color: '#999' }} />
						</Item>
					</View>

					<View style={{ flex: 1, flexDirection: 'row', paddingLeft: 8, paddingRight: 8 }}>

						<View style={{ flex: 0.5, padding: 8 }}>
							<Button dark block style={{ borderRadius: 5 }}>
								<Text>Cerita Kotak</Text>
							</Button>
						</View>

						<View style={{ flex: 0.5, padding: 8 }}>
							<Button dark block style={{ borderRadius: 5 }}>
								<Text>Kotak Produk</Text>
							</Button>
						</View>

					</View>

					<View style={{ flex: 1, flexDirection: 'row', paddingLeft: 8, paddingRight: 8 }}>

						<View style={{ flex: 0.5, padding: 8 }}>
							<Button dark block style={{ borderRadius: 5 }}>
								<Text>Kotak Bekas</Text>
							</Button>
						</View>

						<View style={{ flex: 0.5, padding: 8 }}>
							<Button dark block style={{ borderRadius: 5 }}>
								<Text>Kotak Hadiah</Text>
							</Button>
						</View>

					</View>

					<View style={{ flex: 1, flexDirection: 'row', paddingLeft: 8, paddingRight: 8 }}>

						<View style={{ flex: 0.5, padding: 8 }}>
							<Button dark block style={{ borderRadius: 5 }}>
								<Text>Kreasi Kotak</Text>
							</Button>
						</View>

						<View style={{ flex: 0.5, padding: 8 }}>
							<Button dark block style={{ borderRadius: 5 }}>
								<Text>Daur Ulang</Text>
							</Button>
						</View>

					</View>

				</Content>

			</Container>
		);
	}

}

export default SearchScreen;
