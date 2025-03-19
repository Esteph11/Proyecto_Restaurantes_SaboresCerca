import { View, Text, Alert } from 'react-native';  
import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';  
import { SaboresContext } from '../Context/SaboresContex';  
import { Rol } from '../Modelos/Rol'
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

    async function listarNegocios() {  
        const resp = await fetch('http://localhost:5000/negocios');  
        const data = await resp.json();  
        setNegocios(data);  
    }  

    async function listarMenus() {  
        const resp = await fetch('http://localhost:5000/menus');  
        const data = await resp.json();  
        setMenus(data);  
    }  

    async function listarComentarios() {  
        const resp = await fetch('http://localhost:5000/comentarios');  
        const data = await resp.json();  
        setComentarios(data);  
    }  

    async function listarPromociones() {  
        const resp = await fetch('http://localhost:5000/promociones');  
        const data = await resp.json();  
        setPromociones(data);  
    }  

    async function listarPuntosFidelidad() {  
        const resp = await fetch('http://localhost:5000/puntosFidelidad');  
        const data = await resp.json();  
        setPuntosFidelidad(data);  
    }  

    // Funciones para agregar, actualizar y eliminar  
    async function agregarUsuario(usuario) {  
        const resp = await fetch('http://localhost:5000/usuarios', {  
            method: 'POST',  
            headers: { 'Content-Type': 'application/json' },  
            body: JSON.stringify(usuario),  
        });  
        if (resp.ok) {  
            listarUsuarios(); // Actualiza la lista después de agregar  
            alert('Usuario agregado correctamente');  
        } else {  
            alert('Ocurrió un error al agregar usuario');  
        }  
    }  

    async function actualizarUsuario(usuario) {  
        const resp = await fetch(`http://localhost:5000/usuarios/${usuario.id_usuario}`, {  
            method: 'PUT',  
            headers: { 'Content-Type': 'application/json' },  
            body: JSON.stringify(usuario),  
        });  
        if (resp.ok) {  
            listarUsuarios(); // Actualiza la lista después de actualizar  
            alert('Usuario actualizado correctamente');  
        } else {  
            alert('Ocurrió un error al actualizar usuario');  
        }  
    }  

    async function eliminarUsuario(id) {  
        const resp = await fetch(`http://localhost:5000/usuarios/${id}`, {  
            method: 'DELETE',  
        });  
        if (resp.ok) {  
            listarUsuarios(); // Actualiza la lista después de eliminar  
            alert('Usuario eliminado correctamente');  
        } else {  
            alert('Ocurrió un error al eliminar usuario');  
        }  
    }  

    // Puedes agregar funciones similares para Negocios, Menus, Comentarios, Promociones y PuntosFidelidad  

    return (  
        <SaboresContext.Provider  
            value={{  
                usuarios,  
                negocios,  
                menus,  
                comentarios,  
                promociones,  
                puntosFidelidad,  
                agregarUsuario,  
                actualizarUsuario,  
                eliminarUsuario,  
                // Agrega aquí las funciones de Negocios, Menus, Comentarios, etc.  
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

export default SaboresProvider;


/*

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Alert } from 'react-native';
import { Sabores } from '../Models/Sabores';

interface SaboresContextType {
  sabores: Sabores[];
  agregarSabores: (descripcion: string) => void;
  getSabores: () => Promise<void>;
  deleteSabores: (id: number) => Promise<void>;
  setEditingSabores: (sabores: Sabores) => void;
  texto: string;
  setTexto: (texto: string) => void;
}

const SaboresContext = createContext<SaboresContextType>({} as SaboresContextType);

interface Props {
  children: ReactNode;
}

export const SaboresProvider = ({ children }: Props) => {
  const [sabores, setSabores] = useState<Sabores[]>([]);
  const [texto, setTexto] = useState('');
  const [saboresEditar, setSaboresEditar] = useState<Sabores>({ id: 0, descripcion: '' });

  const agregarSabores = async (text: string) => {
    if (!text.trim()) {
      Alert.alert('Error', 'El campo no puede quedar vacío');
      return;
    }

    try {
      let response;
      const nuevoSabores = { descripcion: text };

      if (saboresEditar.id !== 0) {
        nuevoSabores.id = saboresEditar.id;
        response = await fetch(`http://localhost:5000/sabores`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(nuevoSabores),
        });
      } else {
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
      await getSabores();
    } catch (error) {
      Alert.alert('Error', 'Ocurrió un error: ' + error);
    }
  };

  const getSabores = async () => {
    try {
      const response = await fetch('http://localhost:5000/sabores');
      const respuestaSabores = await response.json();
      setSabores(respuestaSabores);
    } catch (error) {
      Alert.alert('Error', 'Ocurrió un error: ' + error);
    }
  };

  const deleteSabores = async (id: number) => {
    try {
      await fetch(`http://localhost:5000/sabores/${id}`, { method: 'DELETE' });
      await getSabores();
    } catch (error) {
      console.error('Error al eliminar sabor:', error);
    }
  };

  const setEditingSabores = (sabores: Sabores) => {
    setSaboresEditar(sabores);
    setTexto(sabores.descripcion);
  };

  useEffect(() => {
    getSabores();
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

export const useSaboresContext = () => useContext(SaboresContext);


*/