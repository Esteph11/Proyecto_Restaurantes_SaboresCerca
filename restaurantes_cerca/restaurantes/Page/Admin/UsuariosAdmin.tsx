import React from 'react';
import { View, Text, FlatList, StyleSheet, Button, Alert } from 'react-native';
import { useSaboresContext } from '../../Context/SaboresContext';
import { Usuarios } from '../../Models/Usuarios';

const UsuariosAdmin = () => {
  const { usuarios, agregarUsuario, actualizarUsuario, eliminarUsuario } = useSaboresContext();
  
  const VerDetalles = (id: number) => {
    const usuario = usuarios.find((u: Usuarios) => u.id_usuario === id);
    Alert.alert(
      'Detalles del Usuario',
      usuario
        ? `Nombre: ${usuario.nombre}\nEmail: ${usuario.email}\nRol: ${usuario.rol}`
        : 'Usuario no encontrado'
    );
  };

  const AgregarUsuario = () => {
    const nuevoUsuario = {
      id_usuario: usuarios.length + 1,
      nombre: `Usuario ${usuarios.length + 1}`,
      email: `usuario${usuarios.length + 1}@example.com`,
      telefono: ' ',
      direccion: ' ',
      password: '1234',
      rol: 'Usuario',
    };
    agregarUsuario(nuevoUsuario);
    Alert.alert('Usuario agregado', nuevoUsuario.nombre);
  };

  const ActualizarUsuario = (id_usuario: number) => {
    const nuevoNombre = `Usuario Actualizado ${id_usuario}`;
    const nuevoEmail = `actualizado${id_usuario}@example.com`;
    actualizarUsuario(id_usuario, { nombre: nuevoNombre, email: nuevoEmail });
    Alert.alert('Usuario actualizado', nuevoNombre);
  };

  const EliminarUsuario = (id_usuario: number) => {
    eliminarUsuario(id_usuario);
    Alert.alert('Usuario eliminado', `El usuario con ID ${id_usuario} ha sido eliminado.`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gestión de Usuarios</Text>
      <Button title="Agregar Usuario" onPress={AgregarUsuario} />
      <FlatList
        data={usuarios}
        keyExtractor={item => item.id_usuario.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.nombre}</Text>
            <Button title="Ver Detalles" onPress={() => VerDetalles(item.id_usuario)} />
            <Button title="Actualizar" onPress={() => ActualizarUsuario(item.id_usuario)} />
            <Button title="Eliminar" onPress={() => EliminarUsuario(item.id_usuario)} />
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

export default UsuariosAdmin;

