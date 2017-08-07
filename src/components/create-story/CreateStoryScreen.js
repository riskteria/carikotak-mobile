import React, { Component } from 'react';
import { StyleSheet, Image, ToastAndroid } from 'react-native';
import { Container, Content, Picker } from 'native-base';
import {
  RichTextEditor,
  RichTextToolbar
} from 'react-native-zss-rich-text-editor';
import ImagePicker from 'react-native-image-crop-picker';

import CreateStoryHeader from './CreateStoryHeader';
import styles from './styles';

import { API } from 'services/APIService';

class CreateStoryScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      story: {
        category_id: null,
        excerpt: '',
        image: '',
        title: '',
        body: ''
      },
      categories: []
    };

    this.getHTML = this.getHTML.bind(this);
    this.setFocusHandlers = this.setFocusHandlers.bind(this);
    this.onEditorSubmitted = this.onEditorSubmitted.bind(this);
    this.onCoverChanged = this.onCoverChanged.bind(this);
    this.onPressAddImage = this.onPressAddImage.bind(this);
    this._fetchProductCategory = this._fetchProductCategory.bind(this);
  }

  _fetchProductCategory() {
    API()
      .get('api/category')
      .then(res => {
        this.setState({ categories: res.data });
      })
      .catch(err => {
        this.setState({ loadingSpin: false });
        ToastAndroid.show(
          'Error: ' + err.response.data.message,
          ToastAndroid.SHORT
        );
      });
  }

  onEditorInitialized() {
    this.setFocusHandlers();
    this.getHTML();
  }

  onEditorSubmitted() {
    const { navigation } = this.props;
    const { navigate } = navigation;

    this.getHTML().then(html => {
      const { titleHtml, contentHtml } = html;
      this.setState({
        story: Object.assign({}, this.state.story, {
          title: titleHtml,
          body: contentHtml,
          excerpt: titleHtml
        })
      });

      API()
        .post('api/post', this.state.story)
        .then(res => {
          navigate('Story', { slug: res.data.post.slug });
        })
        .catch(err => {
          ToastAndroid.show(
            `Error: ${JSON.stringify(err.response.data.message)}`,
            ToastAndroid.SHORT
          );
        });
    });
  }

  onCoverChanged(cover) {
    const { image } = this.state;
    if (image.length > 0) {
      this.setState({
        story: Object.assign({}, this.state.story, { image: [cover] })
      });
    } else {
      this.setState({
        story: Object.assign({}, this.state.story, {
          image: [...this.state.image, cover]
        })
      });
    }
  }

  onPressAddImage() {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      includeBase64: true
    })
      .then(image => {
        const data = new FormData();
        const pathParts = image.path.split('/');

        const file = {
          uri: image.path,
          name: pathParts[pathParts.length - 1],
          type: image.mime
        };

        console.log(file);

        data.append('image', file);

        API()
          .post('api/image', data)
          .then(res => {
            console.log(res.data);
          })
          .catch(err => {
            console.log(err.response.data);
          });
      })
      .catch(e => e);
  }

  async getHTML() {
    const titleHtml = await this.richtext.getTitleHtml();
    const contentHtml = await this.richtext.getContentHtml();

    return {
      titleHtml,
      contentHtml
    };
  }

  richtext;
  setFocusHandlers() {
    this.richtext.setTitleFocusHandler(() => {});
    this.richtext.setContentFocusHandler(() => {});
  }

  componentWillMount() {
    this._fetchProductCategory();
  }

  render() {
    const { story, categories } = this.state;
    const { navigation } = this.props;

    const CategoryPicker = () =>
      <Picker
        mode="dropdown"
        selectedValue={story.category_id}
        onValueChange={value =>
          this.setState({
            story: Object.assign({}, story, {
              category_id: value
            })
          })}
      >
        <Picker.Item label="Pilih kategori" value="" />
        {categories.map((category, index) =>
          <Picker.Item label={category.name} value={category.id} key={index} />
        )}
      </Picker>;

    return (
      <Container style={StyleSheet.flatten(styles.mainContainer)}>
        <CreateStoryHeader
          navigation={navigation}
          onEditorSubmitted={this.onEditorSubmitted}
        />
        <RichTextEditor
          ref={r => (this.richtext = r)}
          style={styles.richText}
          titlePlaceholder={'Judul Cerita'}
          contentPlaceholder={'Konten cerita'}
          editorInitializedCallback={() => this.onEditorInitialized()}
        />

        <CategoryPicker />

        <RichTextToolbar
          getEditor={() => this.richtext}
          onPressAddImage={() => this.onPressAddImage()}
        />
      </Container>
    );
  }
}

export default CreateStoryScreen;
