import React, { Component } from 'react';
import { Container } from 'native-base';

import AboutScreenHeader from './AboutScreenHeader';

class AboutScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigation } = this.props;

    return (
      <Container>
        <AboutScreenHeader navigation={navigation} />
      </Container>
    );
  }
}

export default AboutScreen;
