import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Card, CardItem, Left, Thumbnail, Body, Text } from 'native-base';

import moment from 'moment';

import styles from './styles';
import { loadImageUser } from 'services/ImageFetcher';

class CommentCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { comment, product, navigation } = this.props;
    const { navigate } = navigation;

    return (
      <Card style={StyleSheet.flatten(styles.cardComment)}>
        <CardItem>
          <Left style={{ alignItems: 'flex-start' }}>
            <TouchableOpacity
              onPress={() =>
                navigate('User', { username: comment.user.username })}
            >
              <Thumbnail
                small
                source={{ uri: loadImageUser(comment.user.avatar) }}
              />
            </TouchableOpacity>
            <Body>
              <Text style={StyleSheet.flatten(styles.commentTextWrapper)}>
                <Text
                  style={StyleSheet.flatten(styles.commentUser)}
                  onPress={() =>
                    navigate('User', { username: comment.user.username })}
                >
                  {`${comment.user.name} `}
                </Text>
                <Text note>mengomentari</Text>
                <Text
                  note
                  style={StyleSheet.flatten(styles.commentProduct)}
                  onPress={() => navigate('Product', { slug: product.slug })}
                >
                  {` ${product.name} `}
                </Text>
                <Text note style={StyleSheet.flatten(styles.commentText)}>
                  {`"${comment.comment}"`}
                </Text>
              </Text>
              <Text note style={StyleSheet.flatten(styles.commentDate)}>
                {moment(comment.created_at).format('D MMMM YYYY')}
              </Text>
            </Body>
          </Left>
        </CardItem>
      </Card>
    );
  }
}

export default CommentCard;
