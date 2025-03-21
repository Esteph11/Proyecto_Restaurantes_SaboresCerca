import React from 'react';
import { View, Text, FlatList, StyleSheet, Button, Alert } from 'react-native';
import { useSaboresContext } from '../../Context/SaboresContext';

const Menus = () => {
  const { menus, agregarMenu, actualizarMenu, eliminarMenu } = useSaboresContext();

  const handleVerDetalles = (id: number) => {
    const menu = menus.find(m => m.id === id);
    Alert.alert('Detalles del Menú', menu ? `${menu.name} - $${menu.price}` : 'No encontrado');
  };

  const handleAgregarMenu = () => {
    const nuevoMenu = { id: menus.length + 1, name: `Nuevo Platillo ${menus.length + 1}`, price: Math.floor(Math.random() * 20 + 5) };
    agregarMenu(nuevoMenu);
    Alert.alert('Menú agregado', `${nuevoMenu.name} - $${nuevoMenu.price}`);
  };

  const handleActualizarMenu = (id: number) => {
    const nuevoNombre = `Platillo Actualizado ${id}`;
    const nuevoPrecio = Math.floor(Math.random() * 20 + 5);
    actualizarMenu(id, nuevoNombre, nuevoPrecio);
    Alert.alert('Menú actualizado', `${nuevoNombre} - $${nuevoPrecio}`);
  };

  const handleEliminarMenu = (id: number) => {
    eliminarMenu(id);
    Alert.alert('Menú eliminado', `El menú con ID ${id} ha sido eliminado.`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Menús</Text>
      <Button title="Agregar Menú" onPress={handleAgregarMenu} />
      <FlatList
        data={menus}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name} - ${item.price}</Text>
            <Button title="Ver Detalles" onPress={() => handleVerDetalles(item.id)} />
            <Button title="Actualizar" onPress={() => handleActualizarMenu(item.id)} />
            <Button title="Eliminar" onPress={() => handleEliminarMenu(item.id)} />
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

export default Menus;


/*import React, { useContext, useEffect } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { useSaboresContext } from '../../Context/SaboresContext'; // Asegúrate de que la ruta sea correcta

const Menus = () => {
  const { menus, setMenus, obtenerUsuarios } = useSaboresContext();

  useEffect(() => {
    obtenerUsuarios(); // Llama a la función para obtener usuarios al montar el componente
  }, []);

  const eliminarMenu = (id: number) => {
    setMenus(menus.filter((m: Menus) => m.id_menu !== id));
};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Menús</Text>
      <FlatList
        data={menus}
        keyExtractor={item => item.id_menu.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.id_menu}</Text>
            <Button title="Eliminar" onPress={() => eliminarMenu(item.id_menu)} />
          </View>
        )}
      />
      <Button title="Agregar Menú" onPress={() => {/* Lógica para agregar menú }} />
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

export default Menus;
*/
