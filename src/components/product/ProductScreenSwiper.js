import React, { Component } from 'react';
import { Image } from 'react-native';
import Swiper from 'react-native-swiper';

import { loadImageProduct } from 'services/ImageFetcher';
import styles from './styles';

class ProductScreenSwiper extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { product } = this.props;

    const Slides = product.image.map((image, index) => {
      return (
        <Image
          key={index}
          style={styles.swiperSlide}
          source={{ uri: loadImageProduct(image, 'medium') }}
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

export default ProductScreenSwiper;
