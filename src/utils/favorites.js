import AsyncStorage from '@react-native-async-storage/async-storage';

const FAVORITES_KEY = '@starwars_favorites';

export const favoritesStorage = {
  // Salvar favoritos
  saveFavorites: async (favorites) => {
    try {
      await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    } catch (error) {
      console.error('Erro ao salvar favoritos:', error);
    }
  },

  // Carregar favoritos
  loadFavorites: async () => {
    try {
      const favorites = await AsyncStorage.getItem(FAVORITES_KEY);
      return favorites ? JSON.parse(favorites) : [];
    } catch (error) {
      console.error('Erro ao carregar favoritos:', error);
      return [];
    }
  },

  // Adicionar favorito
  addFavorite: async (item) => {
    try {
      const favorites = await favoritesStorage.loadFavorites();
      const exists = favorites.find(fav => fav.url === item.url);
      
      if (!exists) {
        const newFavorites = [...favorites, item];
        await favoritesStorage.saveFavorites(newFavorites);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Erro ao adicionar favorito:', error);
      return false;
    }
  },

  // Remover favorito
  removeFavorite: async (itemUrl) => {
    try {
      const favorites = await favoritesStorage.loadFavorites();
      const newFavorites = favorites.filter(fav => fav.url !== itemUrl);
      await favoritesStorage.saveFavorites(newFavorites);
      return true;
    } catch (error) {
      console.error('Erro ao remover favorito:', error);
      return false;
    }
  },

  // Verificar se é favorito
  isFavorite: async (itemUrl) => {
    try {
      const favorites = await favoritesStorage.loadFavorites();
      return favorites.some(fav => fav.url === itemUrl);
    } catch (error) {
      console.error('Erro ao verificar favorito:', error);
      return false;
    }
  }
};
