import React, { Component } from 'react';
import { StyleSheet, ToastAndroid } from 'react-native';
import { Footer, Grid, Col, Button, Icon, Input } from 'native-base';

import styles from './styles';

import { API } from 'services/APIService';

class CommentScreenFooter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: ''
    };

    this._onPressComment = this._onPressComment.bind(this);
  }

  _onPressComment() {
    const { _onCommentSent, type, id } = this.props;

    const data = {
      target_id: id,
      target_type: type,
      comment: this.state.comment
    };

    API()
      .post('api/comment', data)
      .then(res => {
        this.setState({ comment: '' });
        this._commentInput.setNativeProps({ text: '' });
        _onCommentSent(res.data.comment);
      })
      .catch(err => {
        ToastAndroid.show(
          `Error: ${err.response.data.message}`,
          ToastAndroid.SHORT
        );
      });
  }

  render() {
    return (
      <Footer>
        <Grid>
          <Col style={StyleSheet.flatten(styles.footerColInput)}>
            <Input
              ref={component => (this._commentInput = component)}
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
