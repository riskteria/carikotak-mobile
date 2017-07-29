import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, View } from 'native-base';
import {
  RichTextEditor,
  RichTextToolbar
} from 'react-native-zss-rich-text-editor';

import CreateStoryHeader from './CreateStoryHeader';

import styles from './styles';

class CreateStoryScreen extends Component {
  constructor(props) {
    super(props);

    this.getHTML = this.getHTML.bind(this);
    this.setFocusHandlers = this.setFocusHandlers.bind(this);
  }

  onEditorInitialized() {
    this.setFocusHandlers();
    this.getHTML();
  }

  async getHTML() {
    const titleHtml = await this.richtext.getTitleHtml();
    const contentHtml = await this.richtext.getContentHtml();
    //alert(titleHtml + ' ' + contentHtml)
  }

  richtext;
  setFocusHandlers() {
    this.richtext.setTitleFocusHandler(() => {
      // alert('title focus');
    });
    this.richtext.setContentFocusHandler(() => {
      // alert('content focus');
    });
  }

  render() {
    const { navigation } = this.props;

    return (
      <Container style={StyleSheet.flatten(styles.mainContainer)}>
        <CreateStoryHeader navigation={navigation} />

        <View style={StyleSheet.flatten(styles.container)}>
          <RichTextEditor
            ref={r => (this.richtext = r)}
            style={styles.richText}
            titlePlaceholder={'Judul Cerita'}
            contentPlaceholder={'Konten cerita'}
            editorInitializedCallback={() => this.onEditorInitialized()}
          />
          <RichTextToolbar getEditor={() => this.richtext} />
        </View>
      </Container>
    );
  }
}

export default CreateStoryScreen;
