import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';  
import { Alert } from 'react-native';  
import { Sabores } from '../Models/Sabores'; // Asegúrate de que la ruta sea correcta  

interface ViewRect {  
    children: ReactNode;  
}  

interface SaboresContextType {  
    sabores: Sabores[];  
    agregarSabores: (descripcion: string) => void;  
    getSabores: () => Promise<void>;  
    deleteSabores: (id: number) => Promise<void>;  
    setEditingSabores: (sabores: Sabores) => void;  
    texto: string;  
    setTexto: (texto: string) => void;  
}  

// Creando el contexto  
export const SaboresContext = createContext<SaboresContextType>({  
    sabores: [],  
    agregarSabores: () => {},  
    getSabores: async () => {},  
    deleteSabores: async (id: number) => {},  
    setEditingSabores: () => {},  
    texto: '',  
    setTexto: () => {}  
});  

// Proveedor de contexto  
export const SaboresProvider = ({ children }: ViewRect) => {  
    const [sabores, setSabores] = useState<Sabores[]>([]);  
    const [texto, setTexto] = useState('');  
    const [saboresEditar, setSaboresEditar] = useState<Sabores>({ id: 0, descripcion: '' });  

    // Función para agregar o actualizar sabores  
    const agregarSabores = async (text: string) => {  
        if (!text.trim()) {  
            Alert.alert('Error', 'El campo no puede quedar vacío');  
            return;  
        }  

        try {  
            let response;  
            const nuevoSabores = { descripcion: text };  

            if (saboresEditar.id !== 0) {  
                // Actualizar un sabor existente  
                nuevoSabores.id = saboresEditar.id;  
                response = await fetch(`http://localhost:5000/sabores`, {  
                    method: 'PUT',  
                    headers: { 'Content-Type': 'application/json' },  
                    body: JSON.stringify(nuevoSabores),  
                });  
            } else {  
                // Agregar un nuevo sabor  
                response = await fetch('http://localhost:5000/sabores', {  
                    method: 'POST',  
                    headers: { 'Content-Type': 'application/json' },  
                    body: JSON.stringify(nuevoSabores),  
                });  
            }  

            if (!response.ok) {  
                Alert.alert('Ocurrió un error');  
                return;  
            }  

            Alert.alert('Agregado exitosamente');  
            await getSabores(); // Actualizar la lista después de agregar  

        } catch (error) {  
            Alert.alert('Error', 'Ocurrió un error: ' + error);  
        }  
    };  

    // Función para obtener sabores  
    const getSabores = async () => {  
        try {  
            const response = await fetch('http://localhost:5000/sabores', {  
                method: 'GET',  
                headers: { 'Content-Type': 'application/json' }  
            });  

            const respuestaSabores = await response.json();  
            setSabores(respuestaSabores);  
        } catch (error) {  
            Alert.alert('Error', 'Ocurrió un error: ' + error);  
        }  
    };  

    // Función para eliminar un sabor  
    const deleteSabores = async (id: number) => {  
        try {  
            await fetch(`http://localhost:5000/sabores/${id}`, { method: 'DELETE' });  
            await getSabores(); // Recargar la lista después de eliminar  
        } catch (error) {  
            console.error('Error al eliminar sabor:', error);  
        }  
    };  

    // Función para establecer la tarea en edición  
    const setEditingSabores = (sabores: Sabores) => {  
        setSaboresEditar(sabores);  
        setTexto(sabores.descripcion);  
    };  

    useEffect(() => {  
        getSabores(); // Cargar sabores al iniciar  
    }, []);  

    return (  
        <SaboresContext.Provider value={{  
            sabores,  
            agregarSabores,  
            getSabores,  
            deleteSabores,  
            setEditingSabores,  
            texto,  
            setTexto  
        }}>  
            {children}  
        </SaboresContext.Provider>  
    );  
};  

// Hook para usar el contexto  
export const useSaboresContext = () => {  
    return useContext(SaboresContext);  
};  

