// context/SaboresContext.js  
import React, { createContext, useContext, useEffect, useState } from 'react';  

// Define el contexto  
const SaboresContext = createContext();  

// Proveedor de contexto  
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
    return useContext