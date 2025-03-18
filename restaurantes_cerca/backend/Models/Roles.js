const { DataTypes } = require('sequelize');  
const sequelize = require('../Connection/Connection');  

const Roles = sequelize.define('Roles', {  
    id: {  
        type: DataTypes.INTEGER,  
        primaryKey: true,  
        autoIncrement: true,  
    },  
    nombre: {  
        type: DataTypes.STRING,  
        allowNull: false,  
    },  
}, {  
    tableName: 'Roles',  
    timestamps: false,  
});  

module.exports = Roles;  
