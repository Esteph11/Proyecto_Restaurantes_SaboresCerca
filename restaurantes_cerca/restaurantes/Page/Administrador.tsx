// components/AdminScreen.tsx  
import React from 'react';  
import { View, Text, StyleSheet } from 'react-native';  

const Administrador = () => {  
  return (  
    <View style={styles.container}>  
      <Text style={styles.title}>Bienvenido al panel de administrador!</Text>  
      {/*Agregar funcionalidades específicas para el administrador */}  
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

export default Administrador;  