import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, StatusBar, ScrollView, TouchableOpacity } from 'react-native';
import Header from '../../components/Header';
import Carousel from '../../components/Carrossel';
import { useNavigation } from '@react-navigation/native';
import StorageService from '../../services/storageService'; // Assumindo que você criou esse serviço

export default function App() {
  const [userName, setUserName] = useState(''); // Estado para o nome do usuário
  const navigation = useNavigation();

  // Busca os dados do usuário no Local Storage ao carregar o componente
  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const userData = await StorageService.getUserData(); // Recupera os dados armazenados
        if (userData?.nome) {
          setUserName(userData.nome); // Define o nome do usuário no estado
        } else {
          setUserName('Visitante'); // Nome padrão caso não exista no local storage
        }
      } catch (error) {
        console.error('Erro ao buscar dados do usuário:', error);
        setUserName('Visitante'); // Nome padrão em caso de erro
      }
    };

    fetchUserName();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Header />
      <Text style={styles.BoasVindas}>Bem-vindo, {userName}!</Text>
      <Carousel />

      <View style={styles.phraseContainer}>
        <Text style={styles.phraseTitle}>Frase do dia:</Text>
        <Text style={styles.phraseText}>
          Um homem sem história é como um livro sem letras. - Augusto Cury
        </Text>
      </View>

      <Text style={styles.texto}>Como você está se sentindo hoje? ☺</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Registro')}>
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
    marginTop: 60,
    marginHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    width: '86%',
    alignSelf: 'center',
    elevation: 20, 
  },
  phraseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: "#696969",
    
  },
  phraseText: {
    fontSize: 16,
    color: "#696969", 
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
    marginTop: 50,
    fontSize: 16,
    color: "#696969", 
  },
  BoasVindas: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 32,
    color: "#696969",
    marginBottom:  20,
  },
});
