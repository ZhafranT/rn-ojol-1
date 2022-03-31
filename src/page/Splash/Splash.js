import React, {useEffect} from 'react';
import {View, Image, StyleSheet} from 'react-native';

// img
import {SplahScreen} from '../../assets';
// colors
import {Colors} from '../utils';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MenuAuth'); /*<-----nama Foldernya bukan nama jsnya*/
    }, 4000);
  }, []);

  return (
    <View style={styles.splahScreen}>
      <Image source={SplahScreen} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  splahScreen: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: Colors.text.tColorWhite,
  },
  image: {
    width: 295,
    height: 381,
  },
});

export default Splash;
