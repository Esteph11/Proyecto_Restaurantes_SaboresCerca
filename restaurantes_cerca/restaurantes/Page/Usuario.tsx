import React from 'react';  
import { View, Text, StyleSheet } from 'react-native';  

const Usuario = () => {  
  return (  
    <View style={styles.container}>  
      <Text style={styles.title}>Bienvenido al panel de usuario</Text>  
      {/* Aquí puedes agregar funcionalidades para el usuario normal */}  
    </View>  
  );  
};  

const styles = StyleSheet.create({  
  container: {  
    flex: 1,  
    justifyContent: 'center',  
    alignItems: 'center',  
  },  
  title: {  
    fontSize: 24,  
  },  
});  

export default Usuario;  
