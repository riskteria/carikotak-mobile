import React, { Component } from 'react';
import { Container } from 'native-base';

import HelpScreenHeader from './HelpScreenHeader';

class HelpScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigation } = this.props;

    return (
      <Container>
        <HelpScreenHeader navigation={navigation} />
      </Container>
    );
  }
}

export default HelpScreen;
