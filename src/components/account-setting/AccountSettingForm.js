import React, { Component } from 'react';
import { Text, Content, Item, Icon, Input, Button } from 'native-base';

class AccountSettingForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Content style={{ padding: 16, margin: 0 }}>
        <Item>
          <Input placeholder="Kata sandi" />
        </Item>
        <Item ic>
          <Input placeholder="Kata sandi baru" />
        </Item>
        <Item>
          <Input placeholder="Konfirmasi kata sandi" />
        </Item>
        <Button block>
          <Text>Ubah Kata Sandi</Text>
        </Button>
      </Content>
    );
  }
}

export default AccountSettingForm;
