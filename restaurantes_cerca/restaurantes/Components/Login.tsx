import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSaboresContext } from '../Context/SaboresContext'; // Asegúrate de que esto esté correctamente exportado

export default function Login() {
  const navigation = useNavigation();
  const { usuarios } = useSaboresContext(); // Corrección en la importación del contexto
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Función de manejo de inicio de sesión
  const handleLogin = () => {
    const user = usuarios.find(
      (u: { correo_electronico: string; contraseña: string; id_rol: number }) => u.correo_electronico === username
    );

    if (user && user.contraseña === password) {
      Alert.alert('Inicio de sesión exitoso', `Bienvenido ${username}!`);
      if (user.id_rol === 2) {
        navigation.navigate('Administrador' as never); // Asegurar que la navegación no dé errores de tipo
      } else {
        navigation.navigate('Usuario' as never);
      }
    } else {
      Alert.alert('Inicio de sesión fallido', 'Usuario o contraseña inválidos');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
});
