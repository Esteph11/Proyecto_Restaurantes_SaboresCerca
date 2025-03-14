import React, { useState } from 'react';  
import { View, TextInput, Button, Text, Alert } from 'react-native';  

const Login = () => {  
  const [username, setUsername] = useState('');  
  const [password, setPassword] = useState('');  

  const handleLogin = () => {  
  if (username === 'admin' && password === 'admin123') {  
      Alert.alert('Login exitoso', 'Eres un administrador');  
    } else if (username === 'user' && password === 'user123') {  
      Alert.alert('Login exitoso', 'Eres un usuario');  
    } else {  
      Alert.alert('Login fallido', 'Usuario o contraseña incorrectos');  
    }  
  };  

  return (  
    <View style={{ padding: 20 }}>  
      <TextInput  
        placeholder="Usuario"  
        value={username}  
        onChangeText={setUsername}  
        style={{ marginBottom: 10, borderWidth: 1, padding: 10 }}  
      />  
      <TextInput  
        placeholder="Contraseña"  
        value={password}  
        onChangeText={setPassword}  
        secureTextEntry  
        style={{ marginBottom: 10, borderWidth: 1, padding: 10 }}  
      />  
      <Button title="Iniciar sesión" onPress={handleLogin} />  
    </View>  
  );  
};  

export default Login;  
