import React, { Component } from 'react';
import { ToastAndroid } from 'react-native';
import { Container } from 'native-base';

import MessageListHeader from './MessageListHeader';
import MessageList from './MessageList';

import colors from 'styles/_colors';
import ProgressBar from 'components/_shared/progress-bar/ProgressBar';

import { API } from 'services/APIService';

class MessageScreen extends Component {
  constructor(props) {
    super(props);

    this._fetchChannelList = this._fetchChannelList.bind(this);
    this._onRefresh = this._onRefresh.bind(this);

    this.state = {
      loadingSpin: false,
      refreshing: false,
      channels: []
    };
  }

  _fetchChannelList() {
    this.setState({ loadingSpin: true });
    API()
      .get('api/channel')
      .then(res => {
        this.setState({ loadingSpin: false, channels: res.data });
      })
      .catch(err => {
        this.setState({ loadingSpin: false });
        ToastAndroid.show(
          'Error: ' + err.response.data.message,
          ToastAndroid.SHORT
        );
      });
  }

  _onRefresh() {
    this.setState({ refreshing: true });
    API()
      .get('api/channel')
      .then(res => {
        this.setState({ refreshing: false, channels: res.data });
      })
      .catch(err => {
        this.setState({ refreshing: false });
        ToastAndroid.show(
          'Error: ' + err.response.data.message,
          ToastAndroid.SHORT
        );
      });
  }

  componentWillMount() {
    this._fetchChannelList();
  }

  render() {
    const { loadingSpin, channels, refreshing } = this.state;
    const { navigation } = this.props;

    return (
      <Container style={{ backgroundColor: colors.colorLight }}>
        <MessageListHeader navigation={navigation} />
        {loadingSpin
          ? <ProgressBar />
          : <MessageList
              navigation={navigation}
              channels={channels}
              _onRefresh={this._onRefresh}
              refreshing={refreshing}
            />}
      </Container>
    );
  }
}

export default MessageScreen;
