import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { loadImageProduct } from 'services/ImageFetcher';
import styles from './styles';

class CardProduct extends Component {
  render() {
    const { product, navigation } = this.props;
    const { navigate } = navigation;

    return (
      <TouchableOpacity
        activeOpacity={0.9}
        style={styles.cardProductContainer}
        onPress={() => navigate('Product', { slug: product.slug })}
      >
        <View style={{ height: 200 }}>
          <Image
            style={{ flex: 1 }}
            source={{ uri: loadImageProduct(product.image, 'medium') }}
          />
        </View>
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
      </TouchableOpacity>
    );
  }
}

export default CardProduct;
