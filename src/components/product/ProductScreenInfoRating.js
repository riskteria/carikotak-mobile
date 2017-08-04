import React, { Component } from 'react';
import { StyleSheet, ToastAndroid } from 'react-native';
import { Content, Body, Card, CardItem, Text } from 'native-base';
import StarRating from 'react-native-star-rating';

import styles from './styles';
import colors from 'styles/_colors';

import { API } from 'services/APIService';

class ProductScreenInfoRating extends Component {
  constructor(props) {
    super(props);

    this._onSelectedStar = this._onSelectedStar.bind(this);
  }

  _onSelectedStar(rating) {
    const { product } = this.props;
    const data = {
      target_type: 'post',
      target_id: product.id,
      rating
    };
    API()
      .post('api/rating', data)
      .then(res => {
        this.props._onRatingGiven({ rating, user_rating: rating });
      })
      .catch(err => {
        ToastAndroid.show(
          `Error: ${JSON.stringify(err.response.data.message)}`,
          ToastAndroid.SHORT
        );
      });
  }

  render() {
    const { product } = this.props;

    return (
      <Content style={StyleSheet.flatten(styles.infoSection)}>
        <Card style={StyleSheet.flatten(styles.infoStarRating)}>
          <CardItem>
            <Body>
              <Body>
                <Text>Berikan rating</Text>
              </Body>
            </Body>
          </CardItem>
          <CardItem>
            <StarRating
              disabled={false}
              selectedStar={this._onSelectedStar}
              maxStars={5}
              rating={product.user_rating}
              starSize={32}
              starStyle={{ marginLeft: 2, marginRight: 2 }}
              starColor={colors.colorTomato}
              halfStarEnabled={true}
              emptyStarColor={colors.colorGrey}
            />
          </CardItem>
        </Card>
      </Content>
    );
  }
}

export default ProductScreenInfoRating;
