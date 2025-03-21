import React from 'react';
import { View, Text, FlatList, StyleSheet, Button, Alert } from 'react-native';
import { useSaboresContext } from '../../Context/SaboresContext';
import { Menus } from '../../Models/Menus';

const MenusAdmin = () => {
  const { menus, agregarMenu, actualizarMenu, eliminarMenu } = useSaboresContext();

  const VerDetalles = (id: number) => {
    const menu = menus.find((m: Menus) => m.id_menu === id);
    Alert.alert('Detalles del Menú', menu ? `${menu.name} - $${menu.price}` : 'No encontrado');
  };

  const AgregarMenu = () => {
    const nuevoMenu = { id: menus.length + 1, name: `Nuevo Platillo ${menus.length + 1}`, price: Math.floor(Math.random() * 20 + 5) };
    agregarMenu(nuevoMenu);
    Alert.alert('Menú agregado', `${nuevoMenu.name} - $${nuevoMenu.price}`);
  };

  const ActualizarMenu = (id: number) => {
    const nuevoNombre = `Platillo Actualizado ${id}`;
    const nuevoPrecio = Math.floor(Math.random() * 20 + 5);
    actualizarMenu(id, nuevoNombre, nuevoPrecio);
    Alert.alert('Menú actualizado', `${nuevoNombre} - $${nuevoPrecio}`);
  };

  const EliminarMenu = (id: number) => {
    eliminarMenu(id);
    Alert.alert('Menú eliminado', `El menú con ID ${id} ha sido eliminado.`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Menús</Text>
      <Button title="Agregar Menú" onPress={AgregarMenu} />
      <FlatList
        data={menus}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name} - ${item.price}</Text>
            <Button title="Ver Detalles" onPress={() => VerDetalles(item.id)} />
            <Button title="Actualizar" onPress={() => ActualizarMenu(item.id)} />
            <Button title="Eliminar" onPress={() => EliminarMenu(item.id)} />
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

export default MenusAdmin;

