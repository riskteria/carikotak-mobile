import React, { Component } from 'react';
import {
  Container,
  Header,
  Body,
  Left,
  Button,
  Icon,
  Title
} from 'native-base';
import { GiftedChat } from 'react-native-gifted-chat';

import colors from 'styles/_colors';

class MessageScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [
        {
          _id: 1,
          text: 'Halo gan, produknya masih ada?',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'Ovinsyah Al Bayhaqy',
            avatar: 'https://unsplash.it/300x300?random'
          }
        }
      ]
    };
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages)
    }));
  }

  render() {
    const { goBack } = this.props.navigation;

    return (
      <Container style={{ backgroundColor: colors.colorLight }}>
        <Header style={{ backgroundColor: colors.colorLight, elevation: 1 }}>
          <Left>
            <Button transparent dark onPress={() => goBack()}>
              <Icon name="md-arrow-back" />
            </Button>
          </Left>

          <Body
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              alignItems: 'center'
            }}
          >
            <Title style={{ color: colors.colorDark }}>
              Ovinsyah Al Bayhaqy
            </Title>
          </Body>
        </Header>

        <GiftedChat
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: 1
          }}
        />
      </Container>
    );
  }
}

export default MessageScreen;
