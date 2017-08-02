import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content } from 'native-base';
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
    this.onEditorSubmitted = this.onEditorSubmitted.bind(this);
  }

  onEditorInitialized() {
    this.setFocusHandlers();
    this.getHTML();
  }

  onEditorSubmitted() {
    //
  }

  async getHTML() {
    const titleHtml = await this.richtext.getTitleHtml();
    const contentHtml = await this.richtext.getContentHtml();
  }

  richtext;
  setFocusHandlers() {
    this.richtext.setTitleFocusHandler(() => {});
    this.richtext.setContentFocusHandler(() => {});
  }

  render() {
    const { navigation } = this.props;

    return (
      <Container style={StyleSheet.flatten(styles.mainContainer)}>
        <CreateStoryHeader
          navigation={navigation}
          onEditorSubmitted={this.onEditorSubmitted}
        />

        <Content style={StyleSheet.flatten(styles.container)}>
          <RichTextEditor
            ref={r => (this.richtext = r)}
            style={styles.richText}
            titlePlaceholder={'Judul Cerita'}
            contentPlaceholder={'Konten cerita'}
            editorInitializedCallback={() => this.onEditorInitialized()}
          />
          <RichTextToolbar getEditor={() => this.richtext} />
        </Content>
      </Container>
    );
  }
}

export default CreateStoryScreen;
