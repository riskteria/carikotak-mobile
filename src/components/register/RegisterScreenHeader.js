import React, { Component } from 'react';
import { Header, Left, Button, Icon } from 'native-base';

class RegisterScreenHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { goBack } = this.props.navigation;

    return (
      <Header style={{ backgroundColor: 'transparent', elevation: 0 }}>
        <Left>
          <Button transparent light onPress={() => goBack()}>
            <Icon name="md-arrow-back" />
          </Button>
        </Left>
      </Header>
    );
  }
}

export default RegisterScreenHeader;
