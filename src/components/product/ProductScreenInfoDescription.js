import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Content } from 'native-base';
import HTMLView from 'react-native-htmlview';

import htmlStyleSheet from './htmlStyleSheet';
import styles from './styles';

class ProductScreenInfoDescription extends Component {
  render() {
    const { product } = this.props;

    return (
      <Content style={StyleSheet.flatten(styles.infoSection)}>
        <Content>
          <HTMLView value={product.description} stylesheet={htmlStyleSheet} />
        </Content>
      </Content>
    );
  }
}

export default ProductScreenInfoDescription;
