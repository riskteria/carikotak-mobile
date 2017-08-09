import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, View, Label, Text } from 'native-base';

import HelpScreenHeader from './HelpScreenHeader';
import styles from './styles';

class HelpScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigation } = this.props;

    return (
      <Container style={StyleSheet.flatten(styles.mainContainer)}>
        <HelpScreenHeader navigation={navigation} />

        <Content>
          <View style={StyleSheet.flatten(styles.sectionContainer)}>
            <Label style={StyleSheet.flatten(styles.textLabel)}>
              Q: Apa itu Carikotak?
            </Label>
            <Text style={StyleSheet.flatten(styles.textNote)}>
              Carikotak adalah aplikasi social marketplace yang mempermudah produsen dan konsumen kotak kemasan dalam hal berkomunikasi, serta memudahkan perajin kotak kemasan untuk memasarkan kotak kemasan olahan sendiri.
            </Text>
					</View>

          <View style={StyleSheet.flatten(styles.sectionContainer)}>
            <Label style={StyleSheet.flatten(styles.textLabel)}>
              Q: Bagaimana cara memasang konten produk kotak kemasan ?
            </Label>
            <Text style={StyleSheet.flatten(styles.textNote)}>
              Anda harus login terlebih dahulu, pada aplikasi web anda dapat mengklik tombol tambah produk pada beranda aplikasi. Pada aplikasi mobile anda dapat megklik ikon tambah pada beranda aplikasi dan memilih produk.
            </Text>
          </View>

          <View style={StyleSheet.flatten(styles.sectionContainer)}>
            <Label style={StyleSheet.flatten(styles.textLabel)}>
              Q: Bagaimana cara memasang konten cerita kotak kemasan ?
            </Label>
            <Text style={StyleSheet.flatten(styles.textNote)}>
              Anda harus login terlebih dahulu, pada aplikasi web anda dapat mengklik tombol tulis cerita pada beranda aplikasi. Pada aplikasi mobile anda dapat megklik ikon tambah pada beranda aplikasi dan memilih cerita.
            </Text>
          </View>

          <View style={StyleSheet.flatten(styles.sectionContainer)}>
            <Label style={StyleSheet.flatten(styles.textLabel)}>
              Q: Bagaimana saya membeli produk dalam aplikasi ini ?
            </Label>
            <Text style={StyleSheet.flatten(styles.textNote)}>
              Anda dapat menghubungi penjual dengan fitur pesan yang disediakan pada aplikasi, atau anda dapat menghubunginya dengan nomor telepon pada profil penjual, dan menanyakan metode pembelian yang ia inginkan.
            </Text>
          </View>

          <View style={StyleSheet.flatten(styles.sectionContainer)}>
            <Label style={StyleSheet.flatten(styles.textLabel)}>
              Q: Bagaimana saya memberi rating produk ?
            </Label>
            <Text style={StyleSheet.flatten(styles.textNote)}>
              Anda harus login terlebih dahulu, pada beranda aplikasi terdapat thumbnail produk, kemudian anda dapat memberi rating dengan mengklik berapa bintang yang akan anda beri pada produk tersebut. Anda juga dapat memberi rating ketika anda membuka produk tersebut.
            </Text>
          </View>

          <View style={StyleSheet.flatten(styles.sectionContainer)}>
            <Label style={StyleSheet.flatten(styles.textLabel)}>
              Q: Apa keuntunngan saya mengikuti pengguna lain ?
            </Label>
            <Text style={StyleSheet.flatten(styles.textNote)}>
              Anda akan mendapat pemberitahuan jika pengguna yang anda ikuti memasang konten.
            </Text>
          </View>

          <View style={StyleSheet.flatten(styles.sectionContainer)}>
            <Label style={StyleSheet.flatten(styles.textLabel)}>
              Q: Ikon notifikasi berfungsi untuk apa ?
            </Label>
            <Text style={StyleSheet.flatten(styles.textNote)}>
              Ikon notifikasi berfungsi untuk memberitahu kepada anda seseorang yang memfavoritkan konten adan, mengomentari konten anda, dan konten yang dibuat oleh  pengguna yang anda ikuti.
            </Text>
          </View>

          <View style={StyleSheet.flatten(styles.sectionContainer)}>
            <Label style={StyleSheet.flatten(styles.textLabel)}>
              Q: Tombol sarankan berfungsi untuk apa ?
            </Label>
            <Text style={StyleSheet.flatten(styles.textNote)}>
              Tombol sarankan berfungsi untuk mengirim link kepada pengguna tujuan yang anda sarankan. Link tersebut akan masuk ke pesan pengguna  tujuan.
            </Text>
          </View>

          <View style={StyleSheet.flatten(styles.sectionContainer)}>
            <Label style={StyleSheet.flatten(styles.textLabel)}>
              Q: Tombol temukan kotak berfungsi untuk apa ?
            </Label>
            <Text style={StyleSheet.flatten(styles.textNote)}>
              Tombol temukan kotak berfungsi untuk memudahkan anda memfilter produk yang anda cari.
            </Text>
          </View>

          <View style={StyleSheet.flatten(styles.sectionContainer)}>
            <Label style={StyleSheet.flatten(styles.textLabel)}>
              Q: Bagaimana cara menggan kata sandi saya ?
            </Label>
            <Text style={StyleSheet.flatten(styles.textNote)}>
              anda dapat mengganti kata sandi pada menu profil bagian pengaturan akun
            </Text>
          </View>
        </Content>
      </Container>
    );
  }
}

export default HelpScreen;
