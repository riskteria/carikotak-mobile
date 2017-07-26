import React, { Component } from 'react';
import { StyleSheet, ToastAndroid } from 'react-native';
import { Footer, Button, Icon, Text } from 'native-base';
import { Grid, Col } from 'react-native-easy-grid';

import styles from './styles';
import colors from 'styles/_colors';

class ProductScreenFooter extends Component {
  constructor(props) {
    super(props);

    this._onFavoriteClicked = this._onFavoriteClicked.bind(this);
  }

  _onFavoriteClicked() {
    ToastAndroid.show('Product added into favorite', ToastAndroid.SHORT);
  }

  render() {
    const { navigation } = this.props;

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
              <Icon name="md-mail" />
              <Text>Send Message</Text>
            </Button>
          </Col>
          <Col style={{ flex: 1, backgroundColor: colors.colorTomato }}>
            <Button
              onPress={() => this._onFavoriteClicked()}
              small
              transparent
              block
              light
              style={StyleSheet.flatten(styles.footerColButton)}
            >
              <Icon name="md-heart" />
              <Text>Add to Favorite</Text>
            </Button>
          </Col>
        </Grid>
      </Footer>
    );
  }
}

export default ProductScreenFooter;
