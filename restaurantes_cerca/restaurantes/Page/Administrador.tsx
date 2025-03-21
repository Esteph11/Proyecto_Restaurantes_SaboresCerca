import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../Components/Navigation';

type AdministradorNavigationProp = StackNavigationProp<RootStackParamList, 'Admin'>;

const Administrador = () => {
  const navigation = useNavigation<AdministradorNavigationProp>();

  const handleLogout = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido al panel de administrador!</Text>
      <Button title="Gestionar Usuarios" onPress={() => navigation.navigate('Usuarios')} />
      <Button title="Gestionar Negocios" onPress={() => navigation.navigate('Negocios')} />
      <Button title="Gestionar Menús" onPress={() => navigation.navigate('Menus')} />
      <Button title="Gestionar Promociones" onPress={() => navigation.navigate('Promociones')} />
      <Button title="Gestionar Puntos de Lealtad" onPress={() => navigation.navigate('PuntosFidelidad')} />
      <Button title="Cerrar Sesión" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default Administrador;


/*import React from 'react';  
import { View, Text, StyleSheet, Button } from 'react-native';  
import { useNavigation } from '@react-navigation/native';  

const Administrador = () => {  
  const navigation = useNavigation();  

    const handleLogout = () => {  
        // Lógica para cerrar sesión  
        navigation.navigate('Login');  
    };  

  return (  
    <View style={styles.container}>  
      <Text style={styles.title}>Bienvenido al panel de administrador!</Text>  
      <Button title="Cerrar Sesión" onPress={handleLogout} />  
   </View>  
  );  
};  


const styles = StyleSheet.create({  
  container: {  
      flex: 1,  
      justifyContent: 'center',  
      alignItems: 'center',  
      padding: 16,  
  },  
  title: {  
      fontSize: 24,  
      marginBottom: 20,  
  },  
});  

export default Administrador;  */