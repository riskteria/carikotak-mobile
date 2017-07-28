import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Footer, Button, Icon, Text } from 'native-base';
import { Grid, Col } from 'react-native-easy-grid';

import styles from './styles';
import colors from 'styles/_colors';

class ProductScreenFooter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigation, product } = this.props;
    const { _onFavoritePressed, _onUnFavoritePressed } = this.props;

    return (
      <Footer>
        <Grid>
          <Col style={{ flex: 1, backgroundColor: colors.colorAccent }}>
            <Button
              onPress={() => navigation.navigate('Message')}
              small
              transparent
              block
              light
              style={StyleSheet.flatten(styles.footerColButton)}
            >
              <Icon
                name="md-mail"
                style={StyleSheet.flatten(styles.footerColButtonIcon)}
              />
              <Text style={StyleSheet.flatten(styles.footerColButtonText)}>
                Kirim Pesan
              </Text>
            </Button>
          </Col>
          <Col style={{ flex: 1, backgroundColor: colors.colorTomato }}>
            <Button
              onPress={() =>
                product.favorited
                  ? _onUnFavoritePressed()
                  : _onFavoritePressed()}
              small
              transparent
              block
              light
              style={StyleSheet.flatten(styles.footerColButton)}
            >
              <Icon
                name="md-heart"
                style={StyleSheet.flatten(styles.footerColButtonIcon)}
              />
              <Text style={StyleSheet.flatten(styles.footerColButtonText)}>
                {product.favorited ? 'Hapus Favorit' : 'Tambah Favorit'}
              </Text>
            </Button>
          </Col>
        </Grid>
      </Footer>
    );
  }
}

export default ProductScreenFooter;
