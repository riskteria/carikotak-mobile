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
  Button,
  Icon
} from 'native-base';

import ProfileScreenInfoModal from './ProfileScreenInfoModal';
import { loadImageUser } from 'services/ImageFetcher';

import styles from './styles';

class ProfileScreenCover extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalInfoVisible: false
    };

    this._onModalInfoToggled = this._onModalInfoToggled.bind(this);
  }

  _onModalInfoToggled() {
    this.setState({ modalInfoVisible: !this.state.modalInfoVisible });
  }

  render() {
    const { modalInfoVisible } = this.state;
    const { user, navigation } = this.props;
    const { navigate } = navigation;

    return (
      <Content style={StyleSheet.flatten(styles.coverBg)}>
        <Image
          style={styles.coverBgImage}
          source={{ uri: 'https://unsplash.it/300/300' }}
        />
        <Card style={StyleSheet.flatten(styles.profileCard)}>
          <CardItem style={StyleSheet.flatten(styles.profileCardItem)}>
            <Left>
              <Thumbnail small source={{ uri: loadImageUser(user.avatar) }} />
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
          </CardItem>

          <CardItem style={StyleSheet.flatten(styles.profileCardItem)}>
            <Left>
              <Button
                bordered
                small
                light
                onPress={() => navigate('ProfileSetting')}
              >
                <Text>Edit</Text>
              </Button>
              <Button
                transparent
                small
                light
                onPress={() => {
                  this._onModalInfoToggled();
                }}
                style={StyleSheet.flatten(styles.buttonInfo)}
              >
                <Icon name="ios-information-circle-outline" />
              </Button>
            </Left>
          </CardItem>
        </Card>

        <ProfileScreenInfoModal
          user={user}
          modalInfoVisible={modalInfoVisible}
          _onModalInfoToggled={this._onModalInfoToggled}
        />
      </Content>
    );
  }
}

export default ProfileScreenCover;
