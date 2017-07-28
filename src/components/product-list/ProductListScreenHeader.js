import React, { Component } from 'react';
import { Header, Left, Body, Right, Title, Button, Icon } from 'native-base';

import ProductListModalFilter from './ProductListModalFilter';
import ProductListModalSearch from './ProductListModalSearch';

import colors from 'styles/_colors';

class ProductListScreenHeader extends Component {
  constructor(props) {
    super(props);

    this._onModalFilterToggled = this._onModalFilterToggled.bind(this);
    this._onModalSearchToggled = this._onModalSearchToggled.bind(this);
    this._onSearchSubmited = this._onSearchSubmited.bind(this);
    this._onFilterChanged = this._onFilterChanged.bind(this);

    this.state = {
      modalSearchVisible: false,
      modalFilterVisible: false,
      province: '',
      city: ''
    };
  }

  _onFilterChanged(province = '', city = '') {
    this.setState({ province, city });
    this._onModalFilterToggled();
  }

  _onSearchSubmited(keyword) {
    this.props.navigation.navigate('ProductList', { keyword });
    this._onModalSearchToggled();
  }

  _onModalSearchToggled() {
    this.setState({ modalSearchVisible: !this.state.modalSearchVisible });
  }

  _onModalFilterToggled() {
    this.setState({ modalFilterVisible: !this.state.modalFilterVisible });
  }

  render() {
    const { modalFilterVisible, modalSearchVisible } = this.state;
    const { navigation } = this.props;
    const { goBack } = navigation;

    return (
      <Header style={{ backgroundColor: colors.colorLight, elevation: 1 }}>
        <Left>
          <Button transparent dark onPress={() => goBack()}>
            <Icon name="md-arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title style={{ color: colors.colorBlack }}>Daftar Produk</Title>
        </Body>
        <Right>
          <Button transparent dark>
            <Icon
              name="md-search"
              onPress={() => this._onModalSearchToggled()}
            />
          </Button>
          <Button transparent dark>
            <Icon
              name="md-options"
              onPress={() => this._onModalFilterToggled()}
            />
          </Button>
        </Right>

        <ProductListModalFilter
          modalFilterVisible={modalFilterVisible}
          navigation={navigation}
          _onFilterChanged={this._onFilterChanged}
          _onModalFilterToggled={this._onModalFilterToggled}
        />
        <ProductListModalSearch
          modalSearchVisible={modalSearchVisible}
          navigation={navigation}
          _onSearchSubmited={this._onSearchSubmited}
          _onModalSearchToggled={this._onModalSearchToggled}
        />
      </Header>
    );
  }
}

export default ProductListScreenHeader;
