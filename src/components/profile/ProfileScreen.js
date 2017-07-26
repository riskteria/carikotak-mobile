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

import { API } from 'services/APIService';

class ProfileScreen extends Component {
  constructor(props) {
    super(props);

    this._onFetchProfileData = this._onFetchProfileData.bind(this);
  }

  _onFetchProfileData() {
    API.get('api/me')
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err.response);
      });
  }

  componentWillMount() {
    this._onFetchProfileData();
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
