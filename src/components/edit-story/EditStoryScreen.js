import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, ToastAndroid } from 'react-native';
import { Container, Picker } from 'native-base';
import {
  RichTextEditor,
  RichTextToolbar
} from 'react-native-zss-rich-text-editor';

import ImagePicker from 'react-native-image-crop-picker';
import RNFetchBlob from 'react-native-fetch-blob';

const { File } = RNFetchBlob.polyfill;

import EditStoryHeader from './EditStoryHeader';
import styles from './styles';

import { API } from 'services/APIService';

const mapStateToProps = state => {
  return {
    accessToken: state.authSessionHandler.access_token
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

class EditStoryScreen extends Component {
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
        // const data = new FormData();
        // const pathParts = image.path.split('/');

        const form = new FormData();

        // create first file from BASE64, file IO is asynchronous therefore
        // we need wait for the promise.
        // The `;BASE64` in `type` is important when creating Blob/File from
        // BASE64 encoded data.
        File.build('image.png', image.data, { type: 'image/png;BASE64' })
          .then(file => {
            // add the file to form data
            form.append('image', file);
            // create File object from existing file path, the content type is optional
            return File.build('image2.png', RNFetchBlob.wrap(image.path), {
              type: 'image/png'
            });
          })
          .then(file => {
            form.append('image', JSON.stringify(file));
            return API().post('api/image', form, {
              headers: { 'Content-Type': 'multipart/form-data' }
            });
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
        <EditStoryHeader
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

export default connect(mapStateToProps, mapDispatchToProps)(EditStoryScreen);
