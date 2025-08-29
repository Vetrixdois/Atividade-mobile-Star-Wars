import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Alert,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const AvatarSelectionScreen = ({ navigation, route }) => {
  const { email, password } = route.params;
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [nickname, setNickname] = useState('');

  const avatars = [
    {
      id: 1,
      name: 'Luke Skywalker',
      icon: 'person',
      color: '#4ECDC4',
      description: 'O herói da galáxia'
    },
    {
      id: 2,
      name: 'Darth Vader',
      icon: 'skull',
      color: '#FF6B6B',
      description: 'O Lorde Sombrio'
    },
    {
      id: 3,
      name: 'Princess Leia',
      icon: 'crown',
      color: '#FFE66D',
      description: 'A princesa guerreira'
    },
    {
      id: 4,
      name: 'Han Solo',
      icon: 'rocket',
      color: '#45B7D1',
      description: 'O contrabandista'
    },
    {
      id: 5,
      name: 'Chewbacca',
      icon: 'paw',
      color: '#96CEB4',
      description: 'O wookiee leal'
    },
    {
      id: 6,
      name: 'Yoda',
      icon: 'leaf',
      color: '#A8E6CF',
      description: 'O mestre Jedi'
    },
    {
      id: 7,
      name: 'Obi-Wan Kenobi',
      icon: 'shield',
      color: '#FFB347',
      description: 'O guardião da paz'
    },
    {
      id: 8,
      name: 'R2-D2',
      icon: 'hardware-chip',
      color: '#87CEEB',
      description: 'O droide astromecânico'
    }
  ];

  const handleAvatarSelection = (avatar) => {
    setSelectedAvatar(avatar);
  };

  const handleCompleteRegistration = () => {
    if (!selectedAvatar) {
      Alert.alert('Erro', 'Por favor, escolha um avatar');
      return;
    }

    if (!nickname.trim()) {
      Alert.alert('Erro', 'Por favor, escolha um nickname');
      return;
    }

    if (nickname.length < 3) {
      Alert.alert('Erro', 'O nickname deve ter pelo menos 3 caracteres');
      return;
    }

    // Aqui você pode salvar os dados do usuário
    const userData = {
      email,
      password,
      avatar: selectedAvatar,
      nickname: nickname.trim(),
      createdAt: new Date().toISOString()
    };

    console.log('Usuário registrado:', userData);

    // Navegar para a tela principal
    Alert.alert(
      'Bem-vindo!',
      `Que a Força esteja com você, ${nickname}!`,
      [
        {
          text: 'Continuar',
          onPress: () => navigation.navigate('Home')
        }
      ]
    );
  };

  const AvatarCard = ({ avatar, isSelected }) => (
    <TouchableOpacity
      style={[
        styles.avatarCard,
        { borderColor: avatar.color },
        isSelected && { backgroundColor: `${avatar.color}20` }
      ]}
      onPress={() => handleAvatarSelection(avatar)}
    >
      <View style={[styles.avatarIcon, { backgroundColor: avatar.color }]}>
        <Ionicons name={avatar.icon} size={40} color="#fff" />
      </View>
      <Text style={styles.avatarName}>{avatar.name}</Text>
      <Text style={styles.avatarDescription}>{avatar.description}</Text>
      {isSelected && (
        <View style={styles.selectedIndicator}>
          <Ionicons name="checkmark-circle" size={24} color={avatar.color} />
        </View>
      )}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#FFD700" />
        </TouchableOpacity>
        <Text style={styles.title}>Escolha seu Avatar</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.intro}>
          <Text style={styles.introTitle}>Quem você quer ser?</Text>
          <Text style={styles.introText}>
            Escolha seu personagem favorito e crie seu nickname
          </Text>
        </View>

        <View style={styles.nicknameContainer}>
          <Text style={styles.nicknameLabel}>Seu Nickname:</Text>
          <TextInput
            style={styles.nicknameInput}
            placeholder="Digite seu nickname"
            placeholderTextColor="#666"
            value={nickname}
            onChangeText={setNickname}
            maxLength={20}
            autoCapitalize="none"
          />
        </View>

        <View style={styles.avatarsGrid}>
          {avatars.map((avatar) => (
            <AvatarCard
              key={avatar.id}
              avatar={avatar}
              isSelected={selectedAvatar?.id === avatar.id}
            />
          ))}
        </View>

        <TouchableOpacity
          style={[
            styles.completeButton,
            (!selectedAvatar || !nickname.trim()) && styles.disabledButton
          ]}
          onPress={handleCompleteRegistration}
          disabled={!selectedAvatar || !nickname.trim()}
        >
          <Text style={styles.completeButtonText}>Completar Registro</Text>
          <Ionicons name="rocket" size={20} color="#000" />
        </TouchableOpacity>
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
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#000',
  },
  title: {
    fontSize: 20,
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
    fontSize: 24,
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
  nicknameContainer: {
    marginBottom: 30,
  },
  nicknameLabel: {
    fontSize: 16,
    color: '#FFD700',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  nicknameInput: {
    backgroundColor: '#2a2a2a',
    borderRadius: 15,
    padding: 15,
    color: '#fff',
    fontSize: 16,
    borderWidth: 2,
    borderColor: '#FFD700',
  },
  avatarsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  avatarCard: {
    width: '48%',
    backgroundColor: '#2a2a2a',
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'transparent',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  avatarIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  avatarName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFD700',
    textAlign: 'center',
    marginBottom: 5,
  },
  avatarDescription: {
    fontSize: 12,
    color: '#fff',
    textAlign: 'center',
    opacity: 0.7,
  },
  selectedIndicator: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  completeButton: {
    backgroundColor: '#FFD700',
    borderRadius: 15,
    padding: 18,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
  },
  disabledButton: {
    backgroundColor: '#666',
  },
  completeButtonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },
});

export default AvatarSelectionScreen;
