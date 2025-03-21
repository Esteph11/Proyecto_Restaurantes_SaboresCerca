/*import React from 'react';
import { View, Text, FlatList, StyleSheet, Button, Alert } from 'react-native';
import { useSaboresContext } from '../Context/SaboresContext';

const Usuario = () => {
  const { negocios, agregarNegocio, actualizarNegocio, eliminarNegocio } = useSaboresContext();

  const handleVerDetalles = (id: number) => {
    const negocio = negocios.find(n => n.id === id);
    Alert.alert('Detalles del Restaurante', negocio ? negocio.name : 'No encontrado');
  };

  const handleAgregarNegocio = () => {
    const nuevoNegocio = { id: negocios.length + 1, name: `Restaurante ${negocios.length + 1}` };
    agregarNegocio(nuevoNegocio);
    Alert.alert('Negocio agregado', nuevoNegocio.name);
  };

  const handleActualizarNegocio = (id: number) => {
    const nuevoNombre = `Restaurante Actualizado ${id}`;
    actualizarNegocio(id, nuevoNombre);
    Alert.alert('Negocio actualizado', nuevoNombre);
  };

  const handleEliminarNegocio = (id: number) => {
    eliminarNegocio(id);
    Alert.alert('Negocio eliminado', `El negocio con ID ${id} ha sido eliminado.`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Restaurantes</Text>
      <Button title="Agregar Negocio" onPress={handleAgregarNegocio} />
      <FlatList
        data={negocios}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name}</Text>
            <Button title="Ver Detalles" onPress={() => handleVerDetalles(item.id)} />
            <Button title="Actualizar" onPress={() => handleActualizarNegocio(item.id)} />
            <Button title="Eliminar" onPress={() => handleEliminarNegocio(item.id)} />
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


/*import React, { useContext } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { SaboresContext } from '../context/SaboresContext';

const Negocios = () => {
  const { negocios, setNegocios } = useContext(SaboresContext);

  const eliminarNegocio = (id_negocios) => {
    setNegocios(negocios.filter(n => n.id_negocios !== id_negocios));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Negocios</Text>
      <FlatList
        data={negocios}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name}</Text>
            <Button title="Eliminar" onPress={() => eliminarNegocio(item.id)} />
          </View>
        )}
      />
      <Button title="Agregar Negocio" onPress={() => {/* Lógica para agregar negocio }} />
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

export default Negocios;
*/