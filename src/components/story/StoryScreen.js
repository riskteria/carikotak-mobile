import React, { Component } from 'react';
import {
  Container,
  Text,
  Header,
  Left,
  Right,
  Title,
  Button,
  Icon,
  Body
} from 'native-base';

import ProgressBar from 'components/_shared/progress-bar/ProgressBar';
import colors from 'styles/_colors';
import { API } from 'services/APIService';

class StoryScreen extends Component {
  constructor(props) {
    super(props);

    this._onGetStory = this._onGetStory.bind(this);

    this.state = {
      story: false,
      loadingSpin: false
    };
  }

  _onGetStory() {
    this.setState({ loadingSpin: true });

    API.get(`api/post/${this.props.navigation.state.params.slug}`)
      .then(res => {
        this.setState({ loadingSpin: false });
        this.setState({ story: res.data });
      })
      .catch(err => {
        this.setState({ loadingSpin: false });
        throw err;
      });
  }

  componentWillMount() {
    this._onGetStory();
  }

  render() {
    const { loadingSpin, story } = this.state;
    const { goBack } = this.props.navigation;

    const StoryDetail = () =>
      <Text>
        {this.state.story.title}
      </Text>;

    return (
      <Container>
        <Header style={{ backgroundColor: colors.colorLight, elevation: 1 }}>
          <Left>
            <Button transparent dark onPress={() => goBack()}>
              <Icon name="md-arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title style={{ color: colors.colorBlack }}>
              {story.title}
            </Title>
          </Body>
          <Right />
        </Header>
        {loadingSpin ? <ProgressBar /> : <StoryDetail />}
      </Container>
    );
  }
}

export default StoryScreen;
