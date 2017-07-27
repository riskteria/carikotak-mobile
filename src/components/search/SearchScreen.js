import React, { Component } from 'react';
import { Container } from 'native-base';

import SearchScreenHeader from './SearchScreenHeader';
import SearchScreenCategory from './SearchScreenCategory';

class SearchScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      location: ''
    };
  }

  render() {
    const { navigation } = this.props;

    return (
      <Container>
        <SearchScreenHeader navigation={navigation} />

        <SearchScreenCategory />
      </Container>
    );
  }
}

export default SearchScreen;
