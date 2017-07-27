import React, { Component } from 'react';
import { Share } from 'react-native';
import { Header, Left, Right, Title, Button, Icon, Body } from 'native-base';
import colors from 'styles/_colors';

import { API_URL } from 'react-native-dotenv';

class ProductScreenHeader extends Component {
  constructor(props) {
    super(props);

    this._onPressedShare = this._onPressedShare.bind(this);
  }

  _onPressedShare() {
    const { product } = this.props;
    const url = API_URL + '/product/' + product.slug;

    Share.share(
      {
        message:
          'Dapatkan ' +
          product.name +
          ' hanya Rp.' +
          product.price +
          ' di Carikotak sekarang juga! ' +
          url,
        url: url,
        title: product.name
      },
      {
        // Android only:
        dialogTitle: 'Share ' + product.name,
        // iOS only:
        excludedActivityTypes: ['com.apple.UIKit.activity.PostToTwitter']
      }
    );
  }

  render() {
    const { goBack, navigate } = this.props.navigation;
    const { product } = this.props;

    return (
      <Header style={{ backgroundColor: colors.colorLight, elevation: 1 }}>
        <Left>
          <Button transparent dark onPress={() => goBack()}>
            <Icon name="md-arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title style={{ color: colors.colorBlack }}>
            {product.name}
          </Title>
        </Body>
        <Right>
          <Button transparent dark onPress={() => this._onPressedShare()}>
            <Icon name="md-share" />
          </Button>
          <Button transparent danger onPress={() => navigate('Report')}>
            <Icon name="ios-alert-outline" />
          </Button>
        </Right>
      </Header>
    );
  }
}

export default ProductScreenHeader;
