import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Container } from 'native-base';

import ProfileSettingForm from './ProfileSettingForm';
import ProfileSettingHeader from './ProfileSettingHeader';

class ProfileSettingScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigation } = this.props;

    return (
      <Container>
        <ProfileSettingHeader navigation={navigation} />

        <ScrollView>
          <ProfileSettingForm navigation={navigation} />
        </ScrollView>
      </Container>
    );
  }
}

export default ProfileSettingScreen;
