const { DataTypes } = require('sequelize');  
const sequelize = require('../Connection/Connection');  
const Usuarios = require('./Usuarios'); 
const Negocios = require('./Negocios');  

const Comentarios = sequelize.define('Comentarios', {  
    id_comentario: {  
        type: DataTypes.INTEGER,  
        primaryKey: true,  
        autoIncrement: true,  
    },  
    id_usuario: {  
        type: DataTypes.INTEGER,  
        references: {  
            model: Usuarios,  
            key: 'id_usuario',  
        },  
    },  
    id_negocio: {  
        type: DataTypes.INTEGER,  
        references: {  
            model: Negocios,  
            key: 'id_negocio',  
        },  
    },  
    calificacion: {  
        type: DataTypes.INTEGER,  
        validate: {  
            min: 1,  
            max: 5,  
        },  
    },  
    notas: {  
        type: DataTypes.TEXT,  
    },  
    fecha: {  
        type: DataTypes.DATE,  
        defaultValue: DataTypes.NOW,  
    },  
}, {  
    tableName: 'Comentarios',  
    timestamps: false,  
});  

module.exports = Comentarios;  