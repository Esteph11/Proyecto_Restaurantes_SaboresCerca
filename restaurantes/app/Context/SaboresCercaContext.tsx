import React, { createContext, useContext, useEffect, useState } from 'react';

const SaboresContext = createContext();

export const SaboresProvider = ({ children }) => {
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

    // Funciones para listar datos con manejo de errores
    async function listarUsuarios() {
        try {
            const resp = await fetch('http://localhost:5000/usuarios');
            if (!resp.ok) throw new Error('Error al obtener los usuarios');
            const data = await resp.json();
            setUsuarios(data);
        } catch (error) {
            console.error(error);
            alert('No se pudo cargar la lista de usuarios');
        }
    }

    async function listarNegocios() {
        try {
            const resp = await fetch('http://localhost:5000/negocios');
            if (!resp.ok) throw new Error('Error al obtener los negocios');
            const data = await resp.json();
            setNegocios(data);
        } catch (error) {
            console.error(error);
        }
    }

    async function listarMenus() {
        try {
            const resp = await fetch('http://localhost:5000/menus');
            if (!resp.ok) throw new Error('Error al obtener los menús');
            const data = await resp.json();
            setMenus(data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <SaboresContext.Provider
            value={{
                usuarios,
                negocios,
                menus,
                comentarios,
                promociones,
                puntosFidelidad,
                listarUsuarios,
                listarNegocios,
                listarMenus,
            }}
        >
            {children}
        </SaboresContext.Provider>
    );
};

export const useSaboresContext = () => {
    return useContext(SaboresContext);
};
