import React, { Component } from 'react';
import { FlatList } from 'react-native';

import FollowCard from './FollowCard';

class FollowList extends Component {
  constructor(props) {
    super(props);

    this._keyExtractor = this._keyExtractor.bind(this);
  }

  _keyExtractor(item, index) {
    return item.id;
  }

  render() {
    const {
      users,
      navigation,
      modalFollowType,
      _onUserCardClicked
    } = this.props;

    const _renderItem = ({ item }) =>
      <FollowCard
        navigation={navigation}
        user={item}
        modalFollowType={modalFollowType}
        _onUserCardClicked={_onUserCardClicked}
      />;

    return (
      <FlatList
        data={users}
        keyExtractor={this._keyExtractor}
        renderItem={_renderItem}
      />
    );
  }
}

export default FollowList;
