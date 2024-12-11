import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Header from '../../components/Header';

export default function Profile() {
  // Dados estáticos por enquanto
  const user = {
    name: 'Matteo Valentino',
    username: '@matteovalentino',
    bio: 'Sou Matteo, tenho 25 anos e estudo T.I. Trabalho como operador de caixa, e divido meu tempo entre a academia, uma alimentação saudável e vídeo games. Enfrento desafios pessoais diariamente, mas continuo firme na busca de um futuro melhor. Meu sonho é morar fora e construir uma família grande.',
    image: 'https://via.placeholder.com/150', // Link para imagem estática (placeholder)
  };

  return (
    <View style={styles.container}>
      <Header />

      <Text style={styles.title}>Perfil</Text>

      <View style={styles.profileSection}>
        <Image source={{ uri: user.image }} style={styles.profileImage} />
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.username}>{user.username}</Text>
        <Text style={styles.titleBio}>Biografia:</Text>
        <Text style={styles.bio}>{user.bio}</Text>

        <TouchableOpacity style={styles.button} onPress={() => console.log("funcionando")}>
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#696969',
    marginTop: 10,
  },
  profileSection: {
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#e9e9e9',
    marginBottom: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  username: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
  },
  titleBio: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#696969',
    textAlign: 'left',
    width: '100%', // Garante que o texto ocupe toda a largura disponível
    marginBottom: 15, // Espaçamento inferior
  },
  bio: {
    fontSize: 14,
    color: '#555',
    textAlign: 'justify', // Alinha o texto da biografia de forma justificada
    lineHeight: 20,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#F7CAC9',
    width: '57%',
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
    fontSize: 15,
    color: '#696969',
    fontWeight: 'bold',
  },
});