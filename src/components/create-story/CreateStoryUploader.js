import React, { Component } from 'react';
import { Text } from 'native-base';
import ImagePicker from 'react-native-image-crop-picker';

class CreateStoryUploader extends Component {
  constructor(props) {
    super(props);

    this._openPicker = this._openPicker.bind(this);
  }

  _openPicker() {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      console.log(image);
    });
  }

  render() {
    return <Text onPress={() => this._openPicker()}>Uploader</Text>;
  }
}

export default CreateStoryUploader;
