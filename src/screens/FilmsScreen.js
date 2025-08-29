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
import { Ionicons } from '@expo/vector-icons';
import { starWarsApi } from '../services/starWarsApi';

const FilmsScreen = ({ navigation }) => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadFilms();
  }, []);

  const loadFilms = async () => {
    try {
      setLoading(true);
      const data = await starWarsApi.getFilms();
      setFilms(data.results);
    } catch (error) {
      console.error('Erro ao carregar filmes:', error);
    } finally {
      setLoading(false);
    }
  };

  const getFilmIcon = (episodeId) => {
    if (!episodeId) return 'film-outline';
    return 'film';
  };

  const getFilmColor = (episodeId) => {
    if (!episodeId) return '#FF6B6B'; // Para filmes spin-off
    const colors = [
      '#4ECDC4', // Ep 1
      '#45B7D1', // Ep 2
      '#FF6B6B', // Ep 3
      '#FFD700', // Ep 4
      '#96CEB4', // Ep 5
      '#FFE66D', // Ep 6
      '#A8E6CF', // Ep 7
      '#FFB347', // Ep 8
      '#87CEEB', // Ep 9
    ];
    return colors[episodeId - 1] || '#FF6B6B';
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR');
  };

  const renderFilm = ({ item }) => (
    <View style={[styles.filmCard, { borderLeftColor: getFilmColor(item.episode_id) }]}>
      <View style={styles.filmHeader}>
        <View style={[styles.episodeBadge, { backgroundColor: getFilmColor(item.episode_id) }]}>
          <Ionicons name={getFilmIcon(item.episode_id)} size={20} color="#fff" />
          <Text style={styles.episodeText}>
            {item.episode_id ? `Ep. ${item.episode_id}` : 'Spin-off'}
          </Text>
        </View>
        <Text style={styles.releaseDate}>{formatDate(item.release_date)}</Text>
      </View>

      <Text style={styles.filmTitle}>{item.title}</Text>
      
      <View style={styles.filmInfo}>
        <View style={styles.infoRow}>
          <Ionicons name="person" size={16} color="#FFD700" />
          <Text style={styles.infoText}>Diretor: {item.director}</Text>
        </View>
        <View style={styles.infoRow}>
          <Ionicons name="people" size={16} color="#FFD700" />
          <Text style={styles.infoText}>Produtor: {item.producer}</Text>
        </View>
      </View>

      <View style={styles.openingCrawlContainer}>
        <Text style={styles.openingCrawlLabel}>Abertura:</Text>
        <Text style={styles.openingCrawlText} numberOfLines={3}>
          {item.opening_crawl}
        </Text>
      </View>
    </View>
  );

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.backButton}>← Voltar</Text>
          </TouchableOpacity>
          <Text style={styles.title}>Filmes</Text>
        </View>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#FFD700" />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>← Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Saga Star Wars</Text>
      </View>

      <View style={styles.intro}>
        <Text style={styles.introText}>
          Explore todos os filmes da saga Star Wars
        </Text>
      </View>

      <FlatList
        data={films}
        renderItem={renderFilm}
        keyExtractor={(item) => item.url}
        style={styles.list}
        showsVerticalScrollIndicator={false}
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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  intro: {
    padding: 20,
    alignItems: 'center',
  },
  introText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    opacity: 0.8,
  },
  list: {
    flex: 1,
    padding: 10,
  },
  filmCard: {
    backgroundColor: '#2a2a2a',
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    borderLeftWidth: 4,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
  },
  filmHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  episodeBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  episodeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  releaseDate: {
    color: '#888',
    fontSize: 12,
  },
  filmTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 15,
  },
  filmInfo: {
    marginBottom: 15,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  infoText: {
    fontSize: 14,
    color: '#fff',
    marginLeft: 8,
  },
  openingCrawlContainer: {
    backgroundColor: '#1a1a1a',
    borderRadius: 10,
    padding: 15,
  },
  openingCrawlLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 5,
  },
  openingCrawlText: {
    fontSize: 12,
    color: '#ccc',
    lineHeight: 18,
    fontStyle: 'italic',
  },
});

export default FilmsScreen;
