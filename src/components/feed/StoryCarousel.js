import React, { Component } from 'react';
import Carousel from 'react-native-snap-carousel';
import CardStory from './CardStory';

import styles, { sliderWidth, itemWidth  } from './styles';

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

class StoryCarousel extends Component {

	render () {

		const CardSwipe = cards.map((item, index) => (
			<CardStory key={index} item={item} />
		));

		return (
			<Carousel
				sliderWidth={sliderWidth}
				itemWidth={itemWidth}
				firstItem={1}
				inactiveSlideScale={0.94}
				inactiveSlideOpacity={0.6}
				enableMomentum={false}
				containerCustomStyle={styles.slider}
				contentContainerCustomStyle={styles.sliderContainer}
				showsHorizontalScrollIndicator={false}
				snapOnAndroid={true}
				removeClippedSubviews={false}>

					{ CardSwipe }

				</Carousel>
		);
	}

}

export default StoryCarousel;
