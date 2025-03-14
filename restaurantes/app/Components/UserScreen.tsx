import React from 'react';  
import { StyleSheet, Text, View, Button, Alert } from 'react-native';  

const UserScreen = ({ navigation }) => {  
  const handleLogout = () => {  
    Alert.alert('Logout', '¿Seguro que deseas cerrar sesión?', [  
      { text: 'Cancelar' },  
      { text: 'Cerrar Sesión', onPress: () => navigation.navigate('Login') },  
    ]);  
  };  

  const handleViewMenu = () => {  
    // Aquí puedes agregar la funcionalidad para ver el menú  
    Alert.alert('Funcionalidad no implementada', 'Pronto podrás ver el menú.');  
  };  

  return (  
    <View style={styles.container}>  
      <Text style={styles.title}>Panel de Usuario</Text>  
      <Button title="Ver Menú" onPress={handleViewMenu} />  
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

export default UserScreen;  
