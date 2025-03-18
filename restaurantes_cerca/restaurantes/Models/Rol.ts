export interface Rol {
    id: number;
    nombre: string;
    email: string;
    rol: 'admin' | 'usuario';
}