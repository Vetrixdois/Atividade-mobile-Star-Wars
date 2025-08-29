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

const PlanetsScreen = ({ navigation }) => {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    loadPlanets();
  }, []);

  const loadPlanets = async () => {
    try {
      setLoading(true);
      const data = await starWarsApi.getPlanets(page);
      setPlanets(prev => [...prev, ...data.results]);
      setHasMore(data.next !== null);
      setPage(prev => prev + 1);
    } catch (error) {
      console.error('Erro ao carregar planetas:', error);
    } finally {
      setLoading(false);
    }
  };

  const renderPlanet = ({ item }) => (
    <View style={styles.planetCard}>
      <Text style={styles.planetName}>{item.name}</Text>
      <View style={styles.planetInfo}>
        <Text style={styles.planetDetail}>Clima: {item.climate}</Text>
        <Text style={styles.planetDetail}>Terreno: {item.terrain}</Text>
        <Text style={styles.planetDetail}>População: {item.population}</Text>
        <Text style={styles.planetDetail}>Diâmetro: {item.diameter}km</Text>
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
        <Text style={styles.title}>Planetas</Text>
      </View>

      <FlatList
        data={planets}
        renderItem={renderPlanet}
        keyExtractor={(item) => item.url}
        style={styles.list}
        onEndReached={() => hasMore && loadPlanets()}
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
  planetCard: {
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
  planetName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 10,
  },
  planetInfo: {
    gap: 5,
  },
  planetDetail: {
    fontSize: 14,
    color: '#fff',
  },
  loadingFooter: {
    paddingVertical: 20,
    alignItems: 'center',
  },
});

export default PlanetsScreen;
