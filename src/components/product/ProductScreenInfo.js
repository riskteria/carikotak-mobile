import React, { Component } from 'react';
import { View } from 'react-native';

import ProductScreenInfoBasic from './ProductScreenInfoBasic';
import ProductScreenInfoOption from './ProductScreenInfoOption';
import ProductScreenInfoUser from './ProductScreenInfoUser';
import ProductScreenInfoSpec from './ProductScreenInfoSpec';
import ProductScreenInfoDescription from './ProductScreenInfoDescription';

class ProductScreenInfo extends Component {
  render() {
    const { product, navigation } = this.props;

    return (
      <View>
        <ProductScreenInfoBasic product={product} />

        <ProductScreenInfoOption product={product} navigation={navigation} />

        <ProductScreenInfoUser product={product} navigation={navigation} />

        <ProductScreenInfoSpec product={product} />

        <ProductScreenInfoDescription product={product} />
      </View>
    );
  }
}

export default ProductScreenInfo;
