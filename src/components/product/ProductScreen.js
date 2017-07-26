import React, { Component } from 'react';
import {
  Container,
  Text,
  Header,
  Left,
  Right,
  Title,
  Button,
  Icon,
  Body
} from 'native-base';

import ProgressBar from 'components/_shared/progress-bar/ProgressBar';
import colors from 'styles/_colors';
import { API } from 'services/APIService';

class ProductScreen extends Component {
  constructor(props) {
    super(props);

    this._onGetProduct = this._onGetProduct.bind(this);

    this.state = {
      product: false,
      loadingSpin: false
    };
  }

  _onGetProduct() {
    this.setState({ loadingSpin: true });

    API.get(`api/product/${this.props.navigation.state.params.slug}`)
      .then(res => {
        this.setState({
          loadingSpin: false,
          product: res.data
        });
      })
      .catch(err => {
        this.setState({ loadingSpin: false });
        throw err;
      });
  }

  componentWillMount() {
    this._onGetProduct();
  }

  render() {
    const { loadingSpin, product } = this.state;
    const { goBack } = this.props.navigation;

    const ProductDetail = () =>
      <Text>
        {product.name}
      </Text>;

    return (
      <Container>
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
          <Right />
        </Header>

        {loadingSpin ? <ProgressBar /> : <ProductDetail />}
      </Container>
    );
  }
}

export default ProductScreen;
