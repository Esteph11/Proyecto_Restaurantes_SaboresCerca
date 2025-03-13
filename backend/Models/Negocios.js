const { DataTypes } = require('sequelize');  
const sequelize = require('../Connection/Connection');  

const Negocios = sequelize.define('Negocios', {  
    id_negocio: {  
        type: DataTypes.INTEGER,  
        primaryKey: true,  
        autoIncrement: true,  
    },  
    nombre_negocio: {  
        type: DataTypes.STRING,  
    },  
    direccion: {  
        type: DataTypes.STRING,  
    },  
    telefono: {  
        type: DataTypes.STRING,  
    },  
    horario: {  
        type: DataTypes.STRING,  
    },  
    categoria: {  
        type: DataTypes.STRING,  
    },  
    descripcion: {  
        type: DataTypes.TEXT,  
    },  
}, {  
    tableName: 'Negocios',  
    timestamps: false,  
});  

module.exports = Negocios;  