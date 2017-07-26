import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

class CardProduct extends Component {
  render() {
    const { product } = this.props;

    return (
      <View style={styles.cardProductContainer}>
        <View style={styles.cardProductFooter}>
          <Text style={styles.cardProductName} numberOfLines={2}>
            {product.name}
          </Text>
          <View style={styles.cardProductFooterCol}>
            <Text style={styles.cardProductOwner}>
              {product.user.name}
            </Text>
            <Text style={styles.cardProductStatus}>
              {product.type}
            </Text>
          </View>
          <View style={styles.cardProductFooterCol}>
            <Text style={styles.cardProductPrice}>
              Rp. {product.price}
            </Text>
            <Text style={styles.cardProductLocation}>Medan</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default CardProduct;
