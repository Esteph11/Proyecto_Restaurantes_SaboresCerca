import React, { useState } from 'react';  
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';  
import { useSaboresContext } from '../context/SaboresContext';  // Importa el contexto  

const Login = ({ navigation }) => {  
  const { usuarios } = useSaboresContext(); // Obtiene el contexto de usuarios  
  const [username, setUsername] = useState('');  
  const [password, setPassword] = useState('');  

  const handleLogin = () => {  
    const user = usuarios.find(u => u.correo_electronico === username);  

    if (user && user.contraseña === password) {  
      Alert.alert('Login Successful', `Welcome ${username}!`);  
      if (user.id_rol === 2) {  // Asumiendo que 2 es el rol de Administrador  
        navigation.navigate('AdminScreen');  
      } else {  
        navigation.navigate('UserScreen');  
      }  
    } else {  
      Alert.alert('Login Failed', 'Invalid username or password');  
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
};  

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

export default Login;  
