const { DataTypes } = require('sequelize');  
const sequelize = require('../Connection/Connection');  
const Negocios = require('./Negocios'); // Importar el modelo Negocios  

const Promociones = sequelize.define('Promociones', {  
    id_promocion: {  
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
    descripcion: {  
        type: DataTypes.TEXT,  
    },  
    fecha_inicio: {  
        type: DataTypes.DATE,  
    },  
    fecha_fin: {  
        type: DataTypes.DATE,  
    },  
}, {  
    tableName: 'Promociones',  
    timestamps: false,  
});  

module.exports = Promociones;  