export interface Comentarios {
    id_comentario: number;
    id_usuario: number; 
    id_negocio: number; 
    calificacion: number; 
    notas?: string;
    fecha?: Date; 
}