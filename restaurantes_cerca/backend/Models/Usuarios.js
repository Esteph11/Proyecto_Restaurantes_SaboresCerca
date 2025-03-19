const { DataTypes } = require('sequelize');  
const sequelize = require('../Connection/Connection');  
const Roles = require('./Roles'); // Importar el modelo Roles  

const Usuarios = sequelize.define('Usuarios', {  
    id_usuario: {  
        type: DataTypes.INTEGER,  
        primaryKey: true,  
        autoIncrement: true,  
    },  
    nombre: {  
        type: DataTypes.STRING,  
    },  
    email: {  
        type: DataTypes.STRING,  
    },  
    telefono: {  
        type: DataTypes.STRING,  
    },  
    direccion: {  
        type: DataTypes.STRING,  
    },  
    password: {
        type: DataTypes.STRING,
    },
    id_rol: {  
        type: DataTypes.INTEGER,  
        references: {  
            model: Roles,  
            key: 'id',  
        },  
    },  
}, {  
    tableName: 'Usuarios',  
    timestamps: false,  
});  

module.exports = Usuarios;  