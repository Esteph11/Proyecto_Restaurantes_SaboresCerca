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




/*
import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { Usuarios } from '../Models/Usuarios';

const ContextUsuarios = createContext<{ usuarios: Usuarios[] }>({ usuarios: [] });

export const UsuariosProvider = ({ children }: { children: ReactNode }) => {
  const [usuarios, setUsuarios] = useState<Usuarios[]>([]);

  useEffect(() => {
    const usuariosData = [
      {
        id_usuario: 1,
        nombre: 'Admin',
        email: 'admin@example.com',
        password: 'pass',
        rol: 'Admin',
        id_rol: 2,
      },
      {
        id_usuario: 2,
        nombre: 'Ana Castillo',
        email: 'ana.castillo@example.com',
        password: 'user123',
        rol: 'Usuario',
        id_rol: 1,
      },
    ];
    setUsuarios(usuariosData);
  }, []);
  
  return (
    <ContextUsuarios.Provider value={{ usuarios }}>
      {children}
    </ContextUsuarios.Provider>
  );
};

export const useUsuariosContext = () => useContext(ContextUsuarios);


/*import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { Usuarios } from '../Models/Usuarios';

interface UsuarioContextType {
  usuarios: Usuarios[];
}

const SaboresCercaContext = createContext<UsuarioContextType | undefined>(undefined);

export const SaboresCercaProvider = ({ children }: { children: ReactNode }) => {
  const [usuarios, setUsuarios] = useState<Usuarios[]>([]);

  useEffect(() => {
    const usuariosData: Usuarios[] = [
      { id_usuario: 1, nombre: 'Admin', email: 'Admin', telefono: 123456, direccion: 'Admin Address', rol: 'admin' },
      { id_usuario: 2, nombre: 'Ana Castillo', email: 'Ana Castillo', telefono: 987654, direccion: 'User Address', rol: 'usuario' },
    ];
    setUsuarios(usuariosData);
  }, []);

  return (
    <SaboresCercaContext.Provider value={{ usuarios }}>
      {children}
    </SaboresCercaContext.Provider>
  );
};

export const useSaboresContext = () => {
  const context = useContext(SaboresCercaContext);
  if (!context) {
    throw new Error('useSaboresContext debe usarse dentro de un SaboresCercaProvider');
  }
  return context;
};
*/