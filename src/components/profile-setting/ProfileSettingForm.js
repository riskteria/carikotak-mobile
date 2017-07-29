import React, { Component } from 'react';
import {
  Text,
  Content,
  Item,
  Icon,
  Input,
  Button,
  Thumbnail
} from 'native-base';

class ProfileSettingForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Content style={{ padding: 16, margin: 0 }}>
        <Item>
          <Thumbnail circular source={{ uri: 'https://unsplash.it/300/300' }} />
          <Button transparent dark>
            <Text>Ubah Avatar</Text>
          </Button>
        </Item>
        <Item disabled>
          <Icon name="md-finger-print" />
          <Input disabled value="riskeria" placeholder="username" />
        </Item>
        <Item ic>
          <Icon name="md-person" />
          <Input placeholder="Nama lengkap" />
        </Item>
        <Item>
          <Icon name="md-phone-portrait" />
          <Input placeholder="Handphone" />
        </Item>
        <Item>
          <Icon name="md-mail" />
          <Input placeholder="Email" />
        </Item>
        <Item>
          <Icon name="md-quote" />
          <Input multiline={true} numberOfLines={2} placeholder="Bio" />
        </Item>
        <Button block>
          <Text>Simpan Perubahan</Text>
        </Button>
      </Content>
    );
  }
}

export default ProfileSettingForm;
