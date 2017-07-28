import React, { Component } from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Thumbnail, Card, CardItem, Left, Body, H3, Text } from 'native-base';

import moment from 'moment';

import { loadImageUser, loadImageProduct } from 'services/ImageFetcher';
import styles from './styles';

class CardStory extends Component {
  render() {
    const { story, navigation } = this.props;
    const { navigate } = navigation;

    return (
      <Card style={StyleSheet.flatten(styles.cardContainer)}>
        <CardItem>
          <Left>
            <Thumbnail
              small
              source={{ uri: loadImageUser(story.user.avatar) }}
            />
            <Body>
              <Text>
                {story.user.name}
              </Text>
              <Text note>
                {moment(story.updated_at).fromNow()}
              </Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <TouchableOpacity
            style={{ flex: 1 }}
            activeOpacity={0.9}
            onPress={() => navigate('Story', { slug: story.slug })}
          >
            <Image
              source={{ uri: loadImageProduct(story.image, 'medium') }}
              style={{ height: 250, width: null, flex: 1 }}
            />
          </TouchableOpacity>
        </CardItem>
        <CardItem>
          <TouchableOpacity
            style={{ flex: 1 }}
            activeOpacity={0.9}
            onPress={() => navigate('Story', { slug: story.slug })}
          >
            <H3 numberOfLines={4}>
              {story.title}
            </H3>
          </TouchableOpacity>
        </CardItem>
      </Card>
    );
  }
}

export default CardStory;
