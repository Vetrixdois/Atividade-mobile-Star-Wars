import axios from 'axios';
import { 
  mockCharacters, 
  mockFilms, 
  mockPlanets, 
  mockStarships, 
  mockVehicles, 
  mockSpecies 
} from './mockData';

const BASE_URL = 'https://swapi.dev/api';

// Função para simular delay da API
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const starWarsApi = {
  // Buscar todos os personagens
  getCharacters: async (page = 1) => {
    try {
      const response = await axios.get(`${BASE_URL}/people/?page=${page}`);
      return response.data;
    } catch (error) {
      console.log('Usando dados mock para personagens');
      await delay(500); // Simular delay da API
      return {
        results: mockCharacters,
        next: null,
        previous: null,
        count: mockCharacters.length
      };
    }
  },

  // Buscar um personagem específico
  getCharacter: async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}/people/${id}`);
      return response.data;
    } catch (error) {
      console.log('Usando dados mock para personagem específico');
      await delay(300);
      return mockCharacters[0]; // Retorna Luke Skywalker como fallback
    }
  },

  // Buscar filmes
  getFilms: async (page = 1) => {
    try {
      const response = await axios.get(`${BASE_URL}/films/?page=${page}`);
      return response.data;
    } catch (error) {
      console.log('Usando dados mock para filmes');
      await delay(500);
      return {
        results: mockFilms,
        next: null,
        previous: null,
        count: mockFilms.length
      };
    }
  },

  // Buscar planetas
  getPlanets: async (page = 1) => {
    try {
      const response = await axios.get(`${BASE_URL}/planets/?page=${page}`);
      return response.data;
    } catch (error) {
      console.log('Usando dados mock para planetas');
      await delay(500);
      return {
        results: mockPlanets,
        next: null,
        previous: null,
        count: mockPlanets.length
      };
    }
  },

  // Buscar naves espaciais
  getStarships: async (page = 1) => {
    try {
      const response = await axios.get(`${BASE_URL}/starships/?page=${page}`);
      return response.data;
    } catch (error) {
      console.log('Usando dados mock para naves');
      await delay(500);
      return {
        results: mockStarships,
        next: null,
        previous: null,
        count: mockStarships.length
      };
    }
  },

  // Buscar veículos
  getVehicles: async (page = 1) => {
    try {
      const response = await axios.get(`${BASE_URL}/vehicles/?page=${page}`);
      return response.data;
    } catch (error) {
      console.log('Usando dados mock para veículos');
      await delay(500);
      return {
        results: mockVehicles,
        next: null,
        previous: null,
        count: mockVehicles.length
      };
    }
  },

  // Buscar espécies
  getSpecies: async (page = 1) => {
    try {
      const response = await axios.get(`${BASE_URL}/species/?page=${page}`);
      return response.data;
    } catch (error) {
      console.log('Usando dados mock para espécies');
      await delay(500);
      return {
        results: mockSpecies,
        next: null,
        previous: null,
        count: mockSpecies.length
      };
    }
  }
};
