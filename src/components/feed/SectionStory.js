import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import {
	Container,
	Icon,
	Button,
	View,
	DeckSwiper,
	Card,
	CardItem,
	Thumbnail,
	Text,
	Left,
	Body
} from 'native-base';


import colors from 'styles/_colors';
import styles from './styles';

const cards = [
	{
		title: 'Lacus arcu phasellus vero pariatur, natus, taciti, sapiente animi velit, autem quod cillum explicabo at faucibus laoreet habitant exercitation tenetur commodo ullam lectus neque?',
		name: 'One',
		user: {
			picture: { uri: 'https://unsplash.it/g/300x300??image=15' },
			id: 1,
			name: 'Axel Rose'
		},
		image: { uri: 'https://unsplash.it/300x300??image=10' }
	},{
		title: 'Ut commodi quaerat! Fugiat laoreet rem ex metus deserunt netus volutpat penatibus fuga placeat itaque, cubilia, totam orci?',
		name: 'Two',
		user: {
			picture: { uri: 'https://unsplash.it/g/300x300??image=19' },
			id: 2,
			name: 'Alexis Sanchez'
		},
		image: { uri: 'https://unsplash.it/300x300?image=50' }
	},
];

class SectionStory extends Component {

	render () {

		return (
			<Container style={ StyleSheet.flatten(styles.cardStoryDeckContainer) }>
				<DeckSwiper
					dataSource={cards}
					renderItem={item =>
						<Card style={ StyleSheet.flatten(styles.cardStoryContainer) }>
							<Image style={ StyleSheet.flatten(styles.cardStoryImageBackground) } source={ item.image } />
							<CardItem style={{ backgroundColor: colors.colorTransparent }}>
								<Left>
									<Thumbnail small circle source={item.user.picture} />
									<Body>
										<Text style={StyleSheet.flatten(styles.cardStoryHeaderName)}>
											{ item.user.name }
										</Text>
									</Body>
								</Left>
							</CardItem>
							<CardItem style={{ backgroundColor: colors.colorTransparent, flex: 1 }}>
								<Text numberOfLines={3} style={StyleSheet.flatten(styles.cardStoryTitle)}>
									{ item.title }
								</Text>
							</CardItem>
							<CardItem style={{ backgroundColor: 'transparent', flexDirection: 'row', justifyContent: 'space-between' }}>
								<Button light transparent small style={{ paddingLeft: 0, paddingRight: 0 }}>
									<Icon name="ios-heart" style={{ color: colors.colorHeart }} />
									<Text style={{ fontSize: 12 }}>200</Text>
								</Button>
								<Button light transparent small style={{ paddingLeft: 0, paddingRight: 0 }}>
									<Text style={{ fontSize: 12 }}>200 Komentar</Text>
								</Button>
							</CardItem>
						</Card>
					}
				/>

            </Container>
		)
	}

}

export default SectionStory;
