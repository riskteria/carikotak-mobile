import React, { Component } from 'react';
import { ScrollView, ToastAndroid } from 'react-native';
import { Container } from 'native-base';

import UserScreenHeader from './UserScreenHeader';
import UserScreenCover from './UserScreenCover';

import ProgressBar from 'components/_shared/progress-bar/ProgressBar';
import styles from './styles';

import { API } from 'services/APIService';

class UserScreen extends Component {
  constructor(props) {
    super(props);

    this._onFetchProfileData = this._onFetchProfileData.bind(this);

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
        <UserScreenCover navigation={navigation} />
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
