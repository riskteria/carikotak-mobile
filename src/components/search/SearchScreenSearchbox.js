import React, { Component } from 'react';
import { View, InputGroup, Input, Icon } from 'native-base';

class SearchScreenSearchbox extends Component {
  render() {
    return (
      <View style={{ padding: 16 }}>
        <InputGroup
          rounded
          style={{ backgroundColor: '#fff', paddingLeft: 8, paddingRight: 8 }}
        >
          <Icon name="ios-search-outline" />
          <Input placeholder="Cari sesuatu" />
          <Icon
            name="md-close-circle"
            style={{ color: '#999' }}
            onPress={() => {
              this.state.query = '';
            }}
          />
        </InputGroup>
      </View>
    );
  }
}

export default SearchScreenSearchbox;
