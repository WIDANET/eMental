import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createUser } from '../../services/userService';

export default function SignUp() {
  const navigation = useNavigation();

  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    usuario: '',
    email: '',
    senha: '',
  });

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    const emptyField = Object.values(formData).some((value) => value.trim() === '');
    if (emptyField) {
      alert('Por favor, preencha todos os campos!');
      return;
    }

    try {
      const response = await createUser(formData);
      console.log('Usuário cadastrado:', response);
      navigation.navigate('SignIn');
    } catch (error) {
      console.error('Erro ao cadastrar:', error);
      alert('Erro ao cadastrar usuário');
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.message}>Cadastre-se!</Text>

        <View style={styles.containerForm}>
          <Text style={styles.title}>Nome</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu primeiro nome..."
            value={formData.nome}
            onChangeText={(value) => handleChange('nome', value)}
          />

          <Text style={styles.title}>Sobrenome</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu sobrenome..."
            value={formData.sobrenome}
            onChangeText={(value) => handleChange('sobrenome', value)}
          />

          <Text style={styles.title}>Usuário</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: @matteovalentino"
            value={formData.usuario}
            onChangeText={(value) => handleChange('usuario', value)}
          />

          <Text style={styles.title}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu email..."
            value={formData.email}
            onChangeText={(value) => handleChange('email', value)}
            keyboardType="email-address"
          />

          <Text style={styles.title}>Senha</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite sua senha..."
            secureTextEntry
            value={formData.senha}
            onChangeText={(value) => handleChange('senha', value)}
          />
        </View>

        <View style={styles.footer}>
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonRegister}
            onPress={() => navigation.navigate('SignIn')}
          >
            <Text style={styles.registerText}>Já tenho uma conta!</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7CAC9',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  message: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#696969',
    marginTop: '14%',
    marginBottom: '8%',
    paddingStart: '5%',
  },
  containerForm: {
    backgroundColor: '#FFF',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },
  title: {
    fontSize: 20,
    marginTop: 28,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#696969',
    height: 40,
    marginBottom: 12,
    fontSize: 16,
  },
  footer: {
    paddingBottom: 30,
    backgroundColor: '#FFF',
  },
  button: {
    backgroundColor: '#F7CAC9',
    width: '60%',
    borderRadius: 50,
    paddingVertical: 16,
    marginTop: 10,
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
  buttonRegister: {
    marginTop: 10,
    alignSelf: 'center',
  },
  registerText: {
    fontSize: 15,
    color: '#696969',
  },
});
