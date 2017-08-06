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
  Icon,
  Button
} from 'native-base';

import UserScreenInfoModal from './UserScreenInfoModal';
import { loadImageUser } from 'services/ImageFetcher';

import colors from 'styles/_colors';
import styles from './styles';

class UserScreenCover extends Component {
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
    const { user, _onFollowPressed, _onUnFollowPressed } = this.props;

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
          </CardItem>
          <CardItem style={StyleSheet.flatten(styles.profileCardItem)}>
            <Left>
              {user.isFollowedByMe
                ? <Button small light onPress={() => _onUnFollowPressed()}>
                    <Text style={{ color: colors.colorAccent }}>Diikuti</Text>
                  </Button>
                : <Button
                    bordered
                    small
                    light
                    onPress={() => _onFollowPressed()}
                  >
                    <Text>Ikuti</Text>
                  </Button>}

              <Button
                transparent
                small
                light
                onPress={() => this._onModalInfoToggled()}
                style={StyleSheet.flatten(styles.buttonInfo)}
              >
                <Icon name="ios-information-circle-outline" />
              </Button>
            </Left>
          </CardItem>
        </Card>

        <UserScreenInfoModal
          user={user}
          modalInfoVisible={modalInfoVisible}
          _onModalInfoToggled={this._onModalInfoToggled}
        />
      </Content>
    );
  }
}

export default UserScreenCover;
