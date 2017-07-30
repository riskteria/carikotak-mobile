import React, { Component } from 'react';
import { TouchableNativeFeedback } from 'react-native';
import { Card, CardItem, Left, Thumbnail, Body, Text } from 'native-base';

import { loadImageUser } from 'services/ImageFetcher';

class NotificationCard extends Component {
  render() {
    const { notification } = this.props;

    return (
      <TouchableNativeFeedback
        onPress={() => null}
        background={TouchableNativeFeedback.Ripple()}
      >
        <Card style={{ elevation: 0, marginBottom: 0, marginTop: 0 }}>
          <CardItem style={{ backgroundColor: 'transparent' }}>
            <Left>
              <Thumbnail
                medium
                source={{ uri: loadImageUser(notification.data.user.avatar) }}
              />
              <Body>
                <Text>
                  <Text style={{ fontSize: 14 }}>
                    {notification.data.user.name + ' '}
                  </Text>
                  <Text style={{ fontSize: 14 }} note>
                    mulai mengikuti anda
                  </Text>
                </Text>
              </Body>
            </Left>
          </CardItem>
        </Card>
      </TouchableNativeFeedback>
    );
  }
}

export default NotificationCard;
