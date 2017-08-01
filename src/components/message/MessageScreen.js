import React, { Component } from 'react';
import { ToastAndroid } from 'react-native';
import { Container } from 'native-base';
import { GiftedChat } from 'react-native-gifted-chat';

import MessageScreenHeader from './MessageScreenHeader';
import colors from 'styles/_colors';
import { API } from 'services/APIService';

class MessageScreen extends Component {
  constructor(props) {
    super(props);

    this._fetchUserData = this._fetchUserData.bind(this);
    this._onMessageSend = this._onMessageSend.bind(this);
    this._onMessageSent = this._onMessageSent.bind(this);

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

  _onMessageSend(messages = []) {
    const message = {
      text: messages[0].text,
      user_id: this.state.channel.communicant.id
    };

    API()
      .post('api/message', message)
      .then(() => {
        this._onMessageSent(messages);
      })
      .catch(err => {
        ToastAndroid.show(
          'Error: ' + err.response.data.message,
          ToastAndroid.SHORT
        );
      });
  }

  _onMessageSent(messages = []) {
    this.setState(previousState => ({
      channel: {
        messages: GiftedChat.append(previousState.channel.messages, messages)
      }
    }));
  }

  _onLoadMessage() {
    const { channel } = this.props.navigation.state.params;
    this.setState({ loadingSpin: true });
    API()
      .get('api/channel/' + channel)
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

  _fetchUserData() {
    API()
      .get('api/me')
      .then(res => {
        this.setState({ user: { _id: res.data.id, name: res.data.name } });
        this._onLoadMessage();
      })
      .catch(err => {
        ToastAndroid.show(
          'Error: ' + err.response.data.message,
          ToastAndroid.SHORT
        );
      });
  }

  componentWillMount() {
    this._fetchUserData();
  }

  render() {
    const { channel } = this.state;
    const { navigation } = this.props;

    return (
      <Container style={{ backgroundColor: colors.colorLight }}>
        <MessageScreenHeader navigation={navigation} channel={channel} />

        <GiftedChat
          onPress={this._onLoadMessage}
          messages={channel.messages}
          onSend={this._onMessageSend}
          user={this.state.user}
        />
      </Container>
    );
  }
}

export default MessageScreen;
