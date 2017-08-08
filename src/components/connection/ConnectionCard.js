import React, { Component } from 'react';
import { StyleSheet, ToastAndroid } from 'react-native';
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

import { API_URL } from 'react-native-dotenv';
import { loadImageUser } from 'services/ImageFetcher';
import { API } from 'services/APIService';

import styles from './styles';

class ConnectionCard extends Component {
  constructor(props) {
    super(props);

    this._onRecommendPressed = this._onRecommendPressed.bind(this);
  }

  _onRecommendPressed() {
    const { navigation, connection } = this.props;
    const { navigate } = navigation;
    const { type, slug } = navigation.state.params;

    const url = `${API_URL}/${type}/${slug}`;
    const text = `Hey, ${connection.name} coba lihat ini! ${url}`;

    const message = {
      user_id: connection.id,
      text
    };

    API()
      .post('api/message', message)
      .then(res => {
        navigate('Message', { channel: res.data.message.channel.id });
      })
      .catch(err => {
        ToastAndroid.show(
          `Error: ${err.response.data.message}`,
          ToastAndroid.SHORT
        );
      });
  }

  render() {
    const { connection } = this.props;

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
