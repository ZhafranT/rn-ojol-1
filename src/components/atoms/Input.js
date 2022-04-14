import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

import { Colors } from '../../page/utils';

const Input = ({ placeholder }) => {
  return (
    <>
      <TextInput style={styles.input} placeholder={placeholder} />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 25,
    borderWidth: 1,
    borderColor: Colors.tColorGrey,
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 18,
    fontSize: 18,
  },
});

export default Input;
