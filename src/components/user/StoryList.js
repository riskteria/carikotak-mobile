import React, { Component } from 'react';
import { FlatList } from 'react-native';

import CardStory from './CardStory';
import EmptyListStory from 'components/_shared/empty-list/EmptyListStory';

class StoryList extends Component {
  constructor(props) {
    super(props);

    this._keyExtractor = this._keyExtractor.bind(this);
  }

  _keyExtractor(item, index) {
    return item.id;
  }

  render() {
    const { navigation, stories, refreshing, _onRefresh } = this.props;

    const _renderItem = ({ item }) =>
      <CardStory story={item} navigation={navigation} />;

    return (
      <FlatList
        ListEmptyComponent={EmptyListStory}
        refreshing={refreshing}
        onRefresh={_onRefresh}
        data={stories}
        keyExtractor={this._keyExtractor}
        renderItem={_renderItem}
      />
    );
  }
}

export default StoryList;
