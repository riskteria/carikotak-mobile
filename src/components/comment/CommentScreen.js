import React, { Component } from 'react';
import { Container } from 'native-base';

import CommentScreenHeader from './CommentScreenHeader';
import CommentScreenFooter from './CommentScreenFooter';
import CommentList from './CommentList';

class CommentScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigation } = this.props;

    return (
      <Container>
        <CommentScreenHeader navigation={navigation} />
        <Container>
          <CommentList navigation={navigation} />
        </Container>
        <CommentScreenFooter />
      </Container>
    );
  }
}

export default CommentScreen;
