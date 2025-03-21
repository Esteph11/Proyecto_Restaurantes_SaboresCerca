import React, { useState, useContext } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { SaboresContext } from '../../Context/SaboresContext';

const NegociosUser = () => {
  const { negocios } = useContext(SaboresContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Negocios</Text>
      <FlatList
        data={negocios}
        keyExtractor={(item) => item.id_negocio.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.nombre_negocio}</Text>
            <Button
              title="Ver Detalles"
              onPress={() => {
                // Aquí podrías navegar al detalle del negocio
              }}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default NegociosUser;
