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
import FollowModal from './FollowModal';
import { loadImageUser } from 'services/ImageFetcher';

import styles from './styles';

class ProfileScreenCover extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalInfoVisible: false,
      modalFollowVisible: false,
      modalFollowType: null
    };

    this._onModalInfoToggled = this._onModalInfoToggled.bind(this);
    this._onModalFollowToggled = this._onModalFollowToggled.bind(this);
  }

  _onModalFollowToggled(type) {
    this.setState({
      modalFollowType: type,
      modalFollowVisible: !this.state.modalFollowVisible
    });
  }

  _onModalInfoToggled() {
    this.setState({ modalInfoVisible: !this.state.modalInfoVisible });
  }

  render() {
    const {
      modalInfoVisible,
      modalFollowType,
      modalFollowVisible
    } = this.state;

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
                  <Text
                    onPress={() => this._onModalFollowToggled('follower')}
                    note
                    style={StyleSheet.flatten(styles.textNote)}
                  >
                    {`${user.total_followers || 0} Pengikut`}
                  </Text>
                  <Text
                    note
                    style={StyleSheet.flatten(styles.textNoteSeparator)}
                  >
                    {' | '}
                  </Text>
                  <Text
                    onPress={() => this._onModalFollowToggled('following')}
                    note
                    style={StyleSheet.flatten(styles.textNote)}
                  >
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

        <FollowModal
          user={user}
          navigation={navigation}
          modalFollowType={modalFollowType}
          modalFollowVisible={modalFollowVisible}
          _onModalFollowToggled={this._onModalFollowToggled}
        />
      </Content>
    );
  }
}

export default ProfileScreenCover;
