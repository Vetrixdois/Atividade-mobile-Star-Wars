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
      title: 'PERSONAGENS',
      icon: 'people',
      color: '#00C0FF', // Vibrant Blue
      screen: 'Characters',
      description: 'Explore os heróis e vilões da galáxia.'
    },
    {
      title: 'FILMES',
      icon: 'film',
      color: '#FFD700', // Gold
      screen: 'Films',
      description: 'Acompanhe a saga cinematográfica completa.'
    },
    {
      title: 'PLANETAS',
      icon: 'planet',
      color: '#00D4FF', // Bright Cyan
      screen: 'Planets',
      description: 'Descubra mundos distantes e suas histórias.'
    },
    {
      title: 'NAVES ESPACIAIS',
      icon: 'rocket',
      color: '#FFC300', // Amber
      screen: 'Starships',
      description: 'Pilote naves lendárias e icônicas.'
    },
    {
      title: 'VEÍCULOS',
      icon: 'car',
      color: '#00E5FF', // Electric Blue
      screen: 'Vehicles',
      description: 'Conheça os transportes únicos do universo.'
    },
    {
      title: 'ESPÉCIES',
      icon: 'paw',
      color: '#FF9900', // Orange
      screen: 'Species',
      description: 'Aprenda sobre a vida alienígena e suas culturas.'
    },
    {
      title: 'ESTATÍSTICAS',
      icon: 'stats-chart',
      color: '#00BFFF', // Deep Sky Blue
      screen: 'Stats',
      description: 'Analise dados e fatos do universo Star Wars.'
    },
  ];

  const MenuItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.menuItem, { backgroundColor: item.color }]}
      onPress={() => navigation.navigate(item.screen)}
      activeOpacity={0.7}
    >
      <View style={styles.menuItemContent}>
        <Ionicons name={item.icon} size={45} color="#FFF" />
        <Text style={styles.menuItemText}>{item.title}</Text>
        <Text style={styles.menuItemDescription}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>STAR WARS WIKI</Text>
        <Text style={styles.subtitle}>"Que a Força esteja com você - sempre."</Text>
        <View style={styles.headerDecoration}>
          <Ionicons name="star-four-points" size={28} color="#FFD700" />
          <Ionicons name="planet" size={22} color="#00C0FF" />
          <Ionicons name="star-four-points" size={28} color="#FFD700" />
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
            Uma galáxia de informações ao seu alcance | © 2024
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0A0A',
  },
  header: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
    backgroundColor: '#121212',
    marginBottom: 25,
    shadowColor: '#00C0FF',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.7,
    shadowRadius: 15,
    elevation: 20,
  },
  title: {
    fontSize: 55,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 12,
    letterSpacing: 3,
    textShadowColor: '#00C0FF',
    textShadowOffset: { width: 0, height: 5 },
    textShadowRadius: 10,
    fontFamily: 'Star Jedi', // Assuming a custom font is loaded, otherwise remove
  },
  subtitle: {
    fontSize: 22,
    color: '#E0E0E0',
    fontStyle: 'italic',
    marginBottom: 25,
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  headerDecoration: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  content: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 15,
  },
  menuGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 20,
  },
  menuItem: {
    width: '47%',
    aspectRatio: 1.05,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    elevation: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.7,
    shadowRadius: 15,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  menuItemContent: {
    alignItems: 'center',
    padding: 12,
  },
  menuItemText: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: '800',
    marginTop: 18,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.9)',
    textShadowOffset: { width: 2, height: 3 },
    textShadowRadius: 5,
  },
  menuItemDescription: {
    color: '#B0B0B0',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 10,
    opacity: 0.9,
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 50,
    marginTop: 40,
    borderTopWidth: 1.5,
    borderTopColor: 'rgba(255, 255, 255, 0.15)',
  },
  footerText: {
    color: '#A0A0A0',
    fontSize: 17,
    fontStyle: 'italic',
    textShadowColor: 'rgba(0, 0, 0, 0.7)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
});

export default HomeScreen;
