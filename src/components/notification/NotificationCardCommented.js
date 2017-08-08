import React, { Component } from 'react';
import { TouchableNativeFeedback } from 'react-native';
import { Card, CardItem, Left, Thumbnail, Body, Text } from 'native-base';

import { loadImageUser } from 'services/ImageFetcher';

class NotificationCardCommented extends Component {
  constructor(props) {
    super(props);

    this._navigateToPost = this._navigateToPost.bind(this);
  }

  _navigateToPost() {
    const { notification, navigation } = this.props;
    const { navigate } = navigation;
    const { content } = notification.data.comment;

    if (content.hasOwnProperty('title')) {
      navigate('Story', { slug: content.slug });
    } else {
      navigate('Product', { slug: content.slug });
    }
  }

  render() {
    const { notification } = this.props;

    return (
      <TouchableNativeFeedback
        onPress={() => this._navigateToPost()}
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
                    {notification.data.user.name}
                  </Text>
                  <Text style={{ fontSize: 14 }} note>
                    &nbsp;mengomentari kiriman anda
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
