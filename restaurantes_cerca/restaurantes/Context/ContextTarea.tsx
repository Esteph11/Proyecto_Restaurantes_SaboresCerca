
/*import React, { createContext, useContext, useEffect, useState } from 'react';  
import { Usuarios } from "../Models/Usuarios";

const ContextTarea = createContext();  

export const TareaProvider = ({ children }) => {  
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
        <ContextTarea.Provider value={{ usuarios }}>  // Cambié "userusuarios" a "usuarios"  
            {children}  
        </ContextTarea.Provider>  
    );  
};  

export const useContextTarea = () => {  
    return useContext(ContextTarea);  
};  

/*
export const ContextTarea= createContext({
    tarea: [] as Tarea[],
    setTarea: (tarea: Tarea[]) =>{},
    agregarTarea: (texto:string) =>{},
    getTarea: ()=>{},
    deleteTarea:(id:number)=>{},
    setEditingTarea:(tarea:Tarea)=>{},
    texto:'',
    setTexto:(texto:string)=>{}

})
*/
