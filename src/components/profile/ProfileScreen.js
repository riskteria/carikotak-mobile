import React, { Component } from 'react';
import { ScrollView, ToastAndroid, StatusBar } from 'react-native';
import { Container } from 'native-base';

import ProfileScreenHeader from './ProfileScreenHeader';
import ProfileScreenCover from './ProfileScreenCover';

import ProgressBar from 'components/_shared/progress-bar/ProgressBar';
import styles from './styles';

import { API, test } from 'services/APIService';

class ProfileScreen extends Component {
  constructor(props) {
    super(props);

    this._onFetchProfileData = this._onFetchProfileData.bind(this);

    this.state = {
      user: false,
      loadingSpin: false
    };
  }

  _onFetchProfileData() {
    this.setState({ loadingSpin: true });
    API.get('api/me')
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
        <ProfileScreenCover navigation={navigation} />
      </ScrollView>;

    return (
      <Container>
        <StatusBar barStyle="light-content" backgroundColor="transparent" />
        <ProfileScreenHeader navigation={navigation} user={user} />
        {loadingSpin ? <ProgressBar /> : <ProfileInfo />}
      </Container>
    );
  }
}

export default ProfileScreen;
