import React from 'react';
import {View, StyleSheet, ImageBackground, Text, Image} from 'react-native';

const bgImg = require('../asset/background.jpg');
const logo = require('../asset/logo-red.png');

export const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    marginTop: 42,
    alignItems: 'center',
  },
  logo: {
    width: 70,
    height: 70,
  },

  buttonContainer: {
    backgroundColor: 'blue',
    width: '100%',
    height: 100,
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
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
