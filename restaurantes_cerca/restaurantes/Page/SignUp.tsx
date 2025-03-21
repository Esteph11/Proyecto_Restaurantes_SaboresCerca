import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SignUp = () => {
  return (
    <View style={styles.container}>
      <Text>Registro de Usuario</Text>
      {/* Implementa el formulario de registro aquí */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SignUp;