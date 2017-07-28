import React, { Component } from 'react';
import { Container } from 'native-base';

import styles from './styles';
import FavoriteContentTab from './FavoriteContentTab';

class FavoriteScreen extends Component {
  render() {
    const { navigation } = this.props;

    return (
      <Container>
        <FavoriteContentTab navigation={navigation} />
      </Container>
    );
  }
}

export default FavoriteScreen;