/*import { View, Text, Alert } from 'react-native'
import React, { ReactNode, useContext, useState } from 'react'
import { ContextTarea } from '../Context/ContextTarea'
import { Tarea } from '../Models/Tarea'
import { useNavigation } from '@react-navigation/native'


interface ViewRect{
    children: ReactNode
}
export default function TareaProvider({children}:ViewRect) {

  const [tarea,setTarea] = useState<Tarea[]> ([]);
  const [texto, setTexto] =useState('');
  const [tareaEditar, setTareaEditar]= useState<Tarea>({id:0,descripcion:''})

 function agregarTarea(text:string){

    if(!text.trim()){
      Alert.alert('Error','El campo no puede quedar vacio')
      return
    }

    try {

      let response;
      //se guarda
      if(tareaEditar.id!=0){
        const nuevaTarea= {descripcion:text}

        response= fetch('http://localhost:5000/tarea',{
          method:'POST',
          headers:{
             'Content-Type':'application/json'
          },
          body:JSON.stringify(nuevaTarea)
        })
      }
      else{
        //se actualizada

        const nuevaTarea= {id:tareaEditar.id,descripcion:text}

        response = fetch('http://localhost:5000/tarea',{
          method:'PUT',
          headers:{
             'Content-Type':'application/json'
          },
          body:JSON.stringify(nuevaTarea)
        })
      }
    

      if(!response){
        Alert.alert('Ocurrio un error')
        return
      }

      Alert.alert('Agregado exitosamente')

      
    } catch (error) {
      
    }
 }

   const getTarea = async () =>{
 
     try {
       
       const response = await fetch('http://localhost:5000/tarea',{
         method:'GET',
         headers:{
           'Content-Type':'application/json'
         }
        })
 
        const respuestaTarea= await response.json()
        
        setTarea(respuestaTarea)
 
     } catch (error) {
       Alert.alert('Error','Ocurrio un error ' + error)
     }
    
 
   }

   const deleteTarea = async (id:number) => {
    try {
      await fetch(`http://localhost:5000/tarea/${id}`, { method: 'DELETE' });
      getTarea(); // Recargar la lista después de eliminar
    } catch (error) {
      console.error('Error al eliminar tarea:', error);
    }
  };
  
  const setEditingTarea = (tarea:Tarea) => {
    setTareaEditar(tarea); // Guardar la tarea seleccionada en el contexto
    setTexto(tarea.descripcion)
  };
  
  return (
   <ContextTarea.Provider value={{tarea,agregarTarea,setTarea,
                          getTarea,deleteTarea,setEditingTarea,
                          texto,setTexto}}>
    {children}
   </ContextTarea.Provider>
  )
}

export const useContextTarea =()=>{
    return useContext(ContextTarea)
}


/*import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';  
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';  
import { SaboresContext } from '../Context/SaboresContext'; // Asegúrate de que la ruta sea correcta  
import { Tarea } from '../Models/Tarea'
import { useNavigation } from '@react-navigation/native'

interface ViewRect {  
    children: ReactNode;  
}  

// Proveedor de contexto  
const SaboresProvider = ({ children }: ViewRect) => {  
    const [usuarios, setUsuarios] = useState([]);  
    const [negocios, setNegocios] = useState([]);  
    const [menus, setMenus] = useState([]);  
    const [comentarios, setComentarios] = useState([]);  
    const [promociones, setPromociones] = useState([]);  
    const [puntosFidelidad, setPuntosFidelidad] = useState([]);  
    
    useEffect(() => {  
        listarUsuarios();  
        listarNegocios();  
        listarMenus();  
        listarComentarios();  
        listarPromociones();  
        listarPuntosFidelidad();  
    }, []);  

    // Funciones para listar datos  
    async function listarUsuarios() {  
        const resp = await fetch('http://localhost:5000/usuarios');  
        const data = await resp.json();  
        setUsuarios(data);  
    }  

    // Aquí van las otras funciones de listar, agregar, actualizar y eliminar (similar a lo que tenías)  

    return (  
        <SaboresContext.Provider  
            value={{  
                usuarios,  
                negocios,  
                menus,  
                comentarios,  
                promociones,  
                puntosFidelidad,  
                // Aquí van las funciones para agregar, actualizar, eliminar  
            }}  
        >  
            {children}  
        </SaboresContext.Provider>  
    );  
};  

// Hook para usar el contexto  
export const useSaboresContext = () => {  
    return useContext(SaboresContext); // Asegúrate de devolver el contexto correcto  
};  

// Componente de inicio de sesión  
const Login = () => {  
    const [username, setUsername] = useState('');  
    const [password, setPassword] = useState('');  
    const { usuarios } = useSaboresContext(); // Usar el contexto para manejar usuarios  

    const handleLogin = () => {  
        // Aquí puedes verificar si el usuario existe en el contexto  
        const user = usuarios.find(u => u.username === username && u.password === password);  
        if (user) {  
            Alert.alert('Login Successful', `Welcome ${username}!`);  
        } else {  
            Alert.alert('Login Failed', 'Invalid username or password');  
        }  
    };  

    return (  
        <View style={styles.container}>  
            <Text style={styles.title}>Login</Text>  
            <TextInput  
                style={styles.input}  
                placeholder="Username"  
                value={username}  
                onChangeText={setUsername}  
            />  
            <TextInput  
                style={styles.input}  
                placeholder="Password"  
                value={password}  
                onChangeText={setPassword}  
                secureTextEntry  
            />  
            <Button title="Login" onPress={handleLogin} />  
        </View>  
    );  
};  

// Componente principal que utiliza el proveedor y el Login  
const App = () => {  
    return (  
        <SaboresProvider>  
            <Login />  
        </SaboresProvider>  
    );  
};  

const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        alignItems: 'center',  
        justifyContent: 'center',  
        padding: 16,  
    },  
    title: {  
        fontSize: 24,  
        marginBottom: 20,  
    },  
    input: {  
        width: '100%',  
        padding: 10,  
        marginBottom: 12,  
        borderWidth: 1,  
        borderColor: 'gray',  
        borderRadius: 5,  
    },  
});  

export default App;  
*/