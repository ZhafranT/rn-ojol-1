import React from 'react';
import {StyleSheet, View, Text, Image, Br} from 'react-native';
import ActionButton from './ActionButton';

// colors
import {Colors} from '../utils';
// img
import {MenuAuth} from '../../assets';

const Menuauth = () => {
  return (
    <View style={styles.container}>
      <Image source={MenuAuth} style={styles.image} />
      <Text style={styles.heading}>
        Selamat Datang {'\n'}
        di Pelayanan Konsumen
      </Text>
      <ActionButton desc="Silakan masuk, jika sudah punya akun" title="Masuk" />
      <ActionButton desc="Jika belum bisa daftar disini" title="Daftar" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: 100,
    height: 100,
    position: 'relative',
    bottom: 100,
    right: 140,
  },
  heading: {
    fontSize: 18,
    fontWeight: '500',
    color: 'black',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default Menuauth;
