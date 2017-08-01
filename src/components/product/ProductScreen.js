import React, { Component } from 'react';
import { View, ScrollView, ToastAndroid } from 'react-native';
import { Container, Content } from 'native-base';

import ProgressBar from 'components/_shared/progress-bar/ProgressBar';

import ProductScreenFooter from './ProductScreenFooter';
import ProductScreenHeader from './ProductScreenHeader';
import ProductScreenInfo from './ProductScreenInfo';
import ProductScreenSwiper from './ProductScreenSwiper';

import { API } from 'services/APIService';
import styles from './styles';

class ProductScreen extends Component {
  constructor(props) {
    super(props);

    this._onGetProduct = this._onGetProduct.bind(this);
    this._onFavoritePressed = this._onFavoritePressed.bind(this);
    this._onUnFavoritePressed = this._onUnFavoritePressed.bind(this);

    this.state = {
      product: false,
      loadingSpin: false
    };
  }

  _onFavoritePressed() {
    const { product } = this.state;

    API()
      .put('api/favorite/' + product.id + '?type=product')
      .then(() => {
        this.setState({
          product: Object.assign({}, product, {
            favorited: true
          })
        });
        ToastAndroid.show('Produk ditambahkan ke favorit', ToastAndroid.SHORT);
      })
      .catch(err => {
        ToastAndroid.show(
          'Error ' + err.response.data.message,
          ToastAndroid.SHORT
        );
      });
  }

  _onUnFavoritePressed() {
    const { product } = this.state;

    API()
      .delete('api/favorite/' + product.id + '?type=product')
      .then(() => {
        this.setState({
          product: Object.assign({}, product, {
            favorited: false
          })
        });
        ToastAndroid.show('Produk dihapus dari favorit', ToastAndroid.SHORT);
      })
      .catch(err => {
        ToastAndroid.show(
          'Error ' + err.response.data.message,
          ToastAndroid.SHORT
        );
      });
  }

  _onGetProduct() {
    this.setState({ loadingSpin: true });

    API()
      .get(`api/product/${this.props.navigation.state.params.slug}`)
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
      <View style={styles.mainContainer}>
        <ScrollView>
          <Content>
            <ProductScreenSwiper product={product} />
            <ProductScreenInfo product={product} />
          </Content>
        </ScrollView>

        <ProductScreenFooter
          product={product}
          navigation={navigation}
          _onFavoritePressed={this._onFavoritePressed}
          _onUnFavoritePressed={this._onUnFavoritePressed}
        />
      </View>;

    return (
      <Container>
        <ProductScreenHeader product={product} navigation={navigation} />

        {loadingSpin ? <ProgressBar /> : <ProductDetail />}
      </Container>
    );
  }
}

export default ProductScreen;
