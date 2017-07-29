import React, { Component } from 'react';
import { TouchableNativeFeedback } from 'react-native';
import {
  Card,
  CardItem,
  Left,
  Thumbnail,
  Body,
  Text,
  Right,
  Button
} from 'native-base';

import colors from 'styles/_colors';

class NotificationCard extends Component {
  render() {
    const navigate = this.props.navigate;

    return (
      <TouchableNativeFeedback
        onPress={() => navigate('Product')}
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
                    {' '}mulai mengikuti anda
                  </Text>
                </Text>
              </Body>
            </Left>
            <Right style={{ flex: 0 }}>
              <Button
                light
                small
                style={{ paddingLeft: 8, paddingRight: 8, borderRadius: 5 }}
              >
                <Text>Ikuti</Text>
              </Button>
            </Right>
          </CardItem>
        </Card>
      </TouchableNativeFeedback>
    );
  }
}

export default NotificationCard;
