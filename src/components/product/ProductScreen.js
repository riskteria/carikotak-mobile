import React, { Component } from 'react';
import { Container, Text } from 'native-base';

import ProgressBar from 'components/_shared/progress-bar/ProgressBar';
import { API } from 'services/APIService';

class ProductScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title
  });

  constructor(props) {
    super(props);

    this._onGetProduct = this._onGetProduct.bind(this);

    this.state = {
      product: false,
      loadingSpin: false
    };
  }

  _onGetProduct() {
    const { navigation } = this.props;
    this.setState({ loadingSpin: true });

    API.get(`api/product/${this.props.navigation.state.params.slug}`)
      .then(res => {
        navigation.setParams({ title: res.data.name });
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

    const ProductDetail = () =>
      <Text>
        {product.name}
      </Text>;

    return (
      <Container>
        {loadingSpin ? <ProgressBar /> : <ProductDetail />}
      </Container>
    );
  }
}

export default ProductScreen;
