import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSaboresContext } from '../Context/SaboresContext'; // Contexto

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const { setIsLoggedIn } = useSaboresContext();

  const inicioLogin = async () => {
    // Validación básica
    if (!email || !password) {
      Alert.alert('Error', 'Los campos de correo y contraseña son obligatorios');
      return;
    }

    try {
      const respuesta = await fetch('http://192.168.0.192:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await respuesta.json();

      if (respuesta.status === 200) {
        // Login exitoso
        setIsLoggedIn(true);

        // Puedes ajustar esto según lo que envíe tu API
        if (data.rol === 'administrador') {
          navigation.navigate('Administrador' as never);
        } else {
          navigation.navigate('Usuario' as never);
        }
      } else {
        // Error en login
        Alert.alert('Error', data.error || 'Credenciales inválidas');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Hubo un problema al conectar con el servidor');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Iniciar Sesión</Text>
        <Image source={require('../img/restaurante.png')} style={styles.logo} />
        <TextInput
          placeholder="Correo electrónico"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          placeholderTextColor="#aaa"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          placeholder="Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
          placeholderTextColor="#aaa"
        />
        <Button title="Iniciar Sesión" onPress={inicioLogin} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
  },
  title: {
    fontFamily: 'Calibri',
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  card: {
    width: '90%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 20,
    alignSelf: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    width: '100%',
    borderRadius: 5,
  },
});

export default Login;

