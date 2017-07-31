import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
  Content,
  List,
  ListItem,
  Left,
  Icon,
  Body,
  Text,
  Right
} from 'native-base';
import moment from 'moment';

import styles from './styles';

class ProductScreenInfoSpec extends Component {
  render() {
    const { product } = this.props;

    const ProductListData = (icon, label, color = 'transparent') => {
      if (product) {
        return (
          <ListItem icon>
            <Left>
              <Icon
                name={icon}
                style={StyleSheet.flatten(styles.infoUserChildText)}
              />
            </Left>
            <Body
              style={{
                borderBottomColor: 'transparent',
                backgroundColor:
                  color instanceof String ? color.toLowerCase() : color
              }}
            >
              <Text style={StyleSheet.flatten(styles.infoUserChildText)}>
                {label}
              </Text>
            </Body>
            <Right />
          </ListItem>
        );
      }
    };

    return (
      <Content style={StyleSheet.flatten(styles.infoSection)}>
        <List>
          {ProductListData(
            'md-pin',
            product.user.city ? product.user.city.name : 'Indonesia'
          )}

          {ProductListData(
            'md-pricetag',
            product.condition === 'new' ? 'Baru' : 'Bekas'
          )}

          {ProductListData(
            'md-time',
            moment(product.updated_at).format('d MMMM YYYY')
          )}

          {ProductListData('md-grid', product.category.name)}

          {ProductListData(
            'md-cube',
            'Lebar: ' +
              (product.width ? product.width + ' cm' : 'Tidak ditentukan') +
              ' x Tinggi: ' +
              (product.height ? product.height + ' cm' : 'Tidak ditentukan') +
              ' x Panjang: ' +
              (product.length ? product.length + ' cm' : 'Tidak ditentukan')
          )}

          {ProductListData('md-egg', '', product.color)}
        </List>
      </Content>
    );
  }
}

export default ProductScreenInfoSpec;
