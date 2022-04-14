import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Colors } from '../../page/utils';

const Button = ({ title, handlePress }) => {
  return (
    <TouchableOpacity style={styles.buttonLogin} onPress={handlePress}>
      <Text style={styles.textLogin}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonLogin: {
    width: 235,
    backgroundColor: Colors.p2,
    borderRadius: 25,
    paddingVertical: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textLogin: {
    fontSize: 12,
    fontWeight: '500',
    color: Colors.text.tColorWhite,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});

export default Button;
