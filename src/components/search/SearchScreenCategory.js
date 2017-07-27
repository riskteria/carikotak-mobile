import React, { Component } from 'react';
import {
  Content,
  View,
  Button,
  Icon,
  Input,
  InputGroup,
  Text
} from 'native-base';

class SearchScreenCategory extends Component {
  render() {
    return (
      <Content>
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

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            paddingLeft: 8,
            paddingRight: 8
          }}
        >
          <View style={{ flex: 0.5, padding: 8 }}>
            <Button dark block style={{ borderRadius: 5 }}>
              <Text>Cerita Kotak</Text>
            </Button>
          </View>

          <View style={{ flex: 0.5, padding: 8 }}>
            <Button dark block style={{ borderRadius: 5 }}>
              <Text>Kotak Produk</Text>
            </Button>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            paddingLeft: 8,
            paddingRight: 8
          }}
        >
          <View style={{ flex: 0.5, padding: 8 }}>
            <Button dark block style={{ borderRadius: 5 }}>
              <Text>Kotak Bekas</Text>
            </Button>
          </View>

          <View style={{ flex: 0.5, padding: 8 }}>
            <Button dark block style={{ borderRadius: 5 }}>
              <Text>Kotak Hadiah</Text>
            </Button>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            paddingLeft: 8,
            paddingRight: 8
          }}
        >
          <View style={{ flex: 0.5, padding: 8 }}>
            <Button dark block style={{ borderRadius: 5 }}>
              <Text>Kreasi Kotak</Text>
            </Button>
          </View>

          <View style={{ flex: 0.5, padding: 8 }}>
            <Button dark block style={{ borderRadius: 5 }}>
              <Text>Daur Ulang</Text>
            </Button>
          </View>
        </View>
      </Content>
    );
  }
}

export default SearchScreenCategory;
