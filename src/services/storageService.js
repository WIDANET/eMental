import AsyncStorage from '@react-native-async-storage/async-storage';
import api from './api'; // Conexão com o backend usando Axios

const StorageService = {
  // Faz a chamada ao backend para buscar os dados do usuário autenticado
  async fetchAndSaveUserData() {
    try {
      // Recupera o token armazenado no AsyncStorage
      const token = await AsyncStorage.getItem('token');
      if (!token) throw new Error('Token não encontrado. Usuário não autenticado.');

      // Faz a requisição ao backend para buscar os dados do usuário
      const response = await api.get('/user', {
        headers: {
          Authorization: `Bearer ${token}`, // Passa o token no cabeçalho
        },
      });

      // Salva os dados do usuário no AsyncStorage
      const userData = response.data; // Supondo que o backend retorna um JSON com os dados do usuário
      await AsyncStorage.setItem('userData', JSON.stringify(userData));

      console.log('Dados do usuário sincronizados com o backend e salvos no AsyncStorage!');
      return userData;
    } catch (error) {
      console.error('Erro ao buscar os dados do usuário no backend:', error);
      throw new Error('Não foi possível buscar os dados do usuário.');
    }
  },

  // Recupera os dados do usuário armazenados localmente
  async getUserData() {
    try {
      const userData = await AsyncStorage.getItem('userData');
      return userData ? JSON.parse(userData) : null;
    } catch (error) {
      console.error('Erro ao recuperar dados do usuário:', error);
      throw new Error('Não foi possível recuperar os dados do usuário.');
    }
  },

  // Remove os dados do usuário armazenados localmente
  async removeUserData() {
    try {
      await AsyncStorage.removeItem('userData');
      await AsyncStorage.removeItem('token'); // Opcional: remove o token também
      console.log('Dados do usuário removidos com sucesso!');
    } catch (error) {
      console.error('Erro ao remover dados do usuário:', error);
      throw new Error('Não foi possível remover os dados do usuário.');
    }
  },
};

export default StorageService;
