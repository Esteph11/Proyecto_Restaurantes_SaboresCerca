import React, { useState } from 'react';  
import { View, TextInput, Button, Text, Alert, StyleSheet } from 'react-native';  

const Login = () => {  
  const [roles, setRoles] = useState('');  
  const [password, setPassword] = useState('');  

  const InicioLogin = () => {   
    const usuarios = {  
      admin: { password: 'admin123', role: 'admin' },  
      Ana Castillo: { password: 'user123', role: 'user' }  
    };  

    // Verificamos las credenciales  
    if (usuarios[roles] && usuarios[roles].password === password) {  
      Alert.alert('Login exitoso', `Eres un ${usuarios[roles].role}`);  
      // Aquí puedes redirigir a diferentes pantallas según el rol  
      if (usuarios[roles].role === 'admin') {  
        // Navegar a pantalla de administrador  
        console.log('Navegar a la pantalla del administrador');  
      } else {  
        // Navegar a pantalla de usuario  
        console.log('Navegar a la pantalla del usuario');  
      }  
    } else {  
      Alert.alert('Login fallido', 'Usuario o contraseña incorrectos');  
    }  
  };  

  return (  
    <View style={styles.container}>  
      <TextInput  
        placeholder="Usuario"  
        value={roles}  
        onChangeText={setRoles}  
        style={styles.input}  
      />  
      <TextInput  
        placeholder="Contraseña"  
        value={password}  
        onChangeText={setPassword}  
        secureTextEntry  
        style={styles.input}  
      />  
      <Button title="Iniciar sesión" onPress={handleLogin} />  
    </View>  
  );  
};  

const styles = StyleSheet.create({  
  container: {  
    padding: 20,  
    justifyContent: 'center',  
    alignItems: 'center',  
  },  
  input: {  
    marginBottom: 10,  
    borderWidth: 1,  
    padding: 10,  
    width: '100%',  
  },  
});  

export default Login;  
