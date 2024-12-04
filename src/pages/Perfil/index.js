import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.homeText}>Perfil</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Permite que a View ocupe toda a tela
    justifyContent: 'center', // Alinha o conteúdo verticalmente no centro
    alignItems: 'center', // Alinha o conteúdo horizontalmente no centro
    backgroundColor: '#f7f7f7', // Cor de fundo da tela
  },
  homeText: {
    fontSize: 32, // Tamanho da fonte
    fontWeight: 'bold', // Peso da fonte
    color: '#333', // Cor do texto
  }
});
