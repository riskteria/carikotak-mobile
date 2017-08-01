import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Card, CardItem, Left, Thumbnail, Body, Text } from 'native-base';

import moment from 'moment';

import styles from './styles';
import { loadImageUser } from 'services/ImageFetcher';

class CommentCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { comment } = this.props;

    return (
      <Card style={StyleSheet.flatten(styles.cardComment)}>
        <CardItem>
          <Left style={{ alignItems: 'flex-start' }}>
            <Thumbnail
              small
              source={{ uri: loadImageUser(comment.user.avatar) }}
            />
            <Body>
              <Text>
                <Text style={StyleSheet.flatten(styles.commentUser)}>
                  {`${comment.user.name} `}
                </Text>
                <Text note style={StyleSheet.flatten(styles.commentText)}>
                  {comment.comment}
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
