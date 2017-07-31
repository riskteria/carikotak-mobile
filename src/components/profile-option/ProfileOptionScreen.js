import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Container } from 'native-base';

import ProfileOptionsHeader from './ProfileOptionsHeader';
import ProfileOptionList from './ProfileOptionList';

class ProfileOptionScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigation } = this.props;

    return (
      <Container>
        <ProfileOptionsHeader navigation={navigation} />

        <ScrollView>
          <ProfileOptionList navigation={navigation} />
        </ScrollView>
      </Container>
    );
  }
}

export default ProfileOptionScreen;
