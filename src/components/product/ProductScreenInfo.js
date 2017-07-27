import React, { Component } from 'react';
import { View } from 'react-native';

import ProductScreenInfoBasic from './ProductScreenInfoBasic';
import ProductScreenInfoUser from './ProductScreenInfoUser';
import ProductScreenInfoSpec from './ProductScreenInfoSpec';
import ProductScreenInfoDescription from './ProductScreenInfoDescription';

class ProductScreenInfo extends Component {
  render() {
    const { product } = this.props;

    return (
      <View>
        <ProductScreenInfoBasic product={product} />

        <ProductScreenInfoUser product={product} />

        <ProductScreenInfoSpec product={product} />

        <ProductScreenInfoDescription product={product} />
      </View>
    );
  }
}

export default ProductScreenInfo;
