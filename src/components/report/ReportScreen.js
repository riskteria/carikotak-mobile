import React, { Component } from 'react';
import { StyleSheet, ToastAndroid } from 'react-native';
import {
  Container,
  Text,
  Content,
  Item,
  Label,
  Button,
  Input
} from 'native-base';

import ReportScreenHeader from './ReportScreenHeader';

import styles from './styles';

import { API } from 'services/APIService';

class ReportScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      report: {
        title: '',
        body: ''
      }
    };

    this._onReportSend = this._onReportSend.bind(this);
  }

  _onReportSend() {
    const { navigation } = this.props;
    const { title, body } = this.state.report;
    const { goBack } = navigation;
    const { type, id } = navigation.state.params;

    const data = {
      target_id: id,
      target_type: type,
      title,
      body
    };

    API()
      .post('api/report', data)
      .then(() => {
        ToastAndroid.show('Laporan Berhasil Dikirim', ToastAndroid.SHORT);
        goBack();
      })
      .catch(err => {
        ToastAndroid.show(
          `Error: ${err.respone.data.message}`,
          ToastAndroid.SHORT
        );
      });
  }

  _onChangeText(propertyName, value) {
    switch (propertyName) {
      case 'title':
        this.setState({
          report: Object.assign({}, this.state.report, { title: value })
        });
        break;
      case 'body':
        this.setState({
          report: Object.assign({}, this.state.report, { body: value })
        });
        break;
    }
  }

  render() {
    const { report } = this.state;
    const { navigation } = this.props;
    const { type, title } = navigation.state.params;

    const typeText = () => {
      switch (type) {
        case 'user':
          return 'Pengguna';
        default:
          return 'Kiriman';
      }
    };

    return (
      <Container>
        <ReportScreenHeader navigation={navigation} />

        <Content style={StyleSheet.flatten(styles.reportWrapper)}>
          <Text>
            Laporkan {`${typeText()} `}
            <Text style={StyleSheet.flatten(styles.reportTitle)}>{title}</Text>
          </Text>

          <Item
            stackedLabel
            style={StyleSheet.flatten(styles.sectionContainer)}
          >
            <Label style={StyleSheet.flatten(styles.labelControl)}>
              Alasan
            </Label>
            <Input
              defaultValue={report.title}
              onChangeText={this._onChangeText.bind(this, 'title')}
            />
          </Item>

          <Item
            stackedLabel
            style={StyleSheet.flatten(styles.sectionContainer)}
          >
            <Label style={StyleSheet.flatten(styles.labelControl)}>
              Keterangan
            </Label>
            <Input
              defaultValue={report.body}
              multiline={true}
              numberOfLines={10}
              onChangeText={this._onChangeText.bind(this, 'body')}
            />
          </Item>

          <Button block bordered onPress={() => this._onReportSend()}>
            <Text>Kirim Laporan</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default ReportScreen;
