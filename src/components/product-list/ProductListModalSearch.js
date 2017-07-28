import React, { Component } from 'react';
import { Modal } from 'react-native';
import { Header, Left, Button, Icon, Item, Input } from 'native-base';

import colors from 'styles/_colors';

class ProductListModalSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: ''
    };
  }

  render() {
    const {
      modalSearchVisible,
      _onModalSearchToggled,
      _onSearchSubmited
    } = this.props;

    return (
      <Modal
        animationType={'none'}
        transparent={false}
        visible={modalSearchVisible}
        onRequestClose={() => _onModalSearchToggled()}
      >
        <Header
          style={{ backgroundColor: colors.colorLight, elevation: 1 }}
          searchBar
          rounded
        >
          <Left style={{ flex: 0.16 }}>
            <Button transparent dark onPress={() => _onModalSearchToggled()}>
              <Icon name="md-arrow-back" />
            </Button>
          </Left>
          <Item style={{ backgroundColor: colors.colorSmoke }}>
            <Icon name="ios-search" />
            <Input
              onChangeText={text => this.setState({ keyword: text })}
              placeholder="Search"
              autoFocus={true}
              onSubmitEditing={() => _onSearchSubmited(this.state.keyword)}
            />
          </Item>
        </Header>
      </Modal>
    );
  }
}

export default ProductListModalSearch;
