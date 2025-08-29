import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchBar = ({ value, onChangeText, placeholder = "Buscar..." }) => {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={24} color="#2196F3" style={styles.icon} />
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#A0A8B0"
        autoCapitalize="none"
        autoCorrect={false}
      />
      {value.length > 0 && (
        <Ionicons name="close-circle" size={24} color="#A0A8B0" style={styles.clearIcon} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E222A',
    borderRadius: 30,
    paddingHorizontal: 20,
    marginHorizontal: 15,
    marginVertical: 20,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.35,
    shadowRadius: 6,
    borderWidth: 1,
    borderColor: 'rgba(33, 150, 243, 0.3)',
  },
  icon: {
    marginRight: 15,
  },
  input: {
    flex: 1,
    height: 55,
    color: '#F0F6FC',
    fontSize: 18,
  },
  clearIcon: {
    marginLeft: 15,
  },
});

export default SearchBar;
