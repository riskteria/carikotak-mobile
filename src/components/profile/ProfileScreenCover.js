import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import {
  Content,
  Thumbnail,
  Card,
  CardItem,
  Left,
  Body,
  Text,
  Right,
  Button,
  Icon
} from 'native-base';

import { loadImageUser } from 'services/ImageFetcher';

import styles from './styles';

class ProfileScreenCover extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { user } = this.props;

    return (
      <Content style={StyleSheet.flatten(styles.coverBg)}>
        <Image
          style={styles.coverBgImage}
          source={{ uri: 'https://unsplash.it/300/300' }}
        />
        <Card style={StyleSheet.flatten(styles.profileCard)}>
          <CardItem style={StyleSheet.flatten(styles.profileCardItem)}>
            <Left>
              <Thumbnail source={{ uri: loadImageUser(user.avatar) }} />
              <Body>
                <Text>
                  {user.name}
                </Text>
                <Text>
                  <Text note style={StyleSheet.flatten(styles.textNote)}>
                    {`${user.total_followers || 0} Pengikut`}
                  </Text>
                  <Text
                    note
                    style={StyleSheet.flatten(styles.textNoteSeparator)}
                  >
                    {' | '}
                  </Text>
                  <Text note style={StyleSheet.flatten(styles.textNote)}>
                    {`${user.total_followings || 0} Mengikuti`}
                  </Text>
                </Text>
              </Body>
            </Left>
            <Right>
              <Button bordered small light>
                <Text>Ikuti</Text>
              </Button>
            </Right>
          </CardItem>
        </Card>
      </Content>
    );
  }
}

export default ProfileScreenCover;
