import React, { Component } from 'react';
import {
	StyleSheet,
	Image
} from 'react-native';
import {
	Icon,
	Button,
	Card,
	CardItem,
	Thumbnail,
	Text,
	Left,
	Body
} from 'native-base';

import colors from 'styles/_colors';
import styles from './styles';

class CardStory extends Component {

	render () {

		const { item } = this.props;

		return (
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
		);
	}

}

export default CardStory;
