import React, { createContext, useContext, useEffect, useState } from 'react';  

const SaboresContext = createContext();  

export const SaboresProvider = ({ children }) => {  
    const [usuarios, setUsuarios] = useState([]);  // Cambié "userusuarios" a "usuarios" para mayor claridad  

    useEffect(() => {  
        // Simula la carga de usuarios, puedes cargar desde una API  
        const usuariosData = [  // Cambié el nombre de "Usuarios" a "usuariosData" para evitar confusiones  
            { correo_electronico: 'Admin', contraseña: 'pass', id_rol: 2 },  
            { correo_electronico: 'Ana Castillo', contraseña: 'user123', id_rol: 1 },  
        ];  
        setUsuarios(usuariosData);  // Cambié "userusuarios" a "usuariosData" para definir el estado correctamente  
    }, []);  

    return (  
        <SaboresContext.Provider value={{ usuarios }}>  // Cambié "userusuarios" a "usuarios"  
            {children}  
        </SaboresContext.Provider>  
    );  
};  

export const useSaboresContext = () => {  
    return useContext(SaboresContext);  
};  