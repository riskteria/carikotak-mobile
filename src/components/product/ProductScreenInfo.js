import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Content,
  Text,
  Card,
  CardItem,
  Body,
  Thumbnail,
  Grid,
  Col,
  Icon,
  Item
} from 'native-base';
import StarRating from 'react-native-star-rating';
import HTMLView from 'react-native-htmlview';

import htmlStyleSheet from './htmlStyleSheet';
import styles from './styles';
import colors from 'styles/_colors';

import { loadImageUser } from 'services/ImageFetcher';

class ProductScreenInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { product } = this.props;

    return (
      <View>
        <Content style={StyleSheet.flatten(styles.infoSection)}>
          <View style={StyleSheet.flatten(styles.infoContent)}>
            <Text style={StyleSheet.flatten(styles.infoName)}>
              {product.name}
            </Text>
          </View>
          <View style={StyleSheet.flatten(styles.infoContent)}>
            <Text style={StyleSheet.flatten(styles.infoPrice)}>
              Rp.{product.price}
            </Text>
          </View>
          <View style={StyleSheet.flatten(styles.infoContentRating)}>
            <StarRating
              disabled={false}
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
        </Content>

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
                    <Icon name="md-book" />
                    <Text>
                      {product.user.total_product} Produk
                    </Text>
                  </Item>
                </Col>
                <Col>
                  <Item style={StyleSheet.flatten(styles.infoUserChild)}>
                    <Icon name="md-card" />
                    <Text>
                      {product.user.total_post} Cerita
                    </Text>
                  </Item>
                </Col>
              </Grid>
            </CardItem>
          </Card>
        </Content>

        <Content style={StyleSheet.flatten(styles.infoSection)}>
          <Content>
            <HTMLView value={product.description} stylesheet={htmlStyleSheet} />
          </Content>
        </Content>
      </View>
    );
  }
}

export default ProductScreenInfo;
