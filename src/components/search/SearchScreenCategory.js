import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Content, View, Button, Text } from 'native-base';

import ProgressBar from 'components/_shared/progress-bar/ProgressBar';
import { API } from 'services/APIService';

import styles from './styles';

class SearchScreenCategory extends Component {
  constructor(props) {
    super(props);

    this._fetchAllCategories = this._fetchAllCategories.bind(this);

    this.state = {
      categories: [],
      loadingSpin: false
    };
  }

  _fetchAllCategories() {
    this.setState({ loadingSpin: true });

    API.get('api/category')
      .then(res => {
        this.setState({ loadingSpin: false, categories: res.data });
      })
      .catch(err => {
        this.setState({ loadingSpin: false });
        throw err;
      });
  }
  componentWillMount() {
    this._fetchAllCategories();
  }

  render() {
    const { categories, loadingSpin } = this.state;
    const { navigation } = this.props;
    const { navigate } = navigation;

    const CategoryList = () =>
      categories.map((category, index) =>
        <View style={StyleSheet.flatten(styles.CategoryWrapper)} key={index}>
          <Button
            dark
            block
            style={StyleSheet.flatten(styles.CategoryButton)}
            onPress={() => navigate('ProductList', { category: category.id })}
          >
            <Text>
              {category.name}
            </Text>
          </Button>
        </View>
      );

    return (
      <Content>
        <View style={StyleSheet.flatten(styles.CategoryListWrapper)}>
          {loadingSpin ? <ProgressBar /> : CategoryList()}
        </View>
      </Content>
    );
  }
}

export default SearchScreenCategory;
