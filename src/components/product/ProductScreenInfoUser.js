import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
  Content,
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
    const { product } = this.props;

    return (
      <Content>
        <Card style={{ elevation: 0 }}>
          <CardItem>
            <Body>
              <Text>
                Produk kotak ini dijual oleh
                <Text style={StyleSheet.flatten(styles.infoOwner)}>
                  {' ' + product.user.name}
                </Text>
              </Text>
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
      </Content>
    );
  }
}

export default ProductScreenInfoUser;
