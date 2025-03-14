import React from 'react';  
import { StyleSheet, Text, View, Button, Alert } from 'react-native';  

const AdminScreen = ({ navigation }) => {  
  const handleLogout = () => {  
    Alert.alert('Logout', '¿Seguro que deseas cerrar sesión?', [  
      { text: 'Cancelar' },  
      { text: 'Cerrar Sesión', onPress: () => navigation.navigate('Login') },  
    ]);  
  };  

  const handleViewUsers = () => {  
    // Aquí puedes agregar la funcionalidad para ver usuarios  
    Alert.alert('Funcionalidad no implementada', 'Pronto podrás ver la lista de usuarios.');  
  };  

  return (  
    <View style={styles.container}>  
      <Text style={styles.title}>Panel de Administrador</Text>  
      <Button title="Ver Usuarios" onPress={handleViewUsers} />  
      <Button title="Cerrar Sesión" onPress={handleLogout} />  
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
});  

export default AdminScreen;  
