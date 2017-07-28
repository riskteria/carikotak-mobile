import React, { Component } from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';

import CardProduct from './CardProduct';
import styles from './styles';
import ProgressBar from 'components/_shared/progress-bar/ProgressBar';

import { API } from 'services/APIService';

class SectionProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      loadingSpinner: false
    };

    this._onGetCategories = this._onGetCategories.bind(this);
  }

  _onGetCategories() {
    this.setState({ loadingSpinner: true });

    API.get('api/category?with=product')
      .then(res => {
        this.setState({ loadingSpinner: false });
        this.setState({ categories: res.data });
      })
      .catch(err => {
        this.setState({ loadingSpinner: false });
        throw err;
      });
  }

  componentWillMount() {
    this._onGetCategories();
  }

  render() {
    const { navigate } = this.props;
    const { categories, loadingSpinner } = this.state;

    const ProductCard = products =>
      products.map((product, index) =>
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.cardProductContainer}
          key={index}
          onPress={() => navigate('Product', { slug: product.slug })}
        >
          <CardProduct key={index} product={product} />
        </TouchableOpacity>
      );

    const Categories = categories.map((category, index) =>
      <View style={styles.tabSection} key={index}>
        <View style={styles.tabProductSectionTop}>
          <Text style={styles.tabProductSectionLabel}>
            {category.name}
          </Text>
          <Text
            style={styles.tabProductSectionLink}
            onPress={() => navigate('ProductList', { category: category.id })}
          >
            Lihat Semua
          </Text>
        </View>
        <ScrollView
          horizontal
          automaticallyAdjustContentInsets={false}
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.productListHorizontal}>
            {ProductCard(category.product)}
          </View>
        </ScrollView>
      </View>
    );

    return (
      <View style={{ flex: 1 }}>
        {loadingSpinner ? <ProgressBar /> : Categories}
      </View>
    );
  }
}

export default SectionProduct;
