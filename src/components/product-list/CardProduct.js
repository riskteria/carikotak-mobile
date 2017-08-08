import React, { Component } from 'react';
import { TouchableOpacity, Text, Image, View } from 'react-native';
import StarRating from 'react-native-star-rating';
import numeral from 'numeral';
import { loadImageProduct } from 'services/ImageFetcher';
import styles from './styles';
import colors from 'styles/_colors';

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
            <Text style={styles.cardProductPrice}>
              {`Rp. ${numeral(product.price).format('0,0')}`}
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
      </TouchableOpacity>
    );
  }
}

export default CardProduct;
