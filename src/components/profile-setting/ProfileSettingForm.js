import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
  Text,
  Content,
  Item,
  Icon,
  Input,
  Button,
  Thumbnail
} from 'native-base';

import styles from './styles';
import colors from 'styles/_colors';

import { loadImageUser } from 'services/ImageFetcher';

class ProfileSettingForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { user, _onChangeText } = this.props;

    return (
      <Content style={{ padding: 16, margin: 0 }}>
        <Item style={StyleSheet.flatten(styles.inputAvatar)}>
          <Thumbnail circular source={{ uri: loadImageUser(user.avatar) }} />
          <Button transparent dark>
            <Text>Ubah Avatar</Text>
          </Button>
        </Item>

        <Item disabled style={StyleSheet.flatten(styles.inputItem)}>
          <Icon
            name="md-finger-print"
            style={StyleSheet.flatten(styles.inputIcon)}
          />
          <Input
            placeholderTextColor={colors.colorGreyLight}
            disabled
            placeholder="username"
            defaultValue={user.username}
            style={StyleSheet.flatten(styles.inputTextDisabled)}
          />
        </Item>

        <Item style={StyleSheet.flatten(styles.inputItem)}>
          <Icon name="md-person" style={StyleSheet.flatten(styles.inputIcon)} />
          <Input
            placeholderTextColor={colors.colorGreyLight}
            onChangeText={value => {
              _onChangeText('name', value);
            }}
            placeholder="Nama lengkap"
            defaultValue={user.name}
            style={StyleSheet.flatten(styles.inputText)}
          />
        </Item>

        <Item style={StyleSheet.flatten(styles.inputItem)}>
          <Icon
            name="md-phone-portrait"
            style={StyleSheet.flatten(styles.inputIcon)}
          />
          <Input
            placeholderTextColor={colors.colorGreyLight}
            onChangeText={value => {
              _onChangeText('phone', value);
            }}
            placeholder="Handphone"
            defaultValue={user.phone}
            style={StyleSheet.flatten(styles.inputText)}
          />
        </Item>

        <Item style={StyleSheet.flatten(styles.inputItem)}>
          <Icon name="md-mail" style={StyleSheet.flatten(styles.inputIcon)} />
          <Input
            placeholderTextColor={colors.colorGreyLight}
            disabled
            placeholder="Email"
            defaultValue={user.email}
            style={StyleSheet.flatten(styles.inputTextDisabled)}
          />
        </Item>

        <Item style={StyleSheet.flatten(styles.inputItem)}>
          <Icon name="md-quote" style={StyleSheet.flatten(styles.inputIcon)} />
          <Input
            placeholderTextColor={colors.colorGreyLight}
            onChangeText={value => {
              _onChangeText('description', value);
            }}
            multiline={true}
            numberOfLines={2}
            placeholder="Bio"
            defaultValue={user.description}
            style={StyleSheet.flatten(styles.inputTextDisabled)}
          />
        </Item>
      </Content>
    );
  }
}

export default ProfileSettingForm;
