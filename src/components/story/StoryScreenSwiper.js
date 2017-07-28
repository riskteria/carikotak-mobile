import React, { Component } from 'react';
import { Image } from 'react-native';
import Swiper from 'react-native-swiper';

import { loadImageProduct } from 'services/ImageFetcher';
import styles from './styles';

class StoryScreenSwiper extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { story } = this.props;

    const Slides = story.image.map((image, index) => {
      return (
        <Image
          key={index}
          style={styles.swiperSlide}
          source={{ uri: loadImageProduct(image, 'big') }}
        />
      );
    });

    return (
      <Swiper style={styles.swiperWrapper} height={350}>
        {Slides}
      </Swiper>
    );
  }
}

export default StoryScreenSwiper;
