import { View, Text } from 'react-native';
import React, { useState, useContext, useEffect, ReactNode, createContext } from 'react';
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
      const resp = await fetch(`${API_URL}/usuarios`);
      if (!resp.ok) throw new Error('Error al cargar usuarios');
      const data = await resp.json();
      setUsuarios(data);
    } catch (error) {
      console.error(error);
      alert(error instanceof Error ? error.message : 'Ocurrió un error desconocido');
    }
  };

  const listarNegocios = async () => {
    try {
      const resp = await fetch(`${API_URL}/negocios`);
      if (!resp.ok) throw new Error('Error al cargar negocios');
      const data = await resp.json();
      setNegocios(data);
    } catch (error) {
      console.error(error);
      alert(error instanceof Error ? error.message : 'Ocurrió un error desconocido');
    }
  };

  const listarMenus = async () => {
    try {
      const resp = await fetch(`${API_URL}/menus`);
      if (!resp.ok) throw new Error('Error al cargar menús');
      const data = await resp.json();
      setMenus(data);
    } catch (error) {
      console.error(error);
      alert(error instanceof Error ? error.message : 'Ocurrió un error desconocido');
    }
  };

  const listarComentarios = async () => {
    try {
      const resp = await fetch(`${API_URL}/comentarios`);
      if (!resp.ok) throw new Error('Error al cargar comentarios');
      const data = await resp.json();
      setComentarios(data);
    } catch (error) {
      console.error(error);
      alert(error instanceof Error ? error.message : 'Ocurrió un error desconocido');
    }
  };

  // Funciones CRUD para Usuarios
  const agregarUsuario = async (usuario: Usuarios) => {
    try {
      const resp = await fetch(`${API_URL}/usuarios`, {
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
  };

  const actualizarUsuario = async (usuario: Usuarios) => {
    try {
      const resp = await fetch(`${API_URL}/usuarios/${usuario.id_usuario}`, {
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
  };

  const eliminarUsuario = async (id: number) => {
    try {
      const resp = await fetch(`${API_URL}/usuarios/${id}`, {
        method: 'DELETE',
      });
      if (!resp.ok) throw new Error('Error al eliminar usuario');
      await listarUsuarios();
      alert('Usuario eliminado correctamente');
    } catch (error) {
      console.error(error);
      alert(error instanceof Error ? error.message : 'Ocurrió un error desconocido');
    }
  };

  // Funciones CRUD para Negocios
  const agregarNegocio = async (negocio: Negocios) => {
    try {
      const resp = await fetch(`${API_URL}/negocios`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(negocio),
      });
      if (!resp.ok) throw new Error('Error al agregar negocio');
      await listarNegocios();
      alert('Negocio agregado correctamente');
    } catch (error) {
      console.error(error);
      alert(error instanceof Error ? error.message : 'Ocurrió un error desconocido');
    }
  };

  const actualizarNegocio = async (negocio: Negocios) => {
    try {
      const resp = await fetch(`${API_URL}/negocios/${negocio.id_negocio}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(negocio),
      });
      if (!resp.ok) throw new Error('Error al actualizar negocio');
      await listarNegocios();
      alert('Negocio actualizado correctamente');
    } catch (error) {
      console.error(error);
      alert(error instanceof Error ? error.message : 'Ocurrió un error desconocido');
    }
  };

  const eliminarNegocio = async (id: number) => {
    try {
      const resp = await fetch(`${API_URL}/negocios/${id}`, {
        method: 'DELETE',
      });
      if (!resp.ok) throw new Error('Error al eliminar negocio');
      await listarNegocios();
      alert('Negocio eliminado correctamente');
    } catch (error) {
      console.error(error);
      alert(error instanceof Error ? error.message : 'Ocurrió un error desconocido');
    }
  };

  // Funciones CRUD para Menús
  const agregarMenu = async (menu: Menus) => {
    try {
      const resp = await fetch(`${API_URL}/menus`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(menu),
      });
      if (!resp.ok) throw new Error('Error al agregar menú');
      await listarMenus();
      alert('Menú agregado correctamente');
    } catch (error) {
      console.error(error);
      alert(error instanceof Error ? error.message : 'Ocurrió un error desconocido');
    }
  };

  const actualizarMenu = async (menu: Menus) => {
    try {
      const resp = await fetch(`${API_URL}/menus/${menu.id_menu}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(menu),
      });
      if (!resp.ok) throw new Error('Error al actualizar menú');
      await listarMenus();
      alert('Menú actualizado correctamente');
    } catch (error) {
      console.error(error);
      alert(error instanceof Error ? error.message : 'Ocurrió un error desconocido');
    }
  };

  const eliminarMenu = async (id: number) => {
    try {
      const resp = await fetch(`${API_URL}/menus/${id}`, {
        method: 'DELETE',
      });
      if (!resp.ok) throw new Error('Error al eliminar menú');
      await listarMenus();
      alert('Menú eliminado correctamente');
    } catch (error) {
      console.error(error);
      alert(error instanceof Error ? error.message : 'Ocurrió un error desconocido');
    }
  };

  // Funciones CRUD para Comentarios
  const agregarComentario = async (comentario: Comentarios) => {
    try {
      const resp = await fetch(`${API_URL}/comentarios`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(comentario),
      });
      if (!resp.ok) throw new Error('Error al agregar comentario');
      await listarComentarios();
      alert('Comentario agregado correctamente');
    } catch (error) {
      console.error(error);
      alert(error instanceof Error ? error.message : 'Ocurrió un error desconocido');
    }
  };

  const actualizarComentario = async (comentario: Comentarios) => {
    try {
      const resp = await fetch(`${API_URL}/comentarios/${comentario.id_comentario}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(comentario),
      });
      if (!resp.ok) throw new Error('Error al actualizar comentario');
      await listarComentarios();
      alert('Comentario actualizado correctamente');
    } catch (error) {
      console.error(error);
      alert(error instanceof Error ? error.message : 'Ocurrió un error desconocido');
    }
  };

  const eliminarComentario = async (id: number) => {
    try {
      const resp = await fetch(`${API_URL}/comentarios/${id}`, {
        method: 'DELETE',
      });
      if (!resp.ok) throw new Error('Error al eliminar comentario');
      await listarComentarios();
      alert('Comentario eliminado correctamente');
    } catch (error) {
      console.error(error);
      alert(error instanceof Error ? error.message : 'Ocurrió un error desconocido');
    }
  };

  return (
    <SaboresContext.Provider
      value={{
        usuarios,
        setUsuarios,
        isLoggedIn,
        setIsLoggedIn,
        obtenerUsuarios: listarUsuarios,
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
}

export const useSaboresContext = () => {
  return useContext(SaboresContext);
};