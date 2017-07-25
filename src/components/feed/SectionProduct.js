import React, { Component } from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';

import CardProduct from './CardProduct';
import styles from './styles';

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

    API.get('api/category')
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
    const ProductNumber = [1, 2, 3];

    const ProductCard = ProductNumber.map((number, index) =>
      <TouchableOpacity
        activeOpacity={0.9}
        style={styles.cardProductContainer}
        key={index}
        onPress={() => navigate('Product')}
      >
        <CardProduct key={index} />
      </TouchableOpacity>
    );

    const Categories = this.state.categories.map((category, index) =>
      <View style={styles.tabSection} key={index}>
        <View style={styles.tabProductSectionTop}>
          <Text style={styles.tabProductSectionLabel}>
            {category.name}
          </Text>
          <Text
            style={styles.tabProductSectionLink}
            onPress={() => navigate('ProductList')}
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
            {ProductCard}
          </View>
        </ScrollView>
      </View>
    );

    return (
      <View style={{ flex: 1 }}>
        {Categories}
      </View>
    );
  }
}

export default SectionProduct;
