import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import CardStory from './CardStory';

import { API } from 'services/APIService';

import styles, { sliderWidth, itemWidth } from './styles';

const cards = [
  {
    title:
      'Lacus arcu phasellus vero pariatur, natus, taciti, sapiente animi velit, autem quod cillum explicabo at faucibus laoreet habitant exercitation tenetur commodo ullam lectus neque?',
    name: 'One',
    user: {
      picture: { uri: 'https://unsplash.it/g/300x300??image=15' },
      id: 1,
      name: 'Axel Rose'
    },
    image: { uri: 'https://unsplash.it/300x300??image=10' }
  },
  {
    title:
      'Ut commodi quaerat! Fugiat laoreet rem ex metus deserunt netus volutpat penatibus fuga placeat itaque, cubilia, totam orci?',
    name: 'Two',
    user: {
      picture: { uri: 'https://unsplash.it/g/300x300??image=19' },
      id: 2,
      name: 'Alexis Sanchez'
    },
    image: { uri: 'https://unsplash.it/300x300?image=50' }
  }
];

class StoryCarousel extends Component {
  constructor(props) {
    super(props);

    this._getStories = this._getStories.bind(this);

    this.state = {
      stories: []
    };
  }

  _getStories() {
    console.log('getStories');
    API.get('api/post?page=1&&per_page=5')
      .then(res => {
        this.setState({ stories: res.data });
      })
      .catch(err => {
        throw err;
      });
  }

  componentWillMount() {
    this._getStories();
  }

  render() {
    const navigate = this.props.navigate;

    const CardSwipe = cards.map((story, index) =>
      <TouchableOpacity
        key={index}
        activeOpacity={0.8}
        style={styles.slideInnerContainer}
        onPress={() => navigate('Story')}
      >
        <CardStory key={index} story={story} />
      </TouchableOpacity>
    );

    const CarouselStory = () =>
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
        removeClippedSubviews={false}
      >
        {CardSwipe}
      </Carousel>;

    return (
      <View>
        <View style={styles.tabProductSectionTop}>
          <Text style={styles.tabProductSectionLabel}>Cerita Terpopuler</Text>
          <Text
            onPress={() => navigate('StoryList')}
            style={styles.tabProductSectionLink}
          >
            Lihat Semua
          </Text>
        </View>
        <CarouselStory />
      </View>
    );
  }
}

export default StoryCarousel;
