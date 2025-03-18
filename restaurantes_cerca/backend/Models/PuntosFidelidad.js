const { DataTypes } = require('sequelize');  
const sequelize = require('../Connection/Connection');  
const Usuarios = require('./Usuarios'); // Importar el modelo Usuarios  

const PuntosFidelidad = sequelize.define('PuntosFidelidad', {  
    id_fidelidad: {  
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
    puntos_acumulados: {  
        type: DataTypes.INTEGER,  
        defaultValue: 0,  
    },  
}, {  
    tableName: 'PuntosFidelidad',  
    timestamps: false,  
});  

module.exports = PuntosFidelidad;  