import React from 'react';
import {View, StyleSheet, ImageBackground, Text, Image} from 'react-native';

const bgImg = require('../asset/background.jpg');
const logo = require('../asset/logo-red.png');

export const WelcomeScreen = () => {
  return (
    <ImageBackground source={bgImg} style={styles.bgImage}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={logo} />
        <Text style={styles.text}>Sell What You Don't Need</Text>
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.button1}></View>
        <View style={styles.button2}></View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    top: 70,
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },

  buttonContainer: {
    backgroundColor: 'blue',
    width: '100%',
    height: 120,
  },
  button1: {
    flex: 1,
    backgroundColor: '#fc5c65',
  },
  button2: {
    flex: 1,
    backgroundColor: '#4ECDC4',
  },
  text: {
    color: 'black',
    fontSize: 12,
  },
  bgImage: {
    flex: 1,
    justifyContent: 'space-between',
  },
});
