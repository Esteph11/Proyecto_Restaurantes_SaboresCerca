import { View, Text } from 'react-native'
import React, { useState, useEffect, ReactNode } from 'react';
import { Usuarios } from '../Models/Usuarios';
import { Negocios } from '../Models/Negocios';
import { Menus } from '../Models/Menus';
import { Comentarios } from '../Models/Comentarios';
import { SaboresContext } from '../Context/SaboresContext';

interface NodeReact {
  children: ReactNode;
}

export default function SaboresProvider({ children }: NodeReact) {
  const [usuarios, setUsuarios] = useState<Usuarios[]>([]);
  const [negocios, setNegocios] = useState<Negocios[]>([]);
  const [menus, setMenus] = useState<Menus[]>([]);
  const [comentarios, setComentarios] = useState<Comentarios[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const API_URL = 'http://192.168.0.192:3000';
  useEffect(() => {
    const fetchData = async () => {
      await listarUsuarios();
      await listarNegocios();
      await listarMenus();
      await listarComentarios();

    };
    fetchData();
  }, []);

  // Funciones para listar datos  
  const listarUsuarios = async () => {
    try {
      const resp = await fetch('http://localhost:3000/usuarios');
      if (!resp.ok) throw new Error('Error al cargar usuarios');
      const data = await resp.json();
      setUsuarios(data);
    } catch (error) {
      console.error(error);
      alert(error instanceof Error ? error.message : 'Ocurrió un error desconocido');
    }
  }

  const listarNegocios = async () => {
    try {
      const resp = await fetch('http://localhost:3000/negocios');
      if (!resp.ok) throw new Error('Error al cargar negocios');
      const data = await resp.json();
      setNegocios(data);
    } catch (error) {
      console.error(error);
      alert(error instanceof Error ? error.message : 'Ocurrió un error desconocido');
    }
  }

  const listarMenus = async () => {
    try {
      const resp = await fetch('http://localhost:3000/menus');
      if (!resp.ok) throw new Error('Error al cargar menús');
      const data = await resp.json();
      setMenus(data);
    } catch (error) {
      console.error(error);
      alert(error instanceof Error ? error.message : 'Ocurrió un error desconocido');
    }
  }

  const listarComentarios = async () => {
    try {
      const resp = await fetch('http://localhost:3000/comentarios');
      if (!resp.ok) throw new Error('Error al cargar comentarios');
      const data = await resp.json();
      setComentarios(data);
    } catch (error) {
      console.error(error);
      alert(error instanceof Error ? error.message : 'Ocurrió un error desconocido');
    }
  }

  /*const listarPromociones = async () => {  
    try {  
      const resp = await fetch('http://localhost:5000/promociones');  
      if (!resp.ok) throw new Error('Error al cargar promociones');  
      const data = await resp.json();  
      setPromociones(data);  
    } catch (error) {  
      console.error(error);  
      alert(error instanceof Error ? error.message : 'Ocurrió un error desconocido');
    }  
  }   

  const listarPuntosFidelidad = async () => {  
    try {  
      const resp = await fetch('http://localhost:5000/puntosFidelidad');  
      if (!resp.ok) throw new Error('Error al cargar puntos de fidelidad');  
      const data = await resp.json();  
      setPuntosFidelidad(data);  
    } catch (error) {  
      console.error(error);  
      alert(error instanceof Error ? error.message : 'Ocurrió un error desconocido');
    }   
  } */

  // Funciones CRUD para usuarios (ejemplo)  
  const agregarUsuario = async (usuario: Usuarios) => {
    try {
      const resp = await fetch('http://localhost:3000/usuarios', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(usuario),
      });
      if (!resp.ok) throw new Error('Error al agregar usuario');
      await listarUsuarios();
      alert('Usuario agregado correctamente');
    } catch (error) {
      console.error(error);
      alert(error instanceof Error ? error.message : 'Ocurrió un error desconocido');
    }
  }

  const actualizarUsuario = async (usuario: Usuarios) => {
    try {
      const resp = await fetch(`http://localhost:3000/usuarios/${usuario.id_usuario}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(usuario),
      });
      if (!resp.ok) throw new Error('Error al actualizar usuario');
      await listarUsuarios();
      alert('Usuario actualizado correctamente');
    } catch (error) {
      console.error(error);
      alert(error instanceof Error ? error.message : 'Ocurrió un error desconocido');
    }
  }

  const eliminarUsuario = async (id: number) => {
    try {
      const resp = await fetch(`http://localhost:3000/usuarios/${id}`, {
        method: 'DELETE',
      });
      if (!resp.ok) throw new Error('Error al eliminar usuario');
      await listarUsuarios();
      alert('Usuario eliminado correctamente');
    } catch (error) {
      console.error(error);
      alert(error instanceof Error ? error.message : 'Ocurrió un error desconocido');
    }
  }

  return (
    <SaboresContext.Provider
      value={{
        usuarios,
        setUsuarios,
        isLoggedIn,
        setIsLoggedIn,
        obtenerUsuarios: listarUsuarios, // Puedes usar listarUsuarios como obtenerUsuarios
        negocios,
        setNegocios,
        menus,
        setMenus,
        comentarios,
        setComentarios,
        agregarUsuario,
        actualizarUsuario,
        eliminarUsuario,
        agregarNegocio,
        actualizarNegocio,
        eliminarNegocio,
        agregarMenu,
        actualizarMenu,
        eliminarMenu,
        agregarComentario,
        actualizarComentario,
        eliminarComentario,
      }}
    >
      {children}
    </SaboresContext.Provider>
  );
};
