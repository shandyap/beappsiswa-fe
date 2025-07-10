// Definisikan alamat dasar (base URL) dari backend kamu
const BASE_URL = 'http://localhost:3000/api';

const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Terjadi kesalahan pada server');
  }
  return response.json();
};

export const getAllBeasiswa = async () => {
  const response = await fetch(`${BASE_URL}/beasiswa`);
  const data = await handleResponse(response);
  return data.data.scholarships;
};

export const getBeasiswaById = async (id) => {
  const response = await fetch(`${BASE_URL}/beasiswa/${id}`);
  const data = await handleResponse(response);
  return data.data; 
};

export const getAllLomba = async () => {
  const response = await fetch(`${BASE_URL}/lomba`);
  const data = await handleResponse(response);

  return data.data.competitions;
};

export const getLombaById = async (id) => {
  const response = await fetch(`${BASE_URL}/lomba/${id}`);
  const data = await handleResponse(response);
  return data.data;
};