import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Card, CardItem, Left, Thumbnail, Body, Text } from 'native-base';

import styles from './styles';

class CommentCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card style={StyleSheet.flatten(styles.cardComment)}>
        <CardItem>
          <Left style={{ alignItems: 'flex-start' }}>
            <Thumbnail small source={{ uri: 'https://unsplash.it/300/300' }} />
            <Body>
              <Text>
                <Text style={StyleSheet.flatten(styles.commentUser)}>
                  Ovinsyah{' '}
                </Text>
                <Text note style={StyleSheet.flatten(styles.commentText)}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Exercitationem ipsum enim excepturi assumenda a.
                </Text>
              </Text>
              <Text note>11 April</Text>
            </Body>
          </Left>
        </CardItem>
      </Card>
    );
  }
}

export default CommentCard;
