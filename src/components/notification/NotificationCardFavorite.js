import React, { Component } from 'react';
import { TouchableNativeFeedback } from 'react-native';
import { Card, CardItem, Left, Thumbnail, Body, Text } from 'native-base';
import moment from 'moment';
import { loadImageUser, loadImageProduct } from 'services/ImageFetcher';

class NotificationCard extends Component {
  constructor(props) {
    super(props);

    this._navigateToPost = this._navigateToPost.bind(this);
  }

  _navigateToPost() {
    const { notification, navigation } = this.props;
    const { post } = notification.data;
    const { navigate } = navigation;

    post.hasOwnProperty('title')
      ? navigate('Story', { slug: post.slug })
      : navigate('Product', { slug: post.slug });
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
            <Left style={{ paddingRight: 8 }}>
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
                    memfavoritkan kiriman anda &nbsp;
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
            <Thumbnail
              small
              source={{
                uri: loadImageProduct(
                  notification.data.hasOwnProperty('post')
                    ? notification.data.post.image
                    : notification.data.product.image,
                  'medium'
                )
              }}
            />
          </CardItem>
        </Card>
      </TouchableNativeFeedback>
    );
  }
}

export default NotificationCard;
