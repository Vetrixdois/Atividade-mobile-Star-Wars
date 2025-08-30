import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';

// Importar telas
import RegisterScreen from './src/screens/RegisterScreen';
import AvatarSelectionScreen from './src/screens/AvatarSelectionScreen';
import HomeScreen from './src/screens/HomeScreen';
import CharactersScreen from './src/screens/CharactersScreen';
import FilmsScreen from './src/screens/FilmsScreen';
import PlanetsScreen from './src/screens/PlanetsScreen';
import StarshipsScreen from './src/screens/StarshipsScreen';
import VehiclesScreen from './src/screens/VehiclesScreen';
import SpeciesScreen from './src/screens/SpeciesScreen';
import StatsScreen from './src/screens/StatsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator
        initialRouteName="Register"
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: '#0A0A0A' }
        }}
      >
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="AvatarSelection" component={AvatarSelectionScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Characters" component={CharactersScreen} />
        <Stack.Screen name="Films" component={FilmsScreen} />
        <Stack.Screen name="Planets" component={PlanetsScreen} />
        <Stack.Screen name="Starships" component={StarshipsScreen} />
        <Stack.Screen name="Vehicles" component={VehiclesScreen} />
        <Stack.Screen name="Species" component={SpeciesScreen} />
        <Stack.Screen name="Stats" component={StatsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

