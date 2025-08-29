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
        return '#4CAF50'; // Green
      case 'darth vader':
        return '#F44336'; // Red
      case 'princess leia':
        return '#2196F3'; // Blue
      case 'han solo':
        return '#FFC107'; // Amber
      case 'chewbacca':
        return '#795548'; // Brown
      default:
        return '#9E9E9E'; // Grey
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
          <Ionicons name={getCharacterIcon(character.name)} size={32} color="#FFFFFF" />
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{character.name}</Text>
          <Text style={styles.gender}>{character.gender}</Text>
        </View>
      </View>
      
      <View style={styles.details}>
        <View style={styles.detailRow}>
          <Ionicons name="resize" size={20} color="#2196F3" />
          <Text style={styles.detailText}>Altura: {character.height}cm</Text>
        </View>
        <View style={styles.detailRow}>
          <Ionicons name="scale" size={20} color="#2196F3" />
          <Text style={styles.detailText}>Peso: {character.mass}kg</Text>
        </View>
        <View style={styles.detailRow}>
          <Ionicons name="eye" size={20} color="#2196F3" />
          <Text style={styles.detailText}>Olhos: {character.eye_color}</Text>
        </View>
        <View style={styles.detailRow}>
          <Ionicons name="color-palette" size={20} color="#2196F3" />
          <Text style={styles.detailText}>Cabelo: {character.hair_color}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1E222A',
    borderRadius: 18,
    padding: 22,
    marginBottom: 18,
    borderLeftWidth: 6,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.4,
    shadowRadius: 7,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  iconContainer: {
    width: 65,
    height: 65,
    borderRadius: 32.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 25,
  },
  nameContainer: {
    flex: 1,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#F0F6FC',
    marginBottom: 6,
    textShadowColor: 'rgba(0, 0, 0, 0.7)',
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 3,
  },
  gender: {
    fontSize: 15,
    color: '#A0A8B0',
    textTransform: 'capitalize',
    fontStyle: 'italic',
  },
  details: {
    gap: 12,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailText: {
    fontSize: 17,
    color: '#F0F6FC',
    marginLeft: 12,
  },
});

export default CharacterCard;
