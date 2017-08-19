import React, { Component } from 'react';

import { StyleSheet } from 'react-native';
import { Content, Text, View, Item } from 'native-base';
import StarRating from 'react-native-star-rating';

import styles from './styles';
import colors from 'styles/_colors';

class ProductScreenInfoBasic extends Component {
  render() {
    const { product } = this.props;

    return (
      <Content style={StyleSheet.flatten(styles.infoSection)}>
        <Item style={StyleSheet.flatten(styles.infoContent)}>
          <Text style={StyleSheet.flatten(styles.infoName)}>
            {product.name}
          </Text>
        </Item>

        <Item style={StyleSheet.flatten(styles.infoContent)}>
          <View style={StyleSheet.flatten(styles.infoContent)}>
            <Text style={StyleSheet.flatten(styles.infoPrice)}>
              Rp.{product.price}
            </Text>
          </View>
          <View style={StyleSheet.flatten(styles.infoContentRating)}>
            <StarRating
              disabled={true}
              maxStars={5}
              rating={product.rating}
              starSize={12}
              starColor={colors.colorAccent}
              emptyStarColor={colors.colorAccent}
            />
            <Text style={StyleSheet.flatten(styles.ratingText)}>
              {product.rating}/5
            </Text>
          </View>
        </Item>

        <Item style={StyleSheet.flatten(styles.infoContent)}>
          <View>
            <Text note>
              Difavoritkan {product.total_favoriters} orang
            </Text>
          </View>

          <View>
            <Text note>
              Dirating {product.total_ratings} orang
            </Text>
          </View>
        </Item>
      </Content>
    );
  }
}

export default ProductScreenInfoBasic;
