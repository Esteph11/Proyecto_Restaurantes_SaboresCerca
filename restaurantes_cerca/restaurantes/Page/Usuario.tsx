import React from 'react';  
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';  
import { useSaboresContext } from '../Context/SaboresContext';  
import { useNavigation } from '@react-navigation/native';  

const Usuario = () => {  
    const { usuarios } = useSaboresContext();  
    const navigation = useNavigation();  

    // Simulando una lista de restaurantes (esto debería venir de tu API o estado global)  
    const Negocios = [  
        { id: 1, name: 'Restaurante A' },  
        { id: 2, name: 'Restaurante B' },  
        { id: 3, name: 'Restaurante C' },  
    ];  

    return (  
        <View style={styles.container}>  
            <Text style={styles.title}>Lista de Restaurantes</Text>  
            <FlatList  
                data={Negocios}  
                keyExtractor={item => item.id.toString()}  
                renderItem={({ item }) => (  
                    <View style={styles.item}>  
                        <Text>{item.name}</Text>  
                        <Button title="Ver Detalles" onPress={() => {/* Navegar a detalles del restaurante */}} />  
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
