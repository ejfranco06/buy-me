import React from 'react';
import {View, StyleSheet, ImageBackground, Text, Image} from 'react-native';

const img = require('../asset/chair.jpg');

export const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <View style={[styles.btn, styles.btn1]}></View>
        <View style={[styles.btn, styles.btn2]}></View>
      </View>
      {/* <View style={styles.imgContainer}> */}
      <Image style={styles.img} source={img} />
      {/* </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  img: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },

  buttonContainer: {
    width: '100%',
    flex: 0.15,
    padding: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  btn: {
    width: 50,
    height: 50,
  },

  btn1: {
    backgroundColor: '#fc5c65',
  },
  btn2: {
    backgroundColor: '#4ECDC4',
  },

  imgContainer: {
    flex: 0.8,
    backgroundColor: 'red',
  },
});
