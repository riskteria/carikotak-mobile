import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import {
  Card,
  CardItem,
  Body,
  Text,
  Thumbnail,
  Grid,
  Col,
  Item,
  Icon
} from 'native-base';

import styles from './styles';
import { loadImageUser } from 'services/ImageFetcher';

class ProductScreenInfoUser extends Component {
  render() {
    const { product, navigation } = this.props;
    const { navigate } = navigation;

    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => navigate('User', { username: product.user.username })}
      >
        <Card style={{ elevation: 0 }}>
          <CardItem>
            <Body>
              <Text>
                Dijual oleh
                <Text style={StyleSheet.flatten(styles.infoOwner)}>
                  {' ' + product.user.name}
                </Text>
              </Text>
              <Item>
                <Icon
                  name="md-mail"
                  style={StyleSheet.flatten(styles.infoUserChildText)}
                />
                <Text note>
                  {product.user.email}
                </Text>
              </Item>
            </Body>
            <Thumbnail
              small
              circle
              source={{ uri: loadImageUser(product.user.avatar) }}
            />
          </CardItem>
          <CardItem cardBody>
            <Grid>
              <Col>
                <Item style={StyleSheet.flatten(styles.infoUserChild)}>
                  <Icon
                    name="md-book"
                    style={StyleSheet.flatten(styles.infoUserChildText)}
                  />
                  <Text style={StyleSheet.flatten(styles.infoUserChildText)}>
                    {product.user.total_product} Produk
                  </Text>
                </Item>
              </Col>
              <Col>
                <Item style={StyleSheet.flatten(styles.infoUserChild)}>
                  <Icon
                    name="md-card"
                    style={StyleSheet.flatten(styles.infoUserChildText)}
                  />
                  <Text style={StyleSheet.flatten(styles.infoUserChildText)}>
                    {product.user.total_post} Cerita
                  </Text>
                </Item>
              </Col>
            </Grid>
          </CardItem>
        </Card>
      </TouchableOpacity>
    );
  }
}

export default ProductScreenInfoUser;
