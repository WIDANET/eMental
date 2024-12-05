import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import Header from '../../components/HeaderBack';


export default function App() {
  return (
    
    <View style={styles.container}>
        <Header />
        
      <Text style={styles.homeText}></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Permite que a View ocupe toda a tela
    backgroundColor: '#fff', // Cor de fundo da tela
  },
  homeText: {
    fontSize: 32, // Tamanho da fonte
    fontWeight: 'bold', // Peso da fonte
    color: '#333', // Cor do texto
  }
});
