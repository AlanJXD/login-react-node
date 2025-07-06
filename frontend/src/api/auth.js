import axios from 'axios'; 

const API_URL = 'http://localhost:3000/api'; 

export const login = async (credencial, contraseña) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, {
      credencial,
      contraseña
    });
    return response.data;
  } catch (error) {
    console.error('Error en login:', error.response?.data || error.message);
    throw error;
  }
};

export const getUsuarios = async () => {
  try {
    const response = await axios.get(`${API_URL}/usuarios`);
    return response.data;
  } catch (error) {
    console.error('Error obteniendo usuarios:', error);
    throw error;
  }
};