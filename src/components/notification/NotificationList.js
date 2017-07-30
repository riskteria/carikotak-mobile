import React, { Component } from 'react';
import { FlatList } from 'react-native';

import NotificationCard from './NotificationCard';
import NotificationCardFavorite from './NotificationCardFavorite';
import NotificationCardFollower from './NotificationCardFollower';

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

        default:
          return (
            <NotificationCard navigation={navigation} notification={item} />
          );
      }
    };

    return (
      <FlatList
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
