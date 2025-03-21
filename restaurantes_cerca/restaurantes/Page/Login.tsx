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



/*import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../Components/Navigation';
import { useSaboresContext } from '../Context/SaboresContext'; // Importar el contexto

type LoginNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<LoginNavigationProp>();

  const { usuarios } = useSaboresContext(); // Traer usuarios desde el contexto 👈

  const handleLogin = () => {
    const user = usuarios.find(u => u.email === username);

    if (user && user.password === password) {
      if (user.id_rol === 2) {
        navigation.navigate('Admin');
      } else {
        navigation.navigate('User');
      }
    } else {
      Alert.alert('Error', 'Credenciales inválidas');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Correo electrónico"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <TextInput
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <Button title="Iniciar Sesión" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default Login;


/*import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';  
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';  
import { SaboresContext } from '../Context/SaboresContext'; // Asegúrate de que la ruta sea correcta  

interface ViewRect {  
    children: ReactNode;  
}  

// Proveedor de contexto  
const SaboresProvider = ({ children }: ViewRect) => {  
    const [usuarios, setUsuarios] = useState([]);  
    const [negocios, setNegocios] = useState([]);  
    const [menus, setMenus] = useState([]);  
    const [comentarios, setComentarios] = useState([]);  
    const [promociones, setPromociones] = useState([]);  
    const [puntosFidelidad, setPuntosFidelidad] = useState([]);  
    
    useEffect(() => {  
        listarUsuarios();  
        listarNegocios();  
        listarMenus();  
        listarComentarios();  
        listarPromociones();  
        listarPuntosFidelidad();  
    }, []);  

    // Funciones para listar datos  
    async function listarUsuarios() {  
        const resp = await fetch('http://localhost:5000/usuarios');  
        const data = await resp.json();  
        setUsuarios(data);  
    }  

    // Aquí van las otras funciones de listar, agregar, actualizar y eliminar (similar a lo que tenías)  

    return (  
        <SaboresContext.Provider  
            value={{  
                usuarios,  
                negocios,  
                menus,  
                comentarios,  
                promociones,  
                puntosFidelidad,  
                // Aquí van las funciones para agregar, actualizar, eliminar  
            }}  
        >  
            {children}  
        </SaboresContext.Provider>  
    );  
};  

// Hook para usar el contexto  
export const useSaboresContext = () => {  
    return useContext(SaboresContext); // Asegúrate de devolver el contexto correcto  
};  

// Componente de inicio de sesión  
const Login = () => {  
    const [username, setUsername] = useState('');  
    const [password, setPassword] = useState('');  
    const { usuarios } = useSaboresContext(); // Usar el contexto para manejar usuarios  

    const handleLogin = () => {  
        // Aquí puedes verificar si el usuario existe en el contexto  
        const user = usuarios.find(u => u.username === username && u.password === password);  
        if (user) {  
            Alert.alert('Login Successful', `Welcome ${username}!`);  
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

// Componente principal que utiliza el proveedor y el Login  
const App = () => {  
    return (  
        <SaboresProvider>  
            <Login />  
        </SaboresProvider>  
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

export default App;  



/*import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSaboresContext } from '../Context/useSaboresContext';
//import { useSaboresContext } from './Provider/SaboresProvider';

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


/*
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

  */