import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Container, View, Content } from 'native-base';

import ProgressBar from 'components/_shared/progress-bar/ProgressBar';

import ProductScreenHeader from './ProductScreenHeader';
import ProductScreenInfo from './ProductScreenInfo';
import ProductScreenSwiper from './ProductScreenSwiper';

import { API } from 'services/APIService';
import styles from './styles';

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
    const { navigation } = this.props;

    const ProductDetail = () =>
      <View>
        <ProductScreenSwiper product={product} />
        <ProductScreenInfo product={product} />
      </View>;

    return (
      <ScrollView style={styles.mainContainer}>
        <Container>
          <ProductScreenHeader product={product} navigation={navigation} />

          <Content>
            {loadingSpin ? <ProgressBar /> : <ProductDetail />}
          </Content>
        </Container>
      </ScrollView>
    );
  }
}

export default ProductScreen;
