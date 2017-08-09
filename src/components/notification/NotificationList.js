import React, { Component } from 'react';
import { FlatList } from 'react-native';

import NotificationCardCommented from './NotificationCardCommented';
import NotificationCardFavorite from './NotificationCardFavorite';
import NotificationCardFollower from './NotificationCardFollower';
import NotificationCardNewProduct from './NotificationCardNewProduct';
import NotificationCardNewStory from './NotificationCardNewStory';

import EmptyListNotification from 'components/_shared/empty-list/EmptyListNotification';

class NotificationList extends Component {
  constructor(props) {
    super(props);

    this._keyExtractor = this._keyExtractor.bind(this);
  }

  _keyExtractor(item, index) {
    return item.id;
  }

  render() {
    const { navigation, notifications, refreshing, _onRefresh } = this.props;

    const _renderItem = ({ item }) => {
      switch (item.type) {
        case 'App\\Notifications\\NewFollower':
          return (
            <NotificationCardFollower
              navigation={navigation}
              notification={item}
            />
          );

        case 'App\\Notifications\\AddedToFavorite':
          return (
            <NotificationCardFavorite
              navigation={navigation}
              notification={item}
            />
          );

        case 'App\\Notifications\\PostCommented':
          return (
            <NotificationCardCommented
              navigation={navigation}
              notification={item}
            />
          );

        case 'App\\Notifications\\PostedNewProduct':
          return (
            <NotificationCardNewProduct
              navigation={navigation}
              notification={item}
            />
          );

        case 'App\\Notifications\\PostedNewStory':
          return (
            <NotificationCardNewStory
              navigation={navigation}
              notification={item}
            />
          );

        default:
          return null;
      }
    };

    return (
      <FlatList
        ListEmptyComponent={EmptyListNotification}
        data={notifications}
        refreshing={refreshing}
        onRefresh={_onRefresh}
        keyExtractor={this._keyExtractor}
        renderItem={_renderItem}
      />
    );
  }
}

export default NotificationList;
