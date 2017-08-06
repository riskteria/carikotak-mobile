import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Card, CardItem, Body, Left, Text, Thumbnail } from 'native-base';

import { loadImageUser } from 'services/ImageFetcher';
import styles from './styles';

class FollowCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigation, user } = this.props;
    const { navigate } = navigation;

    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => navigate('User', { username: user.username })}
      >
        <Card style={StyleSheet.flatten(styles.userCardContainer)}>
          <CardItem>
            <Left>
              <Thumbnail small source={{ uri: loadImageUser(user.avatar) }} />
              <Body>
                <Text>
                  {user.username}
                </Text>
                <Text note style={StyleSheet.flatten(styles.userCardNote)}>
                  {user.name}
                </Text>
              </Body>
            </Left>
          </CardItem>
        </Card>
      </TouchableOpacity>
    );
  }
}

export default FollowCard;
