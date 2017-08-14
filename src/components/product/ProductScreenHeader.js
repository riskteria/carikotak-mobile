import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Share, ToastAndroid } from 'react-native';
import { Header, Left, Right, Title, Button, Icon, Body } from 'native-base';
import colors from 'styles/_colors';

import { API } from 'services/APIService';
import { API_URL } from 'react-native-dotenv';
import ProductScreenOptionModal from './ProductScreenOptionModal';

const mapStateToProps = state => {
  return {
    activeUser: state.authSessionHandler.active_user
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

class ProductScreenHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOptionVisible: false
    };

    this._onOptionEditPressed = this._onOptionEditPressed.bind(this);
    this._onOptionDeletePressed = this._onOptionDeletePressed.bind(this);
    this._onModalOptionToggled = this._onModalOptionToggled.bind(this);
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

  _onOptionDeletePressed() {
    const { product, navigation } = this.props;
    const { goBack } = navigation;

    API()
      .delete('api/product/' + product.id)
      .then(() => {
        this._onModalOptionToggled();
        goBack();
      })
      .catch(err => {
        ToastAndroid.show(
          `Error ${JSON.stringify(err.response.data.message)}`,
          ToastAndroid.SHORT
        );
      });
  }

  _onOptionEditPressed() {
    const { product, navigation } = this.props;
    const { navigate } = navigation;

    this._onModalOptionToggled();
    navigate('EditProduct', { slug: product.slug });
  }

  _onModalOptionToggled() {
    this.setState({ modalOptionVisible: !this.state.modalOptionVisible });
  }

  render() {
    const { modalOptionVisible } = this.state;
    const { product, navigation } = this.props;
    const { goBack, navigate } = navigation;

    const RightButton = () =>
      <Right>
        <Button transparent dark onPress={() => this._onPressedShare()}>
          <Icon name="md-share" />
        </Button>
        <Button
          transparent
          danger
          onPress={() =>
            navigate('Report', {
              type: 'product',
              id: product.id,
              title: product.name
            })}
        >
          <Icon name="md-flag" />
        </Button>
        {product.user.id === this.props.activeUser.id
          ? <Button
              transparent
              dark
              onPress={() => this._onModalOptionToggled()}
            >
              <Icon name="md-more" />
            </Button>
          : null}
      </Right>;

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

        {product ? <RightButton /> : <Right />}

        <ProductScreenOptionModal
          navigation={navigation}
          modalOptionVisible={modalOptionVisible}
          product={product}
          _onModalOptionToggled={this._onModalOptionToggled}
          _onOptionDeletePressed={this._onOptionDeletePressed}
          _onOptionEditPressed={this._onOptionEditPressed}
        />
      </Header>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  ProductScreenHeader
);
