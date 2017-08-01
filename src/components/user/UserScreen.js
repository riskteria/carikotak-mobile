import React, { Component } from 'react';
import { ScrollView, ToastAndroid } from 'react-native';
import { Container } from 'native-base';

import UserScreenHeader from './UserScreenHeader';
import UserScreenCover from './UserScreenCover';
import UserScreenTabContent from './UserScreenTabContent';

import ProgressBar from 'components/_shared/progress-bar/ProgressBar';
import styles from './styles';

import { API } from 'services/APIService';

class UserScreen extends Component {
  constructor(props) {
    super(props);

    this._onFetchProfileData = this._onFetchProfileData.bind(this);
    this._onFollowPressed = this._onFollowPressed.bind(this);
    this._onUnFollowPressed = this._onUnFollowPressed.bind(this);

    this.state = {
      user: false,
      loadingSpin: false
    };
  }

  _onFetchProfileData() {
    const { username } = this.props.navigation.state.params;

    this.setState({ loadingSpin: true });
    API()
      .get('api/user/' + username)
      .then(res => {
        this.setState({ loadingSpin: false, user: res.data });
      })
      .catch(err => {
        this.setState({ loadingSpin: false });
        ToastAndroid.show(
          'Error ' + err.response.data.message,
          ToastAndroid.SHORT
        );
      });
  }

  _onUnFollowPressed() {
    const { user } = this.state;

    API()
      .delete(`api/follow/${user.id}`)
      .then(() => {
        this.setState({
          user: Object.assign({}, user, { isFollowedByMe: false })
        });
        ToastAndroid.show(
          `Berhenti mengikuti ${user.name}`,
          ToastAndroid.SHORT
        );
      })
      .catch(err => {
        ToastAndroid.show(
          `Error: ${err.response.data.message}`,
          ToastAndroid.SHORT
        );
      });
  }

  _onFollowPressed() {
    const { user } = this.state;

    API()
      .put(`api/follow/${user.id}`)
      .then(() => {
        this.setState({
          user: Object.assign({}, this.state.user, { isFollowedByMe: true })
        });
        ToastAndroid.show(
          `Mulai mengikuti ${this.state.user.name}`,
          ToastAndroid.SHORT
        );
      })
      .catch(err => {
        ToastAndroid.show(
          `Error: ${err.response.data.message}`,
          ToastAndroid.SHORT
        );
      });
  }

  componentWillMount() {
    this._onFetchProfileData();
  }

  componentDidUpdate() {
    //
  }

  render() {
    const { loadingSpin, user } = this.state;
    const { navigation } = this.props;

    const ProfileInfo = () =>
      <ScrollView style={styles.parentView}>
        <UserScreenCover
          navigation={navigation}
          user={user}
          _onFollowPressed={this._onFollowPressed}
          _onUnFollowPressed={this._onUnFollowPressed}
        />
        <UserScreenTabContent navigation={navigation} user={user} />
      </ScrollView>;

    return (
      <Container>
        <UserScreenHeader navigation={navigation} user={user} />
        {loadingSpin ? <ProgressBar /> : <ProfileInfo />}
      </Container>
    );
  }
}

export default UserScreen;
