import React, { Component } from 'react';
import { ToastAndroid } from 'react-native';
import { Container } from 'native-base';

import NotificationScreenHeader from './NotificationScreenHeader';
import NotificationList from './NotificationList';

import ProgressBar from 'components/_shared/progress-bar/ProgressBar';
import colors from 'styles/_colors';

import { API } from 'services/APIService';

class NotificationScreen extends Component {
  constructor(props) {
    super(props);

    this._onFetchNotification = this._onFetchNotification.bind(this);

    this.state = {
      loadingSpin: false,
      notifications: []
    };
  }

  _onFetchNotification() {
    this.setState({ loadingSpin: true });
    API.get('api/notification?get=all')
      .then(res => {
        this.setState({ loadingSpin: false, notifications: res.data });
      })
      .catch(err => {
        ToastAndroid.show(
          'Error: ' + err.response.data.message,
          ToastAndroid.SHORT
        );
      });
  }

  componentWillMount() {
    this._onFetchNotification();
  }

  render() {
    const { loadingSpin, notifications } = this.state;
    const { navigation } = this.props;

    return (
      <Container style={{ backgroundColor: colors.colorLight }}>
        <NotificationScreenHeader navigation={navigation} />

        {loadingSpin
          ? <ProgressBar />
          : <NotificationList
              navigation={navigation}
              notifications={notifications}
            />}
      </Container>
    );
  }
}

export default NotificationScreen;
