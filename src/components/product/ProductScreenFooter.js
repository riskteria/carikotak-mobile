import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Footer, Button, Icon, Text } from 'native-base';
import { Grid, Col } from 'react-native-easy-grid';

import styles from './styles';

class ProductScreenFooter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Footer>
        <Grid>
          <Col style={StyleSheet.flatten(styles.footerCol)}>
            <Button
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
          <Col style={StyleSheet.flatten(styles.footerCol)}>
            <Button
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
