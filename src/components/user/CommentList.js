import React, { Component } from 'react';
import { FlatList } from 'react-native';

import CommentCard from './CommentCard';

class CommentList extends Component {
  constructor(props) {
    super(props);

    this._keyExtractor = this._keyExtractor.bind(this);
  }

  _keyExtractor(item, index) {
    return index;
  }

  render() {
    const { navigation, comments, refreshing, _onRefresh } = this.props;

    const _renderItem = ({ item }) =>
      item.comment.map((comment, index) =>
        <CommentCard
          comment={comment}
          product={item}
          navigation={navigation}
          key={index}
        />
      );

    return (
      <FlatList
        data={comments}
        refreshing={refreshing}
        onRefresh={_onRefresh}
        keyExtractor={this._keyExtractor}
        renderItem={_renderItem}
      />
    );
  }
}

export default CommentList;
