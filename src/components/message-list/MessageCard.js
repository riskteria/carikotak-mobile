import React, { Component } from 'react';
import { TouchableNativeFeedback } from 'react-native';
import { Card, CardItem, Left, Thumbnail, Body, Text } from 'native-base';

import { loadImageUser } from 'services/ImageFetcher';

class MessageCard extends Component {
  render() {
    const { navigation, channel } = this.props;
    const { navigate } = navigation;

    return (
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple()}
        onPress={() => navigate('Message')}
      >
        <Card style={{ elevation: 0, marginBottom: 0, marginTop: 0 }}>
          <CardItem style={{ backgroundColor: 'transparent' }}>
            <Left>
              <Thumbnail
                source={{ uri: loadImageUser(channel.communicant.avatar) }}
              />
              <Body>
                <Text>
                  {channel.communicant.name}
                </Text>
                <Text numberOfLines={1} note>
                  {channel.lastMessage.message}
                </Text>
              </Body>
            </Left>
          </CardItem>
        </Card>
      </TouchableNativeFeedback>
    );
  }
}

export default MessageCard;
