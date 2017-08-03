import React, { Component } from 'react';
import { FlatList } from 'react-native';

import ConnectionCard from './ConnectionCard';

class ConnectionList extends Component {
  constructor(props) {
    super(props);

    this._keyExtractor = this._keyExtractor.bind(this);
  }

  _keyExtractor(item, index) {
    return index;
  }

  render() {
    const { connections, navigation, refreshing, _onRefresh } = this.props;

    const _renderItem = ({ item }) =>
      <ConnectionCard connection={item} navigation={navigation} />;

    return (
      <FlatList
        data={connections}
        keyExtractor={this._keyExtractor}
        renderItem={_renderItem}
        refreshing={refreshing}
        onRefresh={_onRefresh}
      />
    );
  }
}

export default ConnectionList;
