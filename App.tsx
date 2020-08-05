import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {WelcomeScreen} from './src/screen/WelcomeScreen';
import {ViewImageScreen} from './src/screen/ViewImageScreen';

const App = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ViewImageScreen />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
