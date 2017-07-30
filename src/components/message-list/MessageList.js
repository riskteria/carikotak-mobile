import React, { Component } from 'react';
import { FlatList } from 'react-native';

import MessageCard from './MessageCard';

class MessageList extends Component {
  constructor(props) {
    super(props);

    this._keyExtractor = this._keyExtractor.bind(this);
  }

  _keyExtractor(item, index) {
    return item.id;
  }

  render() {
    const { navigation, channels, _onRefresh, refreshing } = this.props;

    const _renderItem = ({ item }) =>
      <MessageCard channel={item} navigation={navigation} />;

    return (
      <FlatList
        onRefresh={_onRefresh}
        refreshing={refreshing}
        data={channels}
        numColumns={1}
        keyExtractor={this._keyExtractor}
        renderItem={_renderItem}
      />
    );
  }
}

export default MessageList;
