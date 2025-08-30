import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CharacterCard = ({ character, onPress }) => {
  const getCharacterIcon = (name) => {
    switch (name.toLowerCase()) {
      case 'luke skywalker':
        return 'person';
      case 'darth vader':
        return 'skull';
      case 'princess leia':
        return 'crown';
      case 'han solo':
        return 'rocket';
      case 'chewbacca':
        return 'paw';
      default:
        return 'person';
    }
  };

  const getCharacterColor = (name) => {
    switch (name.toLowerCase()) {
      case 'luke skywalker':
        return '#00C0FF'; // Blue for Jedi
      case 'darth vader':
        return '#FF0000'; // Red for Sith
      case 'princess leia':
        return '#00C0FF'; // Blue for Rebel
      case 'han solo':
        return '#FFD700'; // Gold for Smuggler
      case 'chewbacca':
        return '#A0522D'; // Sienna for Wookiee
      case 'yoda':
        return '#3CB371'; // MediumSeaGreen for Jedi Master
      case 'obi-wan kenobi':
        return '#00C0FF'; // Blue for Jedi
      case 'palpatine':
        return '#FF0000'; // Red for Sith Lord
      default:
        return '#9E9E9E'; // Grey for unknown
    }
  };

  return (
    <TouchableOpacity
      style={[styles.card, { borderLeftColor: getCharacterColor(character.name) }]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.header}>
        <View style={[styles.iconContainer, { backgroundColor: getCharacterColor(character.name) }]}>
          <Ionicons name={getCharacterIcon(character.name)} size={35} color="#121212" />
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{character.name}</Text>
          <Text style={styles.gender}>{character.gender}</Text>
        </View>
      </View>
      
      <View style={styles.details}>
        <View style={styles.detailRow}>
          <Ionicons name="resize" size={22} color="#FFD700" />
          <Text style={styles.detailText}>Altura: {character.height}cm</Text>
        </View>
        <View style={styles.detailRow}>
          <Ionicons name="scale" size={22} color="#FFD700" />
          <Text style={styles.detailText}>Peso: {character.mass}kg</Text>
        </View>
        <View style={styles.detailRow}>
          <Ionicons name="eye" size={22} color="#FFD700" />
          <Text style={styles.detailText}>Olhos: {character.eye_color}</Text>
        </View>
        <View style={styles.detailRow}>
          <Ionicons name="color-palette" size={22} color="#FFD700" />
          <Text style={styles.detailText}>Cabelo: {character.hair_color}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1E222A',
    borderRadius: 20,
    padding: 25,
    marginBottom: 20,
    borderLeftWidth: 8,
    elevation: 12,
    shadowColor: '#00C0FF',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.6,
    shadowRadius: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  iconContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 25,
  },
  nameContainer: {
    flex: 1,
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 8,
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 4,
  },
  gender: {
    fontSize: 16,
    color: '#B0B0B0',
    textTransform: 'uppercase',
    fontStyle: 'normal',
    letterSpacing: 0.5,
  },
  details: {
    gap: 15,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailText: {
    fontSize: 18,
    color: '#E0E0E0',
    marginLeft: 15,
  },
});

export default CharacterCard;
