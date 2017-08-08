import React, { Component } from 'react';
import { Header, Left, Right, Button, Icon } from 'native-base';

class AboutScreenHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { goBack } = this.props.navigation;

    return (
      <Header style={{ backgroundColor: 'transparent', elevation: 0 }}>
        <Left>
          <Button transparent dark onPress={() => goBack()}>
            <Icon name="md-arrow-back" />
          </Button>
        </Left>
        <Right />
      </Header>
    );
  }
}

export default AboutScreenHeader;
