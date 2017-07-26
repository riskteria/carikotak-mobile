import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { View, Content, Text } from 'native-base';
import StarRating from 'react-native-star-rating';
import HTMLView from 'react-native-htmlview';

import styles from './styles';
import colors from 'styles/_colors';

class ProductScreenInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { product } = this.props;

    return (
      <View>
        <Content style={StyleSheet.flatten(styles.infoSection)}>
          <Content>
            <Text>
              {product.name}
            </Text>
          </Content>
          <Content>
            <Text>
              Rp.{product.price}
            </Text>
          </Content>
          <Content>
            <StarRating
              disabled={true}
              maxStars={5}
              rating={product.rating || 0}
              starSize={10}
              starColor={colors.colorAccent}
              emptyStarColor={colors.colorAccent}
            />
          </Content>
        </Content>

        <Content style={StyleSheet.flatten(styles.infoSection)}>
          <Content>
            <HTMLView value={product.description} />
          </Content>
        </Content>
      </View>
    );
  }
}

export default ProductScreenInfo;
