import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

import Header from '../../components/Header';
import Carousel from '../../components/Carrossel';


export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Carousel />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
})


