import { createContext } from 'react';

export const SaboresContext = createContext({
  usuarios: [],
  negocios: [],
  menus: [],
  comentarios: [],
  promociones: [],
  puntosFidelidad: [],
  agregarUsuario: (usuario: any) => {},
  actualizarUsuario: (usuario: any) => {},
  eliminarUsuario: (id: number) => {},
  // Define aquí las funciones adicionales si es necesario
});

