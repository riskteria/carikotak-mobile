import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, StyleSheet, ToastAndroid } from 'react-native';
import { Container } from 'native-base';

import ProfileSettingForm from './ProfileSettingForm';
import ProfileSettingHeader from './ProfileSettingHeader';

import styles from './styles';

import { API } from 'services/APIService';

const mapStateToProps = state => {
  return {
    activeUser: state.authSessionHandler.active_user
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

class ProfileSettingScreen extends Component {
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

    this._onChangeText = this._onChangeText.bind(this);
    this._onSavePressed = this._onSavePressed.bind(this);
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

  _onSavePressed() {
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
    const { navigation } = this.props;

    return (
      <Container style={StyleSheet.flatten(styles.mainContainer)}>
        <ProfileSettingHeader
          navigation={navigation}
          _onSavePressed={this._onSavePressed}
        />

        <ScrollView>
          <ProfileSettingForm
            navigation={navigation}
            user={user}
            _onChangeText={this._onChangeText}
          />
        </ScrollView>
      </Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  ProfileSettingScreen
);
