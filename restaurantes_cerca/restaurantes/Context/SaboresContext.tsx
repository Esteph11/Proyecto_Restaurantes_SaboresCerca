import React, { createContext } from 'react';
import { Usuarios } from '../Models/Usuarios';
import { Negocios } from '../Models/Negocios';
import { Menus } from '../Models/Menus';
import { Comentarios } from '../Models/Comentarios';

// Define the structure of your context
export interface SaboresContextType {
  usuarios: Usuarios[];
  setUsuarios: (usuarios: Usuarios[]) => void;
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  obtenerUsuarios: () => Promise<void>;
  cerrarSesion: () => void;
  negocios: Negocios[];
  setNegocios: (negocios: Negocios[]) => void;
  menus: Menus[];
  setMenus: (menus: Menus[]) => void;
  comentarios: Comentarios[];
  setComentarios: (comentarios: Comentarios[]) => void;
  agregarUsuario: (usuario: Usuarios) => Promise<void>;
  actualizarUsuario: (usuario: Usuarios) => Promise<void>;
  eliminarUsuario: (id: number) => Promise<void>;
  agregarNegocio: (negocio: Negocios) => Promise<void>;
  actualizarNegocio: (negocio: Negocios) => Promise<void>;
  eliminarNegocio: (id: number) => Promise<void>;
  agregarMenu: (menu: Menus) => Promise<void>;
  actualizarMenu: (menu: Menus) => Promise<void>;
  eliminarMenu: (id: number) => Promise<void>;
  agregarComentario: (comentario: Comentarios) => Promise<void>;
  actualizarComentario: (comentario: Comentarios) => Promise<void>;
  eliminarComentario: (id: number) => Promise<void>;
}

// Create the context with a default value
export const SaboresContext = createContext({
  usuarios: [] as Usuarios[],
  setUsuarios: (usuarios: Usuarios[]) => {},
  isLoggedIn: false,
  setIsLoggedIn: (isLoggedIn: boolean) => {},
  obtenerUsuarios: () => Promise.resolve(),
  negocios: [] as Negocios[],
  setNegocios: (negocios: Negocios[]) => {},
  menus: [] as Menus[],
  setMenus: (menus: Menus[]) => {},
  comentarios: [] as Comentarios[],
  actualizarcomentario: (comentarios: Comentarios) => Promise.resolve(),
  setComentarios: (comentarios: Comentarios[]) => {},
  agregarUsuario: (usuario: Usuarios) => Promise.resolve(),
  actualizarUsuario: (usuario: Usuarios) => Promise.resolve(),
  eliminarUsuario: (id: number) => Promise.resolve(),
  agregarNegocio: (negocio: Negocios) => Promise.resolve(),
  actualizarNegocio: (negocio: Negocios) => Promise.resolve(),
  eliminarNegocio: (id: number) => Promise.resolve(),
  agregarMenu: (menu: Menus) => Promise.resolve(),
  actualizarMenu: (menu: Menus) => Promise.resolve(),
  eliminarMenu: (id: number) => Promise.resolve(),
  agregarComentario: (comentario: Comentarios) => Promise.resolve(),
  actualizarComentario: (comentario: Comentarios)=> Promise.resolve(),
  eliminarComentario: (id: number) => Promise.resolve(),
});

