import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import {
  Icon,
  Button,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Body
} from 'native-base';

import { loadImageUser, loadImageProduct } from 'services/ImageFetcher';
import colors from 'styles/_colors';
import styles from './styles';

class CardStory extends Component {
  render() {
    const { story } = this.props;

    return (
      <Card style={StyleSheet.flatten(styles.cardStoryContainer)}>
        <Image
          style={StyleSheet.flatten(styles.cardStoryImageBackground)}
          source={{ uri: loadImageProduct(story.image, 'medium') }}
        />
        <CardItem style={{ backgroundColor: colors.colorTransparent }}>
          <Left>
            <Thumbnail
              small
              circle
              source={{ uri: loadImageUser(story.user.avatar, 'small') }}
            />
            <Body>
              <Text style={StyleSheet.flatten(styles.cardStoryHeaderName)}>
                {story.user.name}
              </Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem style={{ backgroundColor: colors.colorTransparent, flex: 1 }}>
          <Text
            numberOfLines={3}
            style={StyleSheet.flatten(styles.cardStoryTitle)}
          >
            {story.title}
          </Text>
        </CardItem>
        <CardItem
          style={{
            backgroundColor: 'transparent',
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}
        >
          <Button
            light
            transparent
            small
            style={{ paddingLeft: 0, paddingRight: 0 }}
          >
            <Icon
              name="ios-heart"
              style={{
                color: story.favorited ? colors.colorHeart : colors.colorLight
              }}
            />
            <Text style={{ fontSize: 12 }}>
              {story.total_favoriters}
            </Text>
          </Button>
          <Button
            light
            transparent
            small
            style={{ paddingLeft: 0, paddingRight: 0 }}
          >
            <Text style={{ fontSize: 12 }}>
              {story.total_comments + ' Komentar'}
            </Text>
          </Button>
        </CardItem>
      </Card>
    );
  }
}

export default CardStory;
