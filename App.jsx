import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar, Platform, Text } from 'react-native';

import { HomePage } from './src/views/HomePage';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <HomePage />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
