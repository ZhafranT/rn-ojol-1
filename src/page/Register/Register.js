import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import { MenuAuth } from '../../assets';
import { Input, Button } from '../../components/atoms';

const Register = () => {
  return (
    <View style={styles.container}>
      <Image source={MenuAuth} style={styles.image} />
      <Text
        style={{
          marginTop: 16,
          fontSize: 32,
          color: 'black',
        }}>
        Register
      </Text>
      <View
        style={{
          height: 44,
        }}
      />
      <Input placeholder="Nama Lengkap" />
      <Input placeholder="Email" />
      <Input placeholder="No Headphone" />
      <Input placeholder="Password" />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Button title="Daftar" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  image: {
    marginTop: 25,
  },
});

export default Register;
