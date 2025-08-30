import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchBar = ({ value, onChangeText, placeholder = "Buscar..." }) => {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={26} color="#00C0FF" style={styles.icon} />
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
        <Ionicons name="close-circle" size={26} color="#A0A8B0" style={styles.clearIcon} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E222A',
    borderRadius: 35,
    paddingHorizontal: 25,
    marginHorizontal: 20,
    marginVertical: 25,
    elevation: 10,
    shadowColor: '#00C0FF',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    borderWidth: 2,
    borderColor: 'rgba(0, 192, 255, 0.4)',
  },
  icon: {
    marginRight: 18,
  },
  input: {
    flex: 1,
    height: 60,
    color: '#FFF',
    fontSize: 19,
  },
  clearIcon: {
    marginLeft: 18,
  },
});

export default SearchBar;
