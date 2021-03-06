import React, { Component } from 'react';
import { TouchableNativeFeedback } from 'react-native';
import { Card, CardItem, Left, Thumbnail, Body, Text } from 'native-base';
import moment from 'moment';

class NotificationCardNewStory extends Component {
  render() {
    const { notification, navigation } = this.props;

    return (
      <TouchableNativeFeedback
        onPress={() =>
          navigation.navigate('Story', { slug: notification.data.story.slug })}
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
                  <Text style={{ fontSize: 14 }}>
                    {notification.data.user.name}
                  </Text>
                  <Text style={{ fontSize: 14 }} note>
                    &nbsp;menulis sebuah cerita baru
                  </Text>
                </Text>
                <Text note style={{ fontSize: 10 }}>
                  {moment(
                    notification.created_at,
                    'YYYY-MM-DD hh:ii:ss'
                  ).format('DD MMMM YYYY')}
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

export default NotificationCardNewStory;
