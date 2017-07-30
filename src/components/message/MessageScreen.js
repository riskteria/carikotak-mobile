import React, { Component } from 'react';
import { ToastAndroid, Text } from 'react-native';
import { Container, Thumbnail } from 'native-base';
import { GiftedChat } from 'react-native-gifted-chat';

import MessageScreenHeader from './MessageScreenHeader';

import ProgressBar from 'components/_shared/progress-bar/ProgressBar';
import colors from 'styles/_colors';
import { API } from 'services/APIService';

class MessageScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      channel: {
        id: false,
        messages: []
      },
      loadingSpin: false
    };
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages)
    }));
  }

  _onLoadMessage() {
    const { channel } = this.props.navigation.state.params;
    this.setState({ loadingSpin: true });
    API.get('api/channel/' + channel)
      .then(res => {
        this.setState({ loadingSpin: false, channel: res.data });
      })
      .catch(err => {
        this.setState({ loadingSpin: false });
        ToastAndroid.show(
          'Error: ' + err.response.data.message,
          ToastAndroid.SHORT
        );
      });
  }

  componentWillMount() {
    this._onLoadMessage();
  }

  render() {
    const { channel, loadingSpin } = this.state;
    const { navigation } = this.props;

    return (
      <Container style={{ backgroundColor: colors.colorLight }}>
        <MessageScreenHeader navigation={navigation} channel={channel} />

        <GiftedChat
          renderAvatar={({ messages: { avatar } }) =>
            <Text>
              {JSON.stringify(avatar)}
            </Text>}
          messages={channel.messages}
        />
      </Container>
    );
  }
}

export default MessageScreen;
