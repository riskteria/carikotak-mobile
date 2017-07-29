import React, { Component } from 'react';
import { TouchableNativeFeedback } from 'react-native';
import { Card, CardItem, Left, Thumbnail, Body, Text } from 'native-base';

class MessageCard extends Component {
  render() {
    const navigate = this.props.navigate;

    return (
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple()}
        onPress={() => navigate('Message')}
      >
        <Card style={{ elevation: 0, marginBottom: 0, marginTop: 0 }}>
          <CardItem style={{ backgroundColor: 'transparent' }}>
            <Left>
              <Thumbnail
                source={{ uri: 'https://unsplash.it/300x300?random' }}
              />
              <Body>
                <Text>Ovinsyah Al Bayhaqy</Text>
                <Text numberOfLines={1} note>
                  Halo gan, produknya masih ada?
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
