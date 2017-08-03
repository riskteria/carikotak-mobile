import React, { Component } from 'react';
import { View } from 'react-native';

import ProductScreenInfoBasic from './ProductScreenInfoBasic';
import ProductScreenInfoRating from './ProductScreenInfoRating';
import ProductScreenInfoOption from './ProductScreenInfoOption';
import ProductScreenInfoUser from './ProductScreenInfoUser';
import ProductScreenInfoSpec from './ProductScreenInfoSpec';
import ProductScreenInfoDescription from './ProductScreenInfoDescription';

class ProductScreenInfo extends Component {
  render() {
    const { product, navigation, _onRatingGiven } = this.props;

    return (
      <View>
        <ProductScreenInfoBasic product={product} />

        <ProductScreenInfoRating
          product={product}
          _onRatingGiven={_onRatingGiven}
        />

        <ProductScreenInfoOption product={product} navigation={navigation} />

        <ProductScreenInfoUser product={product} navigation={navigation} />

        <ProductScreenInfoSpec product={product} />

        <ProductScreenInfoDescription product={product} />
      </View>
    );
  }
}

export default ProductScreenInfo;
