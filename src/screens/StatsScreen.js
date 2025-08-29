import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { starWarsApi } from '../services/starWarsApi';

const StatsScreen = ({ navigation }) => {
  const [stats, setStats] = useState({
    characters: 0,
    films: 0,
    planets: 0,
    starships: 0,
    vehicles: 0,
    species: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      setLoading(true);
      const [characters, films, planets, starships, vehicles, species] = await Promise.all([
        starWarsApi.getCharacters(),
        starWarsApi.getFilms(),
        starWarsApi.getPlanets(),
        starWarsApi.getStarships(),
        starWarsApi.getVehicles(),
        starWarsApi.getSpecies(),
      ]);

      setStats({
        characters: characters.count,
        films: films.count,
        planets: planets.count,
        starships: starships.count,
        vehicles: vehicles.count,
        species: species.count,
      });
    } catch (error) {
      console.error('Erro ao carregar estatísticas:', error);
    } finally {
      setLoading(false);
    }
  };

  const StatCard = ({ title, count, icon, color }) => (
    <View style={[styles.statCard, { borderLeftColor: color }]}>
      <View style={[styles.iconContainer, { backgroundColor: color }]}>
        <Ionicons name={icon} size={30} color="#fff" />
      </View>
      <View style={styles.statInfo}>
        <Text style={styles.statTitle}>{title}</Text>
        <Text style={styles.statCount}>{count}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>← Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Estatísticas</Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.intro}>
          <Text style={styles.introTitle}>Universo Star Wars</Text>
          <Text style={styles.introText}>
            Explore as estatísticas do vasto universo de Star Wars
          </Text>
        </View>

        <View style={styles.statsGrid}>
          <StatCard
            title="Personagens"
            count={stats.characters}
            icon="people"
            color="#FFD700"
          />
          <StatCard
            title="Filmes"
            count={stats.films}
            icon="film"
            color="#FF6B6B"
          />
          <StatCard
            title="Planetas"
            count={stats.planets}
            icon="planet"
            color="#4ECDC4"
          />
          <StatCard
            title="Naves"
            count={stats.starships}
            icon="rocket"
            color="#45B7D1"
          />
          <StatCard
            title="Veículos"
            count={stats.vehicles}
            icon="car"
            color="#96CEB4"
          />
          <StatCard
            title="Espécies"
            count={stats.species}
            icon="paw"
            color="#FFEAA7"
          />
        </View>

        <View style={styles.funFacts}>
          <Text style={styles.funFactsTitle}>Curiosidades</Text>
          <View style={styles.factItem}>
            <Ionicons name="bulb" size={20} color="#FFD700" />
            <Text style={styles.factText}>
              O universo Star Wars tem mais de {stats.characters} personagens únicos
            </Text>
          </View>
          <View style={styles.factItem}>
            <Ionicons name="bulb" size={20} color="#FFD700" />
            <Text style={styles.factText}>
              Existem {stats.planets} planetas documentados na galáxia
            </Text>
          </View>
          <View style={styles.factItem}>
            <Ionicons name="bulb" size={20} color="#FFD700" />
            <Text style={styles.factText}>
              {stats.starships} naves espaciais diferentes foram catalogadas
            </Text>
          </View>
        </View>
      </ScrollView>
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
  content: {
    flex: 1,
    padding: 20,
  },
  intro: {
    alignItems: 'center',
    marginBottom: 30,
  },
  introTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 10,
  },
  introText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    opacity: 0.8,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  statCard: {
    width: '48%',
    backgroundColor: '#2a2a2a',
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    borderLeftWidth: 4,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  statInfo: {
    alignItems: 'center',
  },
  statTitle: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 5,
    textAlign: 'center',
  },
  statCount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFD700',
  },
  funFacts: {
    backgroundColor: '#2a2a2a',
    borderRadius: 15,
    padding: 20,
  },
  funFactsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 15,
  },
  factItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  factText: {
    fontSize: 14,
    color: '#fff',
    marginLeft: 10,
    flex: 1,
  },
});

export default StatsScreen;
