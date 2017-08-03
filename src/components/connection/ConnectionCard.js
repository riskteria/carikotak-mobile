import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
  Card,
  CardItem,
  Left,
  Body,
  Thumbnail,
  Text,
  Right,
  Button
} from 'native-base';

import { loadImageUser } from 'services/ImageFetcher';

import styles from './styles';

class ConnectionCard extends Component {
  constructor(props) {
    super(props);

    this._onRecommendPressed = this._onRecommendPressed.bind(this);
  }

  _onRecommendPressed() {
    //
  }

  render() {
    const { connection, navigation } = this.props;

    return (
      <Card style={StyleSheet.flatten(styles.cardContainer)}>
        <CardItem>
          <Left>
            <Thumbnail
              small
              source={{ uri: loadImageUser(connection.avatar) }}
            />
            <Body>
              <Text>
                {connection.name}
              </Text>
            </Body>
          </Left>
          <Right>
            <Button small bordered onPress={() => this._onRecommendPressed()}>
              <Text>Sarankan</Text>
            </Button>
          </Right>
        </CardItem>
      </Card>
    );
  }
}

export default ConnectionCard;
