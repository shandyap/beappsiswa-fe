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

export const addScholarship = async (scholarshipData) => {
  const response = await fetch(`${BASE_URL}/beasiswa`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(scholarshipData),
  });
  return handleResponse(response);
};

export const updateScholarshipById = async (id, scholarshipData) => {
  const response = await fetch(`${BASE_URL}/beasiswa/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(scholarshipData),
  });
  return handleResponse(response);
};

export const deleteBeasiswaById = async (id) => {
  const response = await fetch(`${BASE_URL}/beasiswa/${id}`, {
    method: 'DELETE',
  });
  return handleResponse(response);
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

export const addCompetition = async (competitionData) => {
  const response = await fetch(`${BASE_URL}/lomba`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(competitionData),
  });
  return handleResponse(response);
};

export const updateCompetitionById = async (id, competitionData) => {
  const response = await fetch(`${BASE_URL}/lomba/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(competitionData),
  });
  return handleResponse(response);
};

export const deleteLombaById = async (id) => {
    const response = await fetch(`${BASE_URL}/lomba/${id}`, {
      method: 'DELETE',
    });
    return handleResponse(response);
};