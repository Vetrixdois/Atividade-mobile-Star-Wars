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

const SpeciesScreen = ({ navigation }) => {
  const [species, setSpecies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    loadSpecies();
  }, []);

  const loadSpecies = async () => {
    try {
      setLoading(true);
      const data = await starWarsApi.getSpecies(page);
      setSpecies(prev => [...prev, ...data.results]);
      setHasMore(data.next !== null);
      setPage(prev => prev + 1);
    } catch (error) {
      console.error('Erro ao carregar espécies:', error);
    } finally {
      setLoading(false);
    }
  };

  const renderSpecies = ({ item }) => (
    <View style={styles.speciesCard}>
      <Text style={styles.speciesName}>{item.name}</Text>
      <View style={styles.speciesInfo}>
        <Text style={styles.speciesDetail}>Classificação: {item.classification}</Text>
        <Text style={styles.speciesDetail}>Designação: {item.designation}</Text>
        <Text style={styles.speciesDetail}>Altura média: {item.average_height}cm</Text>
        <Text style={styles.speciesDetail}>Expectativa de vida: {item.average_lifespan} anos</Text>
      </View>
    </View>
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
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>← Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Espécies</Text>
      </View>

      <FlatList
        data={species}
        renderItem={renderSpecies}
        keyExtractor={(item) => item.url}
        style={styles.list}
        onEndReached={() => hasMore && loadSpecies()}
        onEndReachedThreshold={0.1}
        ListFooterComponent={renderFooter}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#000',
  },
  backButton: {
    color: '#FFD700',
    fontSize: 16,
    marginRight: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFD700',
  },
  list: {
    flex: 1,
    padding: 10,
  },
  speciesCard: {
    backgroundColor: '#2a2a2a',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  speciesName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 10,
  },
  speciesInfo: {
    gap: 5,
  },
  speciesDetail: {
    fontSize: 14,
    color: '#fff',
  },
  loadingFooter: {
    paddingVertical: 20,
    alignItems: 'center',
  },
});

export default SpeciesScreen;
