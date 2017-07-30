import React, { Component } from 'react';
import { TouchableNativeFeedback } from 'react-native';
import { Card, CardItem, Left, Thumbnail, Body, Text } from 'native-base';

class NotificationCardCommented extends Component {
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
                source={{ uri: 'https://unsplash.it/300x300?random' }}
              />
              <Body>
                <Text>
                  <Text style={{ fontSize: 14 }}>Ovinsyah Al Bayhaqy</Text>
                  <Text style={{ fontSize: 14 }} note>
                    mengomentari kiriman anda
                  </Text>
                </Text>
              </Body>
            </Left>
          </CardItem>
          <Thumbnail small source={{ url: 'https://unsplash.it/300/300' }} />
        </Card>
      </TouchableNativeFeedback>
    );
  }
}

export default NotificationCardCommented;
