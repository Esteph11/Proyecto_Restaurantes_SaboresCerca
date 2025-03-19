import { View, Text,  TextInput, Alert, StyleSheet,FlatList, Button,TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useContextTarea } from '../Provider/TareaProvider'
import { useNavigation } from '@react-navigation/native';

export default function Home() {

  const [username, setUsername] = useState('');  
  const [password, setPassword] = useState('');  

 const handleLogin = () => {  
        const user = username.find(u => u.correo_electronico === username);  

        if (user && user.contraseña === password) {  
            Alert.alert('Login Successful', `Bienvenido ${username}!`);  
            if (user.id_rol === 2) {  // Asumiendo que 2 es el rol de Administrador  
                navigation.navigate('Administrador');  // Corregido  
            } else {  
                navigation.navigate('Usuario');  // Corregido  
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
        placeholder="Usuario"  
        value={username}  
        onChangeText={setUsername}  
      />  
      <TextInput  
        style={styles.input}  
        placeholder="Contraseña"  
        value={password}  
        onChangeText={setPassword}  
        secureTextEntry  
      />  
      <Button title="Iniciar Sesión" onPress={handleLogin} />  
    </View>  
  );  
}  


const styles = StyleSheet.create({  
  container: {  
    flex: 1,  
    alignItems: 'center',  
    justifyContent: 'center',  
    padding: 35,  
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
