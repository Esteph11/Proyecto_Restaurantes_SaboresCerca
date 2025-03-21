import React, { createContext, useContext, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Button, Alert } from 'react-native';
import { useSaboresContext } from '../../Context/SaboresContext';
import { Negocios } from '../../Models/Negocios';

const Usuario = () => {
  const { negocios, agregarNegocio, actualizarNegocio, eliminarNegocio } = useSaboresContext();

  const VerDetalles = (id: number) => {
    const negocio = negocios.find((n: Negocios) => n.id_negocio === id);
    Alert.alert('Detalles del Restaurante', negocio ? negocio.name : 'No encontrado');
  };

  const AgregarNegocio = () => {
    const nuevoNegocio = { id: negocios.length + 1, name: `Restaurante ${negocios.length + 1}` };
    agregarNegocio(nuevoNegocio);
    Alert.alert('Negocio agregado', nuevoNegocio.name);
  };

  const ActualizarNegocio = (id: number) => {
    const nuevoNombre = `Restaurante Actualizado ${id}`;
    actualizarNegocio(id, nuevoNombre);
    Alert.alert('Negocio actualizado', nuevoNombre);
  };

  const EliminarNegocio = (id: number) => {
    eliminarNegocio(id);
    Alert.alert('Negocio eliminado', `El negocio con ID ${id} ha sido eliminado.`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Restaurantes</Text>
      <Button title="Agregar Negocio" onPress={AgregarNegocio} />
      <FlatList
        data={negocios}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name}</Text>
            <Button title="Ver Detalles" onPress={() => VerDetalles(item.id)} />
            <Button title="Actualizar" onPress={() => ActualizarNegocio(item.id)} />
            <Button title="Eliminar" onPress={() => EliminarNegocio(item.id)} />
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

export default Usuario;

