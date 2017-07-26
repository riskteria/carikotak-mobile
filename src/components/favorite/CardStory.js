import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Thumbnail } from 'native-base';

import { loadImageUser } from 'services/ImageFetcher';
import styles from './styles';

class CardStory extends Component {
  render() {
    const { story } = this.props;

    return (
      <View style={styles.cardContainer}>
        <View style={styles.cardStoryHeader}>
          <Thumbnail
            circle
            small
            source={{ uri: loadImageUser(story.user.avatar) }}
          />
          <Text style={styles.cardStoryHeaderName}>
            {story.user.name}
          </Text>
        </View>
        <View style={styles.cardStoryFooter}>
          <Text numberOfLines={4} style={styles.cardStoryTitle}>
            {story.title}
          </Text>
        </View>
      </View>
    );
  }
}

export default CardStory;
