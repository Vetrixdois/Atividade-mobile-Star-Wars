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
        <ActivityIndicator size="large" color="#2196F3" />
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
    backgroundColor: '#0D1117',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#161B22',
    borderBottomWidth: 0,
    paddingVertical: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 15,
  },
  backButtonContainer: {
    paddingRight: 15,
  },
  backButton: {
    color: '#2196F3',
    fontSize: 18,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#F0F6FC',
    textShadowColor: 'rgba(33, 150, 243, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  list: {
    flex: 1,
    padding: 15,
  },
  characterCard: {
    backgroundColor: '#1E222A',
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 6,
    borderLeftWidth: 5,
    borderLeftColor: '#2196F3',
  },
  characterName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#F0F6FC',
    marginBottom: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.6)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  characterInfo: {
    gap: 8,
  },
  characterDetail: {
    fontSize: 16,
    color: '#A0A8B0',
  },
  loadingFooter: {
    paddingVertical: 30,
    alignItems: 'center',
  },
});

export default CharactersScreen;
