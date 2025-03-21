import React, { useState, useContext } from 'react';
import { View, Text, FlatList, Button, TextInput, StyleSheet } from 'react-native';
import { SaboresContext } from '../../Context/SaboresContext';
import { Negocios } from '../../Models/Negocios'; // Asegúrate de que la ruta sea correcta

const Comentarios = () => {
  const { negocios } = useContext(SaboresContext);
  const [comentario, setComentario] = useState('');

  const handleAgregarComentario = (negocioId: number) => {
    // Lógica para agregar comentario
    console.log(`Comentario para negocio ${negocioId}: ${comentario}`);
    setComentario('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Comentarios</Text>
      <FlatList
        data={negocios}
        keyExtractor={item => item.id_negocio.toString()} // Asegúrate de que el campo sea correcto
        renderItem={({ item }: { item: Negocios }) => ( // Asegúrate de que el tipo sea correcto
          <View style={styles.item}>
            <Text>{item.nombre_negocio}</Text> // Asegúrate de que el campo sea correcto
            <TextInput
              placeholder="Escribe tu comentario"
              value={comentario}
              onChangeText={setComentario}
              style={styles.input}
            />
            <Button title="Agregar Comentario" onPress={() => handleAgregarComentario(item.id_negocio)} />
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default Comentarios;