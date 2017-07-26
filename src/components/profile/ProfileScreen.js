import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import {
  Button,
  Icon,
  Body,
  Title,
  Header,
  Right,
  Container
} from 'native-base';

import styles from './styles';
import colors from 'styles/_colors';
import { isSignedIn } from 'services/AuthHandler';

class ProfileScreen extends Component {
  componentDidMount() {
    isSignedIn()
      .then(res => {
        // console.log('ok' + res);
      })
      .catch(err => {
        throw err;
      });
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <Container>
        <Header style={{ backgroundColor: colors.colorLight, elevation: 1 }}>
          <Body>
            <Title>Profile Screen</Title>
          </Body>

          <Right>
            <Button transparent dark onPress={() => navigate('ProfileOption')}>
              <Icon name="md-more" />
            </Button>
          </Right>
        </Header>

        <ScrollView style={styles.parentView} />
      </Container>
    );
  }
}

export default ProfileScreen;
