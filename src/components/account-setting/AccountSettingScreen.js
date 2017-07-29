import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Container } from 'native-base';

import AccountSettingHeader from './AccountSettingHeader';
import AccountSettingForm from './AccountSettingForm';

class AccountSettingScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigation } = this.props;

    return (
      <Container>
        <AccountSettingHeader navigation={navigation} />

        <ScrollView>
          <AccountSettingForm navigation={navigation} />
        </ScrollView>
      </Container>
    );
  }
}

export default AccountSettingScreen;
