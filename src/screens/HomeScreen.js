import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
  const menuItems = [
    {
      title: 'Personagens',
      icon: 'people',
      color: '#FF6347', // Tomato
      screen: 'Characters',
      description: 'Explore os heróis e vilões'
    },
    {
      title: 'Filmes',
      icon: 'film',
      color: '#4682B4', // SteelBlue
      screen: 'Films',
      description: 'A saga completa'
    },
    {
      title: 'Planetas',
      icon: 'planet',
      color: '#3CB371', // MediumSeaGreen
      screen: 'Planets',
      description: 'Mundos distantes'
    },
    {
      title: 'Naves Espaciais',
      icon: 'rocket',
      color: '#DAA520', // Goldenrod
      screen: 'Starships',
      description: 'Naves lendárias'
    },
    {
      title: 'Veículos',
      icon: 'car',
      color: '#6A5ACD', // SlateBlue
      screen: 'Vehicles',
      description: 'Transportes únicos'
    },
    {
      title: 'Espécies',
      icon: 'paw',
      color: '#DC143C', // Crimson
      screen: 'Species',
      description: 'Vida alienígena'
    },
    {
      title: 'Estatísticas',
      icon: 'stats-chart',
      color: '#20B2AA', // LightSeaGreen
      screen: 'Stats',
      description: 'Dados do universo'
    },
  ];

  const MenuItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.menuItem, { backgroundColor: item.color }]}
      onPress={() => navigation.navigate(item.screen)}
      activeOpacity={0.8}
    >
      <View style={styles.menuItemContent}>
        <Ionicons name={item.icon} size={40} color="#fff" />
        <Text style={styles.menuItemText}>{item.title}</Text>
        <Text style={styles.menuItemDescription}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>STAR WARS WIKI</Text>
        <Text style={styles.subtitle}>"Que a Força esteja com você!"</Text>
        <View style={styles.headerDecoration}>
          <Ionicons name="star" size={22} color="#2196F3" />
          <Ionicons name="star" size={17} color="#2196F3" />
          <Ionicons name="star" size={22} color="#2196F3" />
        </View>
      </View>
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.menuGrid}>
          {menuItems.map((item, index) => (
            <MenuItem key={index} item={item} />
          ))}
        </View>
        
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Desenvolvido com a Força 💫 | 2024
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D1117',
  },
  header: {
    padding: 35,
    alignItems: 'center',
    backgroundColor: '#161B22',
    borderBottomWidth: 0,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 15,
  },
  title: {
    fontSize: 48,
    fontWeight: '900',
    color: '#F0F6FC',
    marginBottom: 10,
    letterSpacing: 2,
    textShadowColor: 'rgba(33, 150, 243, 0.6)',
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 8,
  },
  subtitle: {
    fontSize: 20,
    color: '#A0A8B0',
    fontStyle: 'italic',
    marginBottom: 20,
    textAlign: 'center',
  },
  headerDecoration: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 18,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  menuGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 15,
  },
  menuItem: {
    width: '48%',
    aspectRatio: 1,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    elevation: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.6,
    shadowRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.15)',
  },
  menuItemContent: {
    alignItems: 'center',
    padding: 10,
  },
  menuItemText: {
    color: '#F0F6FC',
    fontSize: 20,
    fontWeight: '700',
    marginTop: 15,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 4,
  },
  menuItemDescription: {
    color: '#B0B0B0',
    fontSize: 13,
    textAlign: 'center',
    marginTop: 8,
    opacity: 0.95,
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 40,
    marginTop: 30,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.1)',
  },
  footerText: {
    color: '#8B949E',
    fontSize: 16,
    fontStyle: 'italic',
    textShadowColor: 'rgba(0, 0, 0, 0.6)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
});

export default HomeScreen;
