import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import { starWarsApi } from '../services/starWarsApi';

const CharactersScreen = ({ navigation }) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    loadCharacters();
  }, []);

  const loadCharacters = async () => {
    try {
      setLoading(true);
      const data = await starWarsApi.getCharacters(page);
      setCharacters(prev => [...prev, ...data.results]);
      setHasMore(data.next !== null);
      setPage(prev => prev + 1);
    } catch (error) {
      console.error('Erro ao carregar personagens:', error);
    } finally {
      setLoading(false);
    }
  };

  const getCharacterId = (url) => {
    const parts = url.split('/');
    return parts[parts.length - 2];
  };

  const renderCharacter = ({ item }) => (
    <TouchableOpacity
      style={styles.characterCard}
      onPress={() => navigation.navigate('CharacterDetail', { 
        characterId: getCharacterId(item.url),
        character: item 
      })}
    >
      <Text style={styles.characterName}>{item.name}</Text>
      <View style={styles.characterInfo}>
        <Text style={styles.characterDetail}>Altura: {item.height}cm</Text>
        <Text style={styles.characterDetail}>Peso: {item.mass}kg</Text>
        <Text style={styles.characterDetail}>Cor dos olhos: {item.eye_color}</Text>
        <Text style={styles.characterDetail}>Cor do cabelo: {item.hair_color}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderFooter = () => {
    if (!loading) return null;
    return (
      <View style={styles.loadingFooter}>
        <ActivityIndicator size="large" color="#FFD700" />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButtonContainer}>
          <Text style={styles.backButton}>← Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Personagens</Text>
      </View>

      <FlatList
        data={characters}
        renderItem={renderCharacter}
        keyExtractor={(item) => item.url}
        style={styles.list}
        onEndReached={() => hasMore && loadCharacters()}
        onEndReachedThreshold={0.1}
        ListFooterComponent={renderFooter}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0A0A',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#121212',
    paddingVertical: 30,
    shadowColor: '#00C0FF',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.7,
    shadowRadius: 15,
    elevation: 20,
  },
  backButtonContainer: {
    paddingRight: 15,
  },
  backButton: {
    color: '#00C0FF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFF',
    textShadowColor: '#00C0FF',
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 5,
  },
  list: {
    flex: 1,
    padding: 20,
  },
  characterCard: {
    backgroundColor: '#1E222A',
    borderRadius: 18,
    padding: 22,
    marginBottom: 18,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 7,
    borderLeftWidth: 6,
    borderLeftColor: '#00C0FF',
  },
  characterName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 12,
    textShadowColor: 'rgba(0, 0, 0, 0.7)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  characterInfo: {
    gap: 10,
  },
  characterDetail: {
    fontSize: 17,
    color: '#E0E0E0',
  },
  loadingFooter: {
    paddingVertical: 35,
    alignItems: 'center',
  },
});

export default CharactersScreen;
