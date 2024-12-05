import React from 'react';
import { View, Text, StyleSheet, StatusBar, ScrollView,TouchableOpacity } from 'react-native';
import Header from '../../components/Header';
import Carousel from '../../components/Carrossel';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <Text style={styles.BoasVindas}>Bem-vindo, Matteo!</Text>
      <Carousel />
      {/* Frase do dia */}
      <View style={styles.phraseContainer}>
        <Text style={styles.phraseTitle}>Frase do dia:</Text>
        <Text style={styles.phraseText}>
          Um homem sem história é como um livro sem letras. - Augusto Cury
        </Text>
      </View>

      <Text style={styles.texto}>Como você está se sentindo hoje? ☺</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate()}>
        <Text style={styles.buttonText}>Registrar</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  phraseContainer: {
    padding: 20,
    marginTop: 90,
    marginHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    width: '86%',
    alignSelf: 'center',
    elevation: 20, // Para Android
  },
  phraseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: "#696969", // Cor especificada para o título
    
  },
  phraseText: {
    fontSize: 16,
    color: "#696969", // Cor especificada para o texto da frase
    marginTop: 10,
  },
  button: {
    backgroundColor: '#F7CAC9',
    width: '60%',
    borderRadius: 50,
    paddingVertical: 16,
    marginTop: 20,
    marginBottom: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
},
buttonText: {
  textAlign: 'center',
  fontSize: 20,
  color: '#696969',
  fontWeight: 'bold',
},
texto: {
  textAlign: 'center',
  marginTop: 110,
  fontSize: 16,
  color: "#696969", // Cor especificada para o texto da frase
},
BoasVindas: {
  fontWeight: 'bold',
  textAlign: 'center',
  fontSize: 32,
  color: "#696969",
  marginBottom:  20,
},
});
