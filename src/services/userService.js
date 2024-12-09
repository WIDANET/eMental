import api from './api';

// Função para criar um usuário
export const createUser = async (userData) => {
  try {
    const response = await api.post('/users', userData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Você pode adicionar outras funções para manipular usuários, como login, editar, etc.
