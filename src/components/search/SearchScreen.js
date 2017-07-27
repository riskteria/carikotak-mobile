import React, { Component } from 'react';
import { Container } from 'native-base';

import SearchScreenCategory from './SearchScreenCategory';
import SearchScreenHeader from './SearchScreenHeader';
import SearchScreenSearchbox from './SearchScreenSearchbox';

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
        <SearchScreenSearchbox navigation={navigation} />
        <SearchScreenCategory navigation={navigation} />
      </Container>
    );
  }
}

export default SearchScreen;
