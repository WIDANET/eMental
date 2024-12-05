import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

import Header from '../../components/Header';


export default function App() {
  return (
    <View style={styles.container}>
      <Header />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
})


