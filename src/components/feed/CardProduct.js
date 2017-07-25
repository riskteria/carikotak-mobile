import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import StarRating from 'react-native-star-rating';

import { loadImageProduct } from 'services/ImageFetcher';
import styles from './styles';
import colors from 'styles/_colors';

class CardProduct extends Component {
  render() {
    const { product } = this.props;

    return (
      <View>
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
            <Text style={styles.cardProductPrice}>
              Rp. {product.price}
            </Text>
            <Text style={styles.cardProductStatus}>
              {product.type}
            </Text>
          </View>
          <View style={styles.cardProductFooterCol}>
            <StarRating
              disabled={true}
              maxStars={5}
              rating={product.rating || 0}
              starSize={10}
              starColor={colors.colorAccent}
              emptyStarColor={colors.colorAccent}
            />
            <Text style={styles.cardProductLocation}>Medan</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default CardProduct;
