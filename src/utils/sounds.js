import { Audio } from 'expo-av';

export const soundEffects = {
  // Carregar som
  loadSound: async (soundFile) => {
    try {
      const { sound } = await Audio.Sound.createAsync(soundFile);
      return sound;
    } catch (error) {
      console.error('Erro ao carregar som:', error);
      return null;
    }
  },

  // Tocar som de navegação
  playNavigationSound: async () => {
    try {
      // Simular som de navegação (você pode adicionar arquivos de som reais)
      console.log('🔊 Som de navegação tocado');
    } catch (error) {
      console.error('Erro ao tocar som:', error);
    }
  },

  // Tocar som de seleção
  playSelectionSound: async () => {
    try {
      console.log('🔊 Som de seleção tocado');
    } catch (error) {
      console.error('Erro ao tocar som:', error);
    }
  },

  // Tocar som de erro
  playErrorSound: async () => {
    try {
      console.log('🔊 Som de erro tocado');
    } catch (error) {
      console.error('Erro ao tocar som:', error);
    }
  }
};

// Configurar áudio
export const configureAudio = async () => {
  try {
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      staysActiveInBackground: false,
      playsInSilentModeIOS: true,
      shouldDuckAndroid: true,
      playThroughEarpieceAndroid: false,
    });
  } catch (error) {
    console.error('Erro ao configurar áudio:', error);
  }
};
