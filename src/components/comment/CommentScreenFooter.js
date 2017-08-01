import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Footer, Grid, Col, Button, Icon, Input } from 'native-base';

import styles from './styles';

class CommentScreenFooter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: ''
    };

    this._onPressComment = this._onPressComment.bind(this);
  }

  _onPressComment() {
    alert(this.state.comment);
  }

  render() {
    return (
      <Footer>
        <Grid>
          <Col style={StyleSheet.flatten(styles.footerColInput)}>
            <Input
              style={StyleSheet.flatten(styles.footerInput)}
              autoFocus
              onChangeText={value => this.setState({ comment: value })}
              placeholder="Tuliskan komentar"
            />
          </Col>
          <Col style={StyleSheet.flatten(styles.footerColButton)}>
            <Button
              block
              transparent
              light
              onPress={() => this._onPressComment()}
              style={StyleSheet.flatten(styles.footerButton)}
            >
              <Icon name="md-paper-plane" />
            </Button>
          </Col>
        </Grid>
      </Footer>
    );
  }
}

export default CommentScreenFooter;
