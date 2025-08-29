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

const StarshipsScreen = ({ navigation }) => {
  const [starships, setStarships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    loadStarships();
  }, []);

  const loadStarships = async () => {
    try {
      setLoading(true);
      const data = await starWarsApi.getStarships(page);
      setStarships(prev => [...prev, ...data.results]);
      setHasMore(data.next !== null);
      setPage(prev => prev + 1);
    } catch (error) {
      console.error('Erro ao carregar naves:', error);
    } finally {
      setLoading(false);
    }
  };

  const renderStarship = ({ item }) => (
    <View style={styles.starshipCard}>
      <Text style={styles.starshipName}>{item.name}</Text>
      <View style={styles.starshipInfo}>
        <Text style={styles.starshipDetail}>Modelo: {item.model}</Text>
        <Text style={styles.starshipDetail}>Fabricante: {item.manufacturer}</Text>
        <Text style={styles.starshipDetail}>Classe: {item.starship_class}</Text>
        <Text style={styles.starshipDetail}>Tripulação: {item.crew}</Text>
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
        <Text style={styles.title}>Naves Espaciais</Text>
      </View>

      <FlatList
        data={starships}
        renderItem={renderStarship}
        keyExtractor={(item) => item.url}
        style={styles.list}
        onEndReached={() => hasMore && loadStarships()}
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
  starshipCard: {
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
  starshipName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 10,
  },
  starshipInfo: {
    gap: 5,
  },
  starshipDetail: {
    fontSize: 14,
    color: '#fff',
  },
  loadingFooter: {
    paddingVertical: 20,
    alignItems: 'center',
  },
});

export default StarshipsScreen;
