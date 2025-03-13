const { DataTypes } = require('sequelize');  
const sequelize = require('../Connection/Connection');  
const Negocios = require('./Negocios'); // Importar el modelo Negocios  

const Menus = sequelize.define('Menus', {  
    id_menu: {  
        type: DataTypes.INTEGER,  
        primaryKey: true,  
        autoIncrement: true,  
    },  
    id_negocio: {  
        type: DataTypes.INTEGER,  
        references: {  
            model: Negocios,  
            key: 'id_negocio',  
        },  
    },  
    platillo: {  
        type: DataTypes.STRING,  
    },  
    precio: {  
        type: DataTypes.DECIMAL(10, 2),  
    },  
    descripcion: {  
        type: DataTypes.TEXT,  
    },  
}, {  
    tableName: 'Menus',  
    timestamps: false,  
});  

module.exports = Menus;  