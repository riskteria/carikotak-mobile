import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import {
  Card,
  CardItem,
  Body,
  Text,
  Thumbnail,
  Grid,
  Col,
  Item,
  Icon
} from 'native-base';

import styles from './styles';
import { loadImageUser } from 'services/ImageFetcher';

class StoryScreenInfoUser extends Component {
  render() {
    const { story, navigation, activeUser } = this.props;
    const { navigate } = navigation;

    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => {
          if (activeUser.id === story.user.id) {
            navigate('ProfileTab');
          } else {
            navigate('User', { username: story.user.username });
          }
        }}
      >
        <Card style={{ elevation: 0 }}>
          <CardItem>
            <Body>
              <Text>
                Ditulis oleh
                <Text style={StyleSheet.flatten(styles.infoOwner)}>
                  {' ' + story.user.name}
                </Text>
              </Text>
              <Item>
                <Icon
                  name="md-mail"
                  style={StyleSheet.flatten(styles.infoUserChildText)}
                />
                <Text note>
                  {story.user.email}
                </Text>
              </Item>
            </Body>
            <Thumbnail
              small
              circle
              source={{ uri: loadImageUser(story.user.avatar) }}
            />
          </CardItem>
          <CardItem cardBody>
            <Grid>
              <Col>
                <Item style={StyleSheet.flatten(styles.infoUserChild)}>
                  <Icon
                    name="md-book"
                    style={StyleSheet.flatten(styles.infoUserChildText)}
                  />
                  <Text style={StyleSheet.flatten(styles.infoUserChildText)}>
                    {story.user.total_story} Produk
                  </Text>
                </Item>
              </Col>
              <Col>
                <Item style={StyleSheet.flatten(styles.infoUserChild)}>
                  <Icon
                    name="md-card"
                    style={StyleSheet.flatten(styles.infoUserChildText)}
                  />
                  <Text style={StyleSheet.flatten(styles.infoUserChildText)}>
                    {story.user.total_post} Cerita
                  </Text>
                </Item>
              </Col>
            </Grid>
          </CardItem>
        </Card>
      </TouchableOpacity>
    );
  }
}

export default StoryScreenInfoUser;
