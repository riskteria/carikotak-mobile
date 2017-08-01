import React, { Component } from 'react';
import { ToastAndroid } from 'react-native';
import { connect } from 'react-redux';
import {
  Text,
  Content,
  Item,
  Icon,
  Input,
  Button,
  Thumbnail
} from 'native-base';

import { API } from 'services/APIService';

const mapStateToProps = state => {
  return {
    activeUser: state.authSessionHandler.active_user
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

class ProfileSettingForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        username: '',
        name: '',
        email: '',
        phone: '',
        description: ''
      }
    };

    this._onSavePresses = this._onSavePresses.bind(this);
  }

  _onChangeText(propertyName, value) {
    switch (propertyName) {
      case 'name':
        this.setState({
          user: Object.assign({}, this.state.user, { name: value })
        });
        break;
      case 'email':
        this.setState({
          user: Object.assign({}, this.state.user, { email: value })
        });
        break;
      case 'phone':
        this.setState({
          user: Object.assign({}, this.state.user, { phone: value })
        });
        break;
      case 'description':
        this.setState({
          user: Object.assign({}, this.state.user, { description: value })
        });
        break;
    }
  }

  _onSavePresses() {
    const { user } = this.state;
    API()
      .put('api/me/update-profile', user)
      .then(() => {
        ToastAndroid.show('Profil Berhasil Diperbaharui', ToastAndroid.SHORT);
      })
      .catch(err => {
        ToastAndroid.show(
          `Error: ${JSON.stringify(err.response.data.message)}`,
          ToastAndroid.SHORT
        );
      });
  }

  componentWillMount() {
    this.setState({ user: this.props.activeUser });
  }

  render() {
    const { user } = this.state;

    return (
      <Content style={{ padding: 16, margin: 0 }}>
        <Item>
          <Thumbnail circular source={{ uri: 'https://unsplash.it/300/300' }} />
          <Button transparent dark>
            <Text>Ubah Avatar</Text>
          </Button>
        </Item>
        <Item disabled>
          <Icon name="md-finger-print" />
          <Input disabled placeholder="username" defaultValue={user.username} />
        </Item>
        <Item ic>
          <Icon name="md-person" />
          <Input
            onChangeText={this._onChangeText.bind(this, 'name')}
            placeholder="Nama lengkap"
            defaultValue={user.name}
          />
        </Item>
        <Item>
          <Icon name="md-phone-portrait" />
          <Input
            onChangeText={this._onChangeText.bind(this, 'phone')}
            placeholder="Handphone"
            defaultValue={user.phone}
          />
        </Item>
        <Item>
          <Icon name="md-mail" />
          <Input
            onChangeText={this._onChangeText.bind(this, 'email')}
            placeholder="Email"
            defaultValue={user.email}
          />
        </Item>
        <Item>
          <Icon name="md-quote" />
          <Input
            onChangeText={this._onChangeText.bind(this, 'description')}
            multiline={true}
            numberOfLines={2}
            placeholder="Bio"
            defaultValue={user.description}
          />
        </Item>
        <Button block onPress={() => this._onSavePresses()}>
          <Text>Simpan Perubahan</Text>
        </Button>
      </Content>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileSettingForm);
