export interface Usuarios {  
    id_usuario: 1 | 2;   
    nombre: string;        
    email: string;        
    telefono?: string;   
    direccion?: string;  
    password: string;        
    rol: 'administrador' | 'usuario';
}  

