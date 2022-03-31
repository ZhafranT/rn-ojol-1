import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Button} from '../../components';

import {Colors} from '../utils';

const ActionButton = ({desc, title}) => {
  return (
    <View style={{marginBottom: 43, maxWidth: 225}}>
      <Text style={styles.subtitle}>{desc}</Text>
      {/* TouchableOpacity itu button  */}
      <Button title={title} />
    </View>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 10,
    color: Colors.text.tColorGrey,
    textAlign: 'center',
    marginBottom: 5,
  },
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

export default ActionButton;
