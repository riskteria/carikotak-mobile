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
    const { user, modalFollowType, _onUserCardClicked } = this.props;

    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => _onUserCardClicked(user.username, modalFollowType)}
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
